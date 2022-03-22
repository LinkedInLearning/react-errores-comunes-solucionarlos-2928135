import { render } from '@testing-library/react';

import Pedidos from './pedidos';

describe('Pedidos', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Pedidos />);
    expect(baseElement).toBeTruthy();
  });
});
