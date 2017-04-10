import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserFormComponent }   from './user-form.component';

@NgModule({
    imports: [                                 
        CommonModule,
        FormsModule     
    ],
    declarations: [
        UserFormComponent         
    ],
    exports: [
    ],
    providers: [                
    ]
})
export class UserModule { 
}