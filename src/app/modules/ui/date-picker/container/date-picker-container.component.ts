import { ChangeDetectorRef, Component, Input, Optional } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker-container.component.html',
  styleUrls: ['./date-picker-container.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: DatePickerContainerComponent,
    multi: true
  }]
})
export class DatePickerContainerComponent {

  @Input() dpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd.mm.yyyy',
  };
  @Input() plh = 'Please select the date';
  @Input() label = 'test';
  @Input() errorsMap: { [key:string]: string; };
  @Input() controlName = '';
  
  // ControlValueAccessor
  
  private onChange;
  private onTouched;
  
  // ControlContainer
  
  public get form(): FormGroup { return this.controlContainer?.control as FormGroup; }
  public get control(): FormControl { return this.form?.get(this.controlName) as FormControl; }
  
  public model: IMyDateModel = null;

  constructor(
    @Optional() private controlContainer: ControlContainer,
    private cdr: ChangeDetectorRef
  ) { }
  
  // ControlValueAccessor
  
  public registerOnChange(fn): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn): void {
    this.onTouched = fn;
  }
  public writeValue(value: Date): void {
    if (!value) {
      return;
    }
    this.model = {
      isRange: this.dpOptions.dateRange,
      singleDate: {
        jsDate: value
      }
    }
  }
  
  // Public methods
  
  public onDateChanged(event: IMyDateModel): void {
    const value = this.dpOptions.dateRange ?
      { begin: event.dateRange.beginJsDate, end: event.dateRange.endJsDate } :
      event.singleDate.jsDate;
    this.onChange(value);
  }
  
  public onInputClick(dp: any): void {
    this.onTouched();
    dp.toggleCalendar();
    this.cdr.detectChanges();
  }

}
