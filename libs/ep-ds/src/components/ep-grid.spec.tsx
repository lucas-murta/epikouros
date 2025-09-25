import { render } from '@testing-library/react';

import EpikourosEpDs from './ep-grid';

describe('EpikourosEpDs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EpikourosEpDs />);
    expect(baseElement).toBeTruthy();
  });
});
