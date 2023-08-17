import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  it('shoud create options array based on input', ()=> {
    component.setDropDownOptions(7);
    expect(component.dropDownOptions).not.toBeNull()
  })
  it('check the emitted value', ()=> {
    component.onSelection(5);
    expect(component.selectedOptionId).toEqual(5)
  })
});
