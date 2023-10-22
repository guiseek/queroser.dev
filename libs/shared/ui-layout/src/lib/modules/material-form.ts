import {NgModule} from '@angular/core'
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatButtonModule} from '@angular/material/button'
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatSliderModule} from '@angular/material/slider'
import {MatSelectModule} from '@angular/material/select'
import {MatRadioModule} from '@angular/material/radio'
import {MatChipsModule} from '@angular/material/chips'

@NgModule({
  exports: [
    TextFieldModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatSelectModule,
    MatRadioModule,
    MatChipsModule
  ],
})
export class MaterialFormModule {}
