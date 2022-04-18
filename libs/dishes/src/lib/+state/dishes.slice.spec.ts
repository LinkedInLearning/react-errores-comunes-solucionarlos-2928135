import { fetchDishes, dishesAdapter, dishesReducer } from './dishes.slice';

describe('dishes reducer', () => {
  it('should handle initial state', () => {
    const expected = dishesAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(dishesReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchDishess', () => {
    let state = dishesReducer(undefined, fetchDishes.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = dishesReducer(
      state,
      fetchDishes.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = dishesReducer(
      state,
      fetchDishes.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
