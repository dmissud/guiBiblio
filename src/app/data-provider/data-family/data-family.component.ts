import {Component, OnInit} from '@angular/core';
import {DataProviderState, getDataProvides, getShowFullInformation} from "../state/data-provider.reducer";
import {DataProviderService} from "../data-provider.service";
import {Store} from "@ngrx/store";
import {DataDescription} from "../data-description";

@Component({
  selector: 'app-data-family',
  templateUrl: './data-family.component.html',
  styleUrls: ['./data-family.component.scss']
})
export class DataFamilyComponent implements OnInit {
  dataProvides: DataDescription[] = [{dataName: "A", sizeOf: 1}];
  lowDescription: string[] = ['dataProvide-name'];
  fullDescription: string[] = ['dataProvide-name', 'dataProvide-sizeOf'];
  description: string[] | undefined;

  errorMessage: string | undefined;
  clickedRows: DataDescription | undefined;

  constructor(private store: Store<DataProviderState>, private dataProviderService: DataProviderService) {
  }

  ngOnInit(): void {

    // TODO: Unsubscribe
    this.store.select(getDataProvides).subscribe(
      dataProvides => this.dataProvides = dataProvides
    );

    // TODO: Unsubscribe
    this.store.select(getShowFullInformation).subscribe(
      showFullInformation => {
        if (showFullInformation) {
          this.description = this.fullDescription;
        } else {
          this.description = this.lowDescription;
        }
      }
    );

    this.dataProviderService.loadDataProvides();
  }
}
