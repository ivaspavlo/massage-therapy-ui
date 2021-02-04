
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'app-scroll-down',
  templateUrl: './scroll-down.component.html',
  styleUrls: ['./scroll-down.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollDownComponent implements OnInit {

  @Input() scrollBaseElement: HTMLElement;
  @Input() scrollTo: number = null;
  @Input() isVisible = true;

  constructor() { }

  ngOnInit() { }

  public onClick(): void {
    this.scrollBaseElement.scrollTo(0, this.scrollTo || this.scrollBaseElement.clientHeight);
  }

}
