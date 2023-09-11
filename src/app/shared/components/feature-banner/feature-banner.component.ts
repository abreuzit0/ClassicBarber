import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-banner',
  templateUrl: './feature-banner.component.html',
  styleUrls: ['./feature-banner.component.css']
})

export class FeatureBannerComponent implements OnInit {
  @Input()
  head!: string;
  @Input()
  coloredHead!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
