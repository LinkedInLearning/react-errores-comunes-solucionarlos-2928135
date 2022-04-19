import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@restaurant/models';
import { dishesAdapter, DishesState, DISHES_FEATURE_KEY } from './dishes.slice';
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
