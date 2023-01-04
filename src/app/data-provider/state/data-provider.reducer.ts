import {createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import * as AppState from '../../state/app.state';

import * as DataProviderActions from './data-provider.actions'
import {DataDescription} from "../data-description";

// State for this feature (data-provider)
export interface DataProviderState {
  showFullInformation: boolean;
  dataProvides: DataDescription[];
}

const initialState: DataProviderState = {
  showFullInformation: false,
  dataProvides: []
}

export interface State extends AppState.State {
  dataProvides: DataProviderState;
}

// Selector functions
const getDataProvideFeatureState = createFeatureSelector<DataProviderState>('data-provider');

export const getDataProvides = createSelector(
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
