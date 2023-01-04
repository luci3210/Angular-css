import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ng_lp_task';
  result:any = "";

  getNum(val:any) {
    this.result += val;
  }
  getClr() {
    this.result = '';
  }
  getEqual() {
    var input = this.result;
    var output = eval(input);

    this.result = output;
  }


}
