import { Component, OnInit } from '@angular/core';
import { dropDownOptions } from './shared/dropdown/dropdown.modal'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public dropDownOptions: dropDownOptions[] = [];
    public selectedOptionId: number = 0 ;

    constructor() { }

    public ngOnInit(): void {
        this.setDropDownOptions(8) // Set the count here - If more than 7, dropdown will show srollbar
    }

    public setDropDownOptions(count: number) {
        for (let i=1; i <= count; i++) {
            let obj = {
                id: Math.random(),
                value: `Option ${i}`
            }
            this.dropDownOptions.push(obj);
        }
    }
    

    public onSelection(id: number): void {
        console.log('selectedId', id);
        this.selectedOptionId = id;
    }

}
