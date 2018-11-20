import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule ({
    exports: [ 
        PhotoComponent,
    ],
    declarations: [
        PhotoComponent,
    ],
    imports:[
        HttpClientModule,
    ]
})
export class PhotosModule {}