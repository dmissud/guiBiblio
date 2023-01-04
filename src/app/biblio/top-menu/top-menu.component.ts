import {Component, OnInit} from '@angular/core';
import {DataProviderService} from "../../data-provider/data-provider.service";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent implements OnInit {

  get name(): string {
    return this._name;
  }
  get version(): string {
    return this._version;
  }

  private _name: string = require('../../../../package.json').name;
  private _version: string = require('../../../../package.json').version;

  constructor(private dataProviderService: DataProviderService) {
  }

  ngOnInit(): void {}

  doRefresh() {
    this.dataProviderService.loadDataProvides();
  }
}
