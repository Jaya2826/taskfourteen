import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskfourteen',
  templateUrl: './taskfourteen.component.html',
  styleUrls: ['./taskfourteen.component.css']
})
export class TaskfourteenComponent implements OnInit {

  isShow=true;
  isShow1=true;
  constructor() { }

  ngOnInit(): void {
  }
  toggleDisplay()
  {
    this.isShow=!this.isShow;
  }
  toggleDisplay1()
  {
    this.isShow1=!this.isShow1;
  }

}
