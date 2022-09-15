import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class SnackService {
    
  constructor(private _toastr: ToastrService) {}

  presentError(message: string) {
    this._toastr.error(message, 'Error', { timeOut: 3000 });
  }

  presentInfo(message: string) {
    this._toastr.info(message, 'Info', { timeOut: 3000 });
  }

  presentSuccess(message: string) {
    this._toastr.success(message, 'Success', { timeOut: 3000 });
  }
}
