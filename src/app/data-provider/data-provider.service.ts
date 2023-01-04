import {Injectable} from '@angular/core';
import {DataDescription} from './data-description';
import {BehaviorSubject, map, Observable} from "rxjs";
import {ApiService} from "../common/api.service";

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  private providerApiUrl = '/provide';
  private dataProvides: BehaviorSubject<DataDescription[]> = new BehaviorSubject<DataDescription[]>([]);

  constructor(private api: ApiService) {
  }

  getDataProvides(): Observable<DataDescription[]> {
    return this.dataProvides.asObservable();
  }

  public loadDataProvides(): void {
    this.api.get(this.providerApiUrl)
      .pipe(map(respons => respons as DataDescription[]))
      .subscribe((dataDescriptions: DataDescription[]) => {
        console.log(JSON.stringify(dataDescriptions));
        this.dataProvides.next(dataDescriptions);
      });
  }
}
