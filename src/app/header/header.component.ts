import {Component, EventEmitter, Output} from '@angular/core';
import {DropdownDirective} from "../shared/dropdown.directive";
import {AppModule} from "../app.module";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AppModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   @Output() featureSelected= new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
