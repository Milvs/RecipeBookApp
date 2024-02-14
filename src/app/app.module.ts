import {NgModule} from "@angular/core";
import {DropdownDirective} from "./shared/dropdown.directive";
import {ShoppingListService} from "./shopping-list/shooping-list.service";


@NgModule({
  declarations: [DropdownDirective],
  exports: [DropdownDirective],
  providers:[ShoppingListService]
})
export class AppModule { }
