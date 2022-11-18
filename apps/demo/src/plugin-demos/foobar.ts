import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedFoobar } from '@demo/shared';
import {} from '@rpk/foobar';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedFoobar {}
