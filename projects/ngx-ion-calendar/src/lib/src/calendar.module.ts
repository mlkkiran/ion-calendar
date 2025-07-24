import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';

import { CalendarModalOptions } from './calendar.model';
import { CalendarController } from './calendar.controller';
import { DEFAULT_CALENDAR_OPTIONS } from './services/calendar-options.provider';
import { CalendarService } from './services/calendar.service';
import { CalendarWeekComponent } from './components/calendar-week.component';
import { CalendarComponent } from './components/calendar.component';
import { CalendarModal } from './components/calendar.modal';
import { MonthPickerComponent } from './components/month-picker.component';
import { MonthComponent } from './components/month.component';

export function calendarController(modalCtrl: ModalController, calSvc: CalendarService) {
  return new CalendarController(modalCtrl, calSvc);
}

@NgModule({
  imports: [CommonModule, IonicModule, FormsModule],
  declarations: [CalendarModal,
    CalendarWeekComponent,
    MonthComponent,
    CalendarComponent,
    MonthPickerComponent],
  exports: [CalendarModal,
    CalendarWeekComponent,
    MonthComponent,
    CalendarComponent,
    MonthPickerComponent],
  providers: [
    CalendarService,
    {
      provide: CalendarController,
      useFactory: calendarController,
      deps: [ModalController, CalendarService],
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
