import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../state/data-provider.reducer";
import {FormBuilder, FormGroup} from "@angular/forms";
import {toggleFullInformation} from "../state/data-provider.actions";

@Component({
  selector: 'app-data-provider-shell',
  templateUrl: './data-provider-shell.component.html',
  styleUrls: ['./data-provider-shell.component.scss']
})
export class DataProviderShellComponent implements OnInit {
  toppings: FormGroup;

  constructor(private store: Store<State>, fb: FormBuilder) {
    this.toppings = fb.group({
      fullInformation: false
    });
  }

  ngOnInit(): void {
  }

  checkChanged(): void {
    this.store.dispatch(toggleFullInformation());
  }
}
