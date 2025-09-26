import { render } from '@testing-library/react';

import { Grid } from './ep-grid';

describe('Grid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Grid>Test content</Grid>);
    expect(baseElement).toBeTruthy();
  });
});
