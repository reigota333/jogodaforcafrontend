import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-win-lost',
  templateUrl: './win-lost.component.html',
  styleUrls: ['./win-lost.component.css'],
})
export class WinLostComponent implements OnInit {
  @Input('title') title: String;
  constructor() {}

  ngOnInit(): void {}
}
