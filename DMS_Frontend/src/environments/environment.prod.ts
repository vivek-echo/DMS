import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: true,
  apiBaseUrl: 'http://localhost/DMS/DMS_Backend/public/api'
};
