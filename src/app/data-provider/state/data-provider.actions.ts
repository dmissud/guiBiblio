import {DataDescription} from "../data-description";
import {createAction, props} from "@ngrx/store";


export const toggleFullInformation = createAction(
  '[DataProvides] Toggle Full Information'
);


export const loadDataProvideSuccess = createAction(
  '[DataProvides] Load Success',
  props<{ dataProvides: DataDescription[] }>()
);
