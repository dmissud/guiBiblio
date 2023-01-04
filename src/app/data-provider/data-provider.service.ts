import {Injectable} from '@angular/core';
import {DataDescription} from './data-description';
import {map} from "rxjs";
import {ApiService} from "../common/api.service";
import {Store} from "@ngrx/store";
import {State} from "./state/data-provider.reducer";
import {loadDataProvideSuccess} from "./state/data-provider.actions";

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  private providerApiUrl = '/provide';

  constructor(private store: Store<State>, private api: ApiService) {
  }

  public loadDataProvides(): void {
    this.api.get(this.providerApiUrl)
      .pipe(map(provideResponse => provideResponse as DataDescription[]))
      .subscribe((dataDescriptions: DataDescription[]) => {
        console.log(JSON.stringify(dataDescriptions));
        this.store.dispatch(loadDataProvideSuccess({dataProvides: dataDescriptions}));
      });
  }
}
