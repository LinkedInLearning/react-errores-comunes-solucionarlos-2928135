import {
  createEntityAdapter,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { Dish } from '../models/dish.interfaces';
import { fetchDishes } from './dishes.thunks';

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
