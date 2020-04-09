import { NgModule } from '@angular/core';
	
import { FileUploadComponent } from './smart.fileupload';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

@NgModule({
    declarations: [FileUploadComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: [FileUploadComponent]
})

export class FileUploadModule { }
