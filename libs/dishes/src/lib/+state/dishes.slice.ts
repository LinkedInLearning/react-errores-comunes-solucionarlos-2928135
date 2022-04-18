import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '@restaurant/models';
import { Dish } from '../models/dish.interfaces';

export const DISHES_FEATURE_KEY = 'dishes';

/*
 * Update these interfaces according to your requirements.
 */
// export interface DishesEntity {
//   id: number;
// }

export interface DishesState extends EntityState<Dish> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | null;
}

export const dishesAdapter = createEntityAdapter<Dish>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchDishes())
 * }, [dispatch]);
 * ```
 */
export const fetchDishes = createAsyncThunk(
  'dishes/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getDishess()`;
     * Right now we just return an empty array.
     */

    const headers = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };

    const response = await fetch('/assets/dishes.json', headers);

    return (await response.json()) as Dish[];
  }
);

export const initialDishesState: DishesState = dishesAdapter.getInitialState({
  loadingStatus: 'not loaded',
  error: null,
});

export const dishesSlice = createSlice({
  name: DISHES_FEATURE_KEY,
  initialState: initialDishesState,
  reducers: {
    add: dishesAdapter.addOne,
    remove: dishesAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishes.pending, (state: DishesState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchDishes.fulfilled,
        (state: DishesState, action: PayloadAction<Dish[]>) => {
          dishesAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchDishes.rejected, (state: DishesState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message || '404';
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const dishesReducer = dishesSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(dishesActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const dishesActions = dishesSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllDishes);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = dishesAdapter.getSelectors();

export const getDishesState = (rootState: RootState): DishesState =>
  rootState[DISHES_FEATURE_KEY];

export const selectAllDishes = createSelector(getDishesState, selectAll);

export const selectDishesEntities = createSelector(
  getDishesState,
  selectEntities
);

export const selectLoadingStatus = createSelector(
  getDishesState,
  (state) => state.loadingStatus
);
