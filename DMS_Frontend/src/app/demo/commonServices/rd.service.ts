import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RdService {
  private readonly ports = [11100, 11101, 11102];
  private rdUrl: string | null = null;
  private captureInProgress = false;

  async initialize(): Promise<boolean> {
    for (const port of this.ports) {
      try {
        const text = await this.fetchRdServiceInfo(`http://127.0.0.1:${port}`);

        if (text.includes('RDService')) {
          this.rdUrl = `http://127.0.0.1:${port}`;
          console.log('RD Service found:', this.rdUrl);
          return true;
        }
      } catch {
        // Try the next known RD service port.
      }
    }

    alert('RD Service not running');
    return false;
  }

  async getDeviceInfo(): Promise<string | null> {
    if (!this.rdUrl) {
      const initialized = await this.initialize();
      if (!initialized) {
        return null;
      }
    }

    try {
      return await this.fetchDeviceInfo(this.rdUrl);
    } catch (error) {
      console.error('Failed to read RD service info:', error);
      return null;
    }
  }

  async capture(): Promise<string | null> {
    if (this.captureInProgress) {
      return null;
    }

    if (!this.rdUrl) {
      const initialized = await this.initialize();
      if (!initialized) {
        alert('RD Service not running');
        return null;
      }
    }

    this.captureInProgress = true;

    const pidOptions = `
      <PidOptions ver="1.0">
        <Opts fCount="1" fType="0" iCount="0" pCount="0"
          format="0" pidVer="2.0" timeout="10000" posh="UNKNOWN"/>
      </PidOptions>
    `;

    try {
      for (let attempt = 0; attempt < 3; attempt++) {
        const res = await fetch(`${this.rdUrl}/rd/capture`, {
          method: 'CAPTURE',
          headers: {
            'Content-Type': 'text/xml'
          },
          body: pidOptions
        });

        const data = await res.text();

        if (!data.includes('errCode="-1509"')) {
          return data;
        }

        await this.delay(1500);
      }

      return '<PidData><Resp errCode="-1509" errInfo="System is still checking status, please try after sometime. Meanwhile if you have not connected device then please connect it" /></PidData>';
    } catch (error) {
      console.error('Capture failed:', error);
      alert('Fingerprint capture failed');
      return null;
    } finally {
      this.captureInProgress = false;
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private async fetchRdServiceInfo(baseUrl: string): Promise<string> {
    return this.fetchByMethods(baseUrl, ['RDSERVICE', 'GET']);
  }

  private async fetchDeviceInfo(baseUrl: string): Promise<string> {
    return this.fetchByMethods(baseUrl, ['DEVICEINFO', 'RDSERVICE', 'GET']);
  }

  private async fetchByMethods(baseUrl: string, methods: string[]): Promise<string> {
    for (const method of methods) {
      try {
        const res = await fetch(`${baseUrl}/rd/info`, {
          method
        });

        if (!res.ok && res.status !== 405) {
          continue;
        }

        const text = await res.text();
        if (text) {
          return text;
        }
      } catch {
        // Try the next supported verb.
      }
    }

    throw new Error('RD info endpoint did not respond with a supported method');
  }
}
