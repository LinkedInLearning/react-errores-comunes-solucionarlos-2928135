import { render } from '@testing-library/react';

import Cuenta from './cuenta';

describe('Cuenta', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cuenta />);
    expect(baseElement).toBeTruthy();
  });
});
