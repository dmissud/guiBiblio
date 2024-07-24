import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {NgIf} from "@angular/common";
import {GridsterItem} from "angular-gridster2";
import {WidgetAComponent} from "../widgetsample/widgetA.component";
import {WidgetBComponent} from "../widgetsample/widgetB.component";
import {WidgetCComponent} from "../widgetsample/widgetC.component";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-core-parent',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    NgIf,
    WidgetAComponent,
    WidgetBComponent,
    WidgetCComponent,
    MatToolbar,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './core-parent.component.html',
  styleUrl: './core-parent.component.css'
})
export class CoreParentComponent implements OnInit, OnDestroy {
  @Input()
  widget?: GridsterItem;
  @Input()
  resizeEvent?: EventEmitter<GridsterItem>;

  resizeSub?: Subscription;
  title: string = ':';

  ngOnInit(): void {
    this.title = this.widget?.['type'] + ':' + this.widget?.x;
    this.resizeSub = this.resizeEvent?.subscribe(widget => {
      if (widget === this.widget) {
        this.title = this.widget?.['type'] + ':' + this.widget?.x;
        // or check id , type or whatever you have there
        // resize your widget, chart, map , etc.
        console.log(widget);
      }
    });
  }

  ngOnDestroy(): void {
    this.resizeSub?.unsubscribe();
  }
}
