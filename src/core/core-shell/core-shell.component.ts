import {Component, EventEmitter, OnInit} from '@angular/core';
import {
  CompactType,
  DisplayGrid,
  GridsterComponent,
  GridsterConfig,
  GridsterItem,
  GridsterItemComponent,
  GridType
} from "angular-gridster2";
import {NgForOf} from "@angular/common";
import {CoreParentComponent} from "../core-parent/core-parent.component";
import {CoreTopbarComponent} from "../core-topbar/core-topbar.component";

@Component({
  selector: 'app-core-shell',
  standalone: true,
  imports: [
    GridsterComponent,
    GridsterItemComponent,
    NgForOf,
    CoreParentComponent,
    CoreTopbarComponent
  ],
  templateUrl: './core-shell.component.html',
  styleUrl: './core-shell.component.css'
})

export class CoreShellComponent implements OnInit {
  resizeEvent: EventEmitter<GridsterItem> = new EventEmitter<GridsterItem>();
  options: GridsterConfig = {
    gridType: GridType.Fit,
    displayGrid: DisplayGrid.OnDragAndResize,
    compactType: CompactType.CompactUp,
    pushItems: true,
    draggable: {
      enabled: true
    },
    resizable: {
      enabled: true
    },
    minCols: 1,
    maxCols: 3,
    minRows: 1,
    maxRows: 5,
    maxItemCols: 100,
    minItemCols: 1,
    maxItemRows: 100,
    minItemRows: 1,
    maxItemArea: 2500,
    minItemArea: 1,
    defaultItemCols: 1,
    defaultItemRows: 1
  };
  dashboard: GridsterItem[] = [];

  ngOnInit(): void {
    this.dashboard = [
      {cols: 1, rows: 1, y: 0, x: 0, type: 'widgetA'},
      {cols: 1, rows: 2, y: 0, x: 1, type: 'widgetB'},
      {cols: 1, rows: 1, y: 1, x: 0, type: 'widgetC'}
    ];
  }


}

