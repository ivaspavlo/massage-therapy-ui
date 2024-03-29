import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '@app/modules/ui';
import { CoreTranslationModule } from './core-translation.module';
import { CORE_PROVIDERS } from './providers';
import { CORE_GUARDS } from './guards';


@NgModule({
  imports: [
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    CoreTranslationModule.forRoot()
  ],
  providers: [
    ...CORE_PROVIDERS,
    ...CORE_GUARDS
  ],
  exports: [ ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import available only in AppModule');
    }
  }
}
