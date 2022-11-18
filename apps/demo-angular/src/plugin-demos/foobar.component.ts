import { Component, NgZone } from '@angular/core';
import { DemoSharedFoobar } from '@demo/shared';
import {} from '@rpk/foobar';

@Component({
  selector: 'demo-foobar',
  templateUrl: 'foobar.component.html',
})
export class FoobarComponent {
  demoShared: DemoSharedFoobar;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedFoobar();
  }
}
