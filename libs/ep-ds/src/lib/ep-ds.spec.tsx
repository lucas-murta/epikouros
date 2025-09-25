import { render } from '@testing-library/react';

import EpikourosEpDs from './ep-ds';

describe('EpikourosEpDs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EpikourosEpDs />);
    expect(baseElement).toBeTruthy();
  });
});
