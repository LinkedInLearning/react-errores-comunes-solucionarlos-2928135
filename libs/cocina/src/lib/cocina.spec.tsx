import { render } from '@testing-library/react';

import Cocina from './cocina';

describe('Cocina', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cocina />);
    expect(baseElement).toBeTruthy();
  });
});
