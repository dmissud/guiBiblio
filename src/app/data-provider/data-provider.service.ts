import {Injectable} from '@angular/core';
import {DataDescription} from './data-description';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  private providerApiUrl = 'http://localhost:8090/api/dataProvider';
  private dataProvides: DataDescription[] | undefined;

  constructor(private http: HttpClient) {
  }

  getDataProvides(): Observable<DataDescription[]> {
    if (this.dataProvides) {
      return of(this.dataProvides);
    } else {
      return this.loadDataProvides();
    }
  }


  private loadDataProvides(): Observable<DataDescription[]> {
    return this.http.get<DataDescription[]>(this.providerApiUrl + '/provide')
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        tap(data => this.dataProvides = data),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(() => new Error(errorMessage));
  }
}
