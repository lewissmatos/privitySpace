import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  activatedH = false
  activatedC = false
  activatedS = false
  activatedP = false

  ngOnInit(): void {
    this.activatedH = true
  }  

  h() {
    this.activatedH = true
    this.activatedC = false
    this.activatedS= false
    this.activatedP = false
  }
  c() {
    this.activatedH = false
    this.activatedC = true
    this.activatedS= false
    this.activatedP = false
  }
  s() {
    this.activatedH = false
    this.activatedC = false
    this.activatedS= true
    this.activatedP = false
  }
  p() {
    this.activatedH = false
    this.activatedC = false
    this.activatedS= false
    this.activatedP = true
  }

}
