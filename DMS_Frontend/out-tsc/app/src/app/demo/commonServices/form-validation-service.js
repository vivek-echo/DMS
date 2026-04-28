import { Injectable } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "./alert-helper-service";
export class FormValidationService {
    constructor(alert) {
        this.alert = alert;
    }
    // MAIN METHOD
    validateForm(formGroup, getReadableFieldName, el) {
        if (formGroup.valid)
            return true;
        this.markAllAsTouched(formGroup);
        const firstError = this.getFirstError(formGroup, getReadableFieldName);
        if (firstError) {
            this.alert.error(firstError.message);
            setTimeout(() => {
                this.focusFirstInvalidControl(firstError.controlName, el);
            }, 200);
        }
        return false;
    }
    // 🔁 MARK ALL CONTROLS AS TOUCHED (recursive)
    markAllAsTouched(control) {
        if (control instanceof FormGroup || control instanceof FormArray) {
            Object.values(control.controls).forEach(ctrl => {
                this.markAllAsTouched(ctrl);
            });
        }
        control.markAsTouched();
    }
    // 🎯 GET FIRST ERROR (important logic)
    getFirstError(control, getReadableFieldName, parentKey = '') {
        if (control instanceof FormGroup || control instanceof FormArray) {
            for (const key of Object.keys(control.controls)) {
                const child = control.get(key);
                const result = this.getFirstError(child, getReadableFieldName, key);
                if (result)
                    return result;
            }
        }
        else if (control.invalid && control.errors) {
            const fieldName = getReadableFieldName(parentKey);
            const errorKey = Object.keys(control.errors)[0];
            const errorValue = control.errors[errorKey];
            const message = this.formatErrorMessage(fieldName, errorKey, errorValue);
            return {
                controlName: parentKey,
                message
            };
        }
        return null;
    }
    // 🧠 FORMAT MESSAGE LIKE: "Email is required"
    formatErrorMessage(field, errorKey, errorValue) {
        const messages = {
            required: `${field} is required`,
            email: `${field} is not a valid email`,
            minlength: `${field} must be at least ${errorValue.requiredLength} characters`,
            maxlength: `${field} must be less than ${errorValue.requiredLength} characters`,
            pattern: `${field} format is invalid`,
            min: `${field} must be >= ${errorValue.min}`,
            max: `${field} must be <= ${errorValue.max}`,
        };
        return messages[errorKey] || `${field} is invalid`;
    }
    // 🎯 FOCUS FIRST INVALID FIELD
    focusFirstInvalidControl(controlName, el) {
        // Try multiple selectors (important)
        const selectors = [
            `[formControlName="${controlName}"]`,
            `input[formControlName="${controlName}"]`,
            `select[formControlName="${controlName}"]`,
            `textarea[formControlName="${controlName}"]`
        ];
        let element = null;
        for (let selector of selectors) {
            element = el.nativeElement.querySelector(selector);
            if (element)
                break;
        }
        // Fallback (VERY IMPORTANT)
        if (!element) {
            element = document.querySelector('.ng-invalid');
        }
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                element.focus();
                // Optional highlight effect 🔥
                element.classList.add('focus-error');
                setTimeout(() => element?.classList.remove('focus-error'), 1500);
            }, 300); // wait for DOM
        }
    }
    static { this.ɵfac = function FormValidationService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FormValidationService)(i0.ɵɵinject(i1.AlertHelperService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FormValidationService, factory: FormValidationService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormValidationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.AlertHelperService }], null); })();
//# sourceMappingURL=form-validation-service.js.map