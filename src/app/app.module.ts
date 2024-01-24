import {NgModule} from "@angular/core";
import {DropdownDirective} from "./shared/dropdown.directive";

@NgModule({
  declarations: [DropdownDirective],
  exports: [
    DropdownDirective
  ]
})
export class AppModule { }
