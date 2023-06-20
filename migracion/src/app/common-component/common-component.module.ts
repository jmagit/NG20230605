import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormButtonsComponent } from './form-buttons/form-buttons.component';
import { ShowErrorsMessagesComponent } from './show-errors-messages/show-errors-messages.component';
import { ListButtonsComponent } from './list-buttons.component';
import { CardComponent } from './card.component';



@NgModule({
    exports: [
        ListButtonsComponent, FormButtonsComponent, ShowErrorsMessagesComponent,
        CardComponent,
    ],
    imports: [
        CommonModule,
        ListButtonsComponent, FormButtonsComponent, ShowErrorsMessagesComponent,
        CardComponent
    ]
})
export class CommonComponentModule { }
