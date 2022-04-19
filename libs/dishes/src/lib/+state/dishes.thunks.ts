import { createAsyncThunk } from '@reduxjs/toolkit';
import { Dish } from '../models/dish.interfaces';

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
