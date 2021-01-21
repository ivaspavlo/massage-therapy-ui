
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input() menuItems: string[];

  constructor() { }

  ngOnInit(): void { }

}