import { Component, Input, Output, EventEmitter } from '@angular/core';
import { dropDownOptions } from './dropdown.modal'
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropDownComponent {
  @Input() options: dropDownOptions[] = [];
  @Output() onSelection:EventEmitter<number> =new EventEmitter<number>();

  public labelText: string = 'Default State';
  public selectedOption: null | dropDownOptions = null;
  isShow: boolean = false;

  public openDropDown(): void {
    this.isShow = !this.isShow;
  }
  
  public onItemHover(opt: dropDownOptions):void {
    this.labelText = `Open State (hovering over "${opt?.value}")`
  }

  public onSelectItem(opt: dropDownOptions):void {
    this.labelText = 'Selected option';
    this.isShow = !this.isShow;
    this.selectedOption = opt;
    this.onSelection.emit(this.selectedOption.id);
  }
}
