import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-smartphone',
  templateUrl: './layout-smartphone.component.html',
  styleUrls: ['./layout-smartphone.component.scss']
})
export class LayoutSmartphoneComponent implements OnInit {
  public DL:object=[
    {src:"./assets/img/sp_iphoneX.png",title:"iPhone X",text:"iPhone X features a new all-screen design. Face ID, which makes your face your password"},
    {src:"./assets/img/sp_note7.png",title:"Galaxy Note7",text:"The Galaxy Note7 comes with a perfectly symmetrical design for good reason"},
    {src:"./assets/img/sp_vivo850.png",title:"Vivo",text:"A young global smartphone brand focusing on introducing perfect sound quality"},{src:"./assets/img/sp_blackberry.png",title:"Vivo",text:"A young global smartphone brand focusing on introducing perfect sound quality"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
