import { render } from '@testing-library/react';

import Logo from './logo';

describe('Logo', () => {
  // Must render successfully
  it('should render successfully', () => {
    const { baseElement } = render(<Logo />);
    console.log('BASE ELEMNT', baseElement);

    expect(baseElement).toBeTruthy();
  });

  // If image is not present, fall back to acceptable empty state.
  // Must scale correctly at different resolutions
  // Must have horizontal and square designs
  // Must take in any image
  // Must adapt to any styling or colour
});
