import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FoobarComponent } from './foobar.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FoobarComponent }])],
  declarations: [FoobarComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FoobarModule {}
