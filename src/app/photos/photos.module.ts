import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";

@NgModule ({
    exports: [ 
        PhotoComponent,
    ],
    declarations: [
        PhotoComponent,
    ]
})
export class PhotosModule {}