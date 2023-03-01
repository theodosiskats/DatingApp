import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ToastrModule} from 'ngx-toastr';
import {TabsModule} from "ngx-bootstrap/tabs";
import {NgxGalleryModule} from "@kolkov/ngx-gallery";
import {NgxSpinnerModule} from "ngx-spinner";
import {FileUploadModule} from "ng2-file-upload";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true,
      tapToDismiss: true,
      countDuplicates: true,
      resetTimeoutOnDuplicate: true,
      includeTitleDuplicates: true,
    }),
    TabsModule.forRoot(),
    NgxGalleryModule,
    NgxSpinnerModule.forRoot({ type: 'square-jelly-box' }),
    FileUploadModule
  ],
  exports: [
    BsDropdownModule,
    BsDatepickerModule,
    ToastrModule,
    TabsModule,
    NgxGalleryModule,
    NgxSpinnerModule,
    FileUploadModule
  ],
})
export class SharedModule {
}
