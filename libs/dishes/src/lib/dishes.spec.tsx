import { render } from '@testing-library/react';

import Dishes from './dishes';

describe('Dishes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dishes />);
    expect(baseElement).toBeTruthy();
  });
});
