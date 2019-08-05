import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-laptop',
  templateUrl: './layout-laptop.component.html',
  styleUrls: ['./layout-laptop.component.scss']
})
export class LayoutLaptopComponent implements OnInit {
  public DL:object=[
    {src:"./assets/img/lt_macbook.png",title:"iMACBOOK",text:"The MacBook is a brand of notebook computers manufactured by Apple Inc"},
    {src:"./assets/img/lt_rog.png",title:"ASUS ROG",text:"the Asus ROG Strix Flare is the latest addition to Asus' lineup of ROG branded devices"},
    {src:"./assets/img/lt_hp.png",title:"HP OMEN",text:"A young global smartphone brand focusing on introducing perfect sound quality"},{src:"./assets/img/lt_lenovo.png",title:"LENOVO THINKPAD",text:"The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
