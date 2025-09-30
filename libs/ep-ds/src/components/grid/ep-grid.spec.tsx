import { render } from '@testing-library/react';

import { EpGrid } from './ep-grid';

describe('EpGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EpGrid>Test content</EpGrid>);
    expect(baseElement).toBeTruthy();
  });
});
