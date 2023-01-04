import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import * as AppState from '../../state/app.state';

import * as DataProviderActions from './data-provider.actions'
import {DataDescription} from "../data-description";

// State for this feature (Gpio)
export interface DataProviderState {
  showFullInformation: boolean;
  dataProvides: DataDescription[];
}

const initialState: DataProviderState = {
  showFullInformation: true,
  dataProvides: []
}

// Extends the app state to include the product feature.
// This is required because products are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.
export interface State extends AppState.State {
  products: DataProviderState;
}

// Selector functions
const getDataProvideFeatureState = createFeatureSelector<DataProviderState>('data-provider');

export const getProducts = createSelector(
  getDataProvideFeatureState,
  state => state.dataProvides
);

export const getShowFullInformation = createSelector(
  getDataProvideFeatureState,
  state => state.showFullInformation
);

export const dataProviderReducer = createReducer(
  initialState,
  on(DataProviderActions.toggleFullInformation, (state): DataProviderState => {
    return {
      ...state,
      showFullInformation: !state.showFullInformation
    };
  }),
  on(DataProviderActions.loadDataProvideSuccess, (state, action): DataProviderState => {
    return {
      ...state,
      dataProvides: action.dataProvides
    }
  })
)
