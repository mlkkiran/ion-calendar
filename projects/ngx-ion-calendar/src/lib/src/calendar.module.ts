import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CalendarComponent } from './components/calendar.component';
import { CalendarModalOptions } from './calendar.model';
import { DEFAULT_CALENDAR_OPTIONS } from './services/calendar-options.provider';
import { CalendarWeekComponent } from './components/calendar-week.component';
import { MonthPickerComponent } from './components/month-picker.component';
import { MonthComponent } from './components/month.component';
import { CalendarModal } from './components/calendar.modal';


@NgModule({
  declarations: [CalendarComponent, CalendarWeekComponent, MonthPickerComponent, MonthComponent,CalendarModal],
  imports: [CommonModule, IonicModule],
  exports: [CalendarComponent, CalendarWeekComponent, MonthPickerComponent, MonthComponent,CalendarModal]
})
export class CalendarModule {
  static forRoot(defaultOptions: CalendarModalOptions = {}): ModuleWithProviders<CalendarModule> {
    return {
      ngModule: CalendarModule,
      providers: [
        {
          provide: DEFAULT_CALENDAR_OPTIONS,
          useValue: defaultOptions
        }
      ]
    };
  }
}
