import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  @ViewChild('myCmp') myCmp: { nativeElement: HTMLMyAppElement };

  ngAfterViewInit() {
    setTimeout(() => this.myCmp.nativeElement.sayHello(), 3000);
    setTimeout(() => {
      this.myCmp.nativeElement.name = 'Stencil is awesome';
      this.myCmp.nativeElement.sayHello();
    }, 6000);
  }
}
