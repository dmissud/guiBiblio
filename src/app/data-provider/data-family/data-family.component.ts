import {Component} from '@angular/core';
import {DataProviderState, getProducts, getShowFullInformation} from "../state/data-provider.reducer";
import {DataProviderService} from "../data-provider.service";
import {Store} from "@ngrx/store";
import {DataDescription} from "../data-description";

@Component({
  selector: 'app-data-family',
  templateUrl: './data-family.component.html',
  styleUrls: ['./data-family.component.scss']
})
export class DataFamilyComponent {
  dataProvides: DataDescription[] = [{dataName: "A", sizeOf: 1}];
  lowDescription: string[] = ['dataProvide-name'];
  fullDescription: string[] = ['dataProvide-name', 'dataProvide-sizeOf'];
  errorMessage: string | undefined;
  displayFullInformation: boolean = false;
  clickedRows: DataDescription | undefined;

  constructor(private store: Store<DataProviderState>, private dataProviderService: DataProviderService) {
  }

  ngOnInit(): void {
    this.dataProviderService.getDataProvides().subscribe({
      next: (dataProvides: DataDescription[]) => this.dataProvides = dataProvides,
      error: err => this.errorMessage = err
    });

    // TODO: Unsubscribe
    this.store.select(getProducts).subscribe(
      dataProvides => this.dataProvides = dataProvides
    );

    // TODO: Unsubscribe
    this.store.select(getShowFullInformation).subscribe(
      showFullInformation => this.displayFullInformation = showFullInformation
    );
  }
}
