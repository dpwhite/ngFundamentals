import { Injectable } from "@angular/core";

declare let toastr;

@Injectable()
export class ToastrService  {

    success(message: string, title?: string) {
        toastr.success(message, title);
    }
    warning(message: string, title?: string) {
        toastr.warn(message, title);
    }
    info(message: string, title?: string) {
        toastr.info(message, title);
    }
    error(message: string, title?: string) {
        toastr.error(message, title);
    }
}