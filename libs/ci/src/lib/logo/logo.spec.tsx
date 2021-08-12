import { render } from '@testing-library/react';

import Logo from './logo';

describe('Logo', () => {
  // Must render successfully
  it('should render successfully', () => {
    const { baseElement } = render(<Logo src="svg-logo.svg" />);
    expect(baseElement).toBeTruthy();
  });

  // If image is not present, fall back to acceptable empty state.
  it('if logo image is not present, fall back to acceptable empty state.', () => {
    const { baseElement } = render(<Logo src="undefined" />);
    const images = baseElement.getElementsByTagName('img');

    expect(images.length).toBeGreaterThan(0);
  });
});
