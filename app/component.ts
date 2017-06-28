import {StackLayout} from 'ui/layouts/stack-layout';

import { ContentView } from "ui/content-view";
import {Button} from 'ui/button';
import { Color }from 'color';

export class Component extends ContentView {
  button:Button;
  constructor() {
    super();
    this.backgroundColor = new Color('red');
    this.height = 100;
    this.width = 100;
  }


}