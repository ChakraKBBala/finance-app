import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../Service/http.service'
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  sidenav: any = []
  constructor(
    private httpservice: HttpService
  ) { }

  ngOnInit(): void {
    this.loadSideNav()
  }

  loadSideNav() {
    this.httpservice.getJSON().subscribe(data => {
      console.log(data);
      this.sidenav = data;
    });
  }

}
