import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import * as i0 from "@angular/core";
export class AlertHelperService {
    viewAlert(icon, title, message) {
        return Swal.fire({
            icon,
            title,
            text: message,
            confirmButtonColor: this.getConfirmButtonColor(icon)
        });
    }
    viewAlertHtml(icon, title, html) {
        return Swal.fire({
            icon,
            title,
            html,
            confirmButtonColor: this.getConfirmButtonColor(icon)
        });
    }
    // Success Alert
    success(message, title = 'Success') {
        return this.viewAlert('success', title, message);
    }
    // Error Alert
    error(message, title = 'Error') {
        return this.viewAlert('error', title, message);
    }
    // Warning Alert
    warning(message, title = 'Warning') {
        return this.viewAlert('warning', title, message);
    }
    // Info Alert
    info(message, title = 'Info') {
        return this.viewAlert('info', title, message);
    }
    // Confirm Dialog
    confirm(message, title = 'Are you sure?') {
        return Swal.fire({
            icon: 'question',
            title: title,
            text: message,
            showCancelButton: true,
            confirmButtonColor: '#5E35B1',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel'
        }).then(result => result.isConfirmed);
    }
    // Loading
    loading(message = 'Please wait...') {
        Swal.fire({
            title: message,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
    }
    // Close loading
    close() {
        Swal.close();
    }
    getConfirmButtonColor(icon) {
        const colors = {
            success: '#5E35B1',
            error: '#d33',
            warning: '#f57c00',
            info: '#0288d1',
            question: '#5E35B1'
        };
        return colors[icon];
    }
    static { this.ɵfac = function AlertHelperService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AlertHelperService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AlertHelperService, factory: AlertHelperService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertHelperService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=alert-helper-service.js.map