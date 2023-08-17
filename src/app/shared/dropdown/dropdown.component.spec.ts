import { TestBed } from "@angular/core/testing";
import { DropDownComponent } from "./dropdown.component";
import { NO_ERRORS_SCHEMA } from "@angular/compiler";

describe('DropDownComponent', ()=> {
 let component: DropDownComponent;
 beforeEach(async ()=> {
    await TestBed.configureTestingModule({
        declarations: [DropDownComponent],
        schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    const fixture = TestBed.createComponent(DropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
 })

 it('DropDown Component should be truthy', ()=>{
    expect(component).toBeTruthy();
 })
 it('Check for init variable', ()=>{
    expect(component.isShow).toBeFalse();
    expect(component.selectedOption).toBeNull();
    expect(component.labelText).toEqual('Default State');
 })

 it('openDropDown fn check', ()=>{
    component.openDropDown()
    expect(component.isShow).toBeTrue();
 })
 it('onItemHover fn check', ()=>{
    component.onItemHover({id:1, value: 'Option1'});
    expect(component.labelText).toBe(`Open State (hovering over "Option1")`);
 })
 it('onSelectItem fn check', ()=>{
    component.onSelectItem({id:1, value: 'Option1'});
    expect(component.labelText).toBe('Selected option');
    expect(component.selectedOption).toEqual({id:1, value: 'Option1'});
    expect(component.isShow).toBeTrue()
 })
 it('@Output emitter fn check', ()=>{
    spyOn(component.onSelection, 'emit');
    component.onSelectItem({id:1, value: 'Option1'});
    expect(component.onSelection.emit).toHaveBeenCalledWith(1);
 })
});
