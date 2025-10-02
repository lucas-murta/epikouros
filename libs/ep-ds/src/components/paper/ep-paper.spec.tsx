import React from 'react';
import { render } from '@testing-library/react';
import { EpPaper } from './ep-paper';

describe('EpPaper', () => {
  const defaultProps = {
    children: 'Test content',
  };

  it('should render successfully', () => {
    const { baseElement } = render(<EpPaper {...defaultProps} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render with default props', () => {
    const { getByText } = render(<EpPaper {...defaultProps} />);

    const paper = getByText('Test content');
    expect(paper).toBeTruthy();
    expect(paper.className).toContain('paper');
    expect(paper.className).toContain('surface-1'); // default variant
    expect(paper.className).toContain('border-none'); // default border
    expect(paper.className).toContain('radius-1'); // default borderRadius
    expect(paper.className).toContain('elevation-1'); // default elevation
  });

  it('should render with custom variant', () => {
    const { getByText } = render(
      <EpPaper {...defaultProps} variant="primary" />
    );

    const paper = getByText('Test content');
    expect(paper.className).toContain('primary');
  });

  it('should render with custom border', () => {
    const { getByText } = render(<EpPaper {...defaultProps} border="2" />);

    const paper = getByText('Test content');
    expect(paper.className).toContain('border-2');
  });

  it('should render with custom border radius', () => {
    const { getByText } = render(
      <EpPaper {...defaultProps} borderRadius="2" />
    );

    const paper = getByText('Test content');
    expect(paper.className).toContain('radius-2');
  });

  it('should render with custom elevation', () => {
    const { getByText } = render(<EpPaper {...defaultProps} elevation={3} />);

    const paper = getByText('Test content');
    expect(paper.className).toContain('elevation-3');
  });

  it('should render with custom padding', () => {
    const { getByText } = render(<EpPaper {...defaultProps} padding="4" />);

    const paper = getByText('Test content');
    expect(paper.className).toContain('p-4');
  });

  it('should render as interactive when interactive prop is true', () => {
    const { getByText } = render(<EpPaper {...defaultProps} interactive />);

    const paper = getByText('Test content');
    expect(paper.className).toContain('interactive');
  });

  it('should render with custom className', () => {
    const customClass = 'custom-class';
    const { getByText } = render(
      <EpPaper {...defaultProps} className={customClass} />
    );

    const paper = getByText('Test content');
    expect(paper.className).toContain(customClass);
  });

  it('should render as different HTML element when as prop is provided', () => {
    const { getByText } = render(<EpPaper {...defaultProps} as="section" />);

    const paper = getByText('Test content');
    expect(paper.tagName).toBe('SECTION');
  });

  it('should forward ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<EpPaper {...defaultProps} ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current?.textContent).toBe('Test content');
  });

  it('should pass through additional props', () => {
    const { container } = render(
      <EpPaper {...defaultProps} data-testid="paper-test" />
    );

    const paper = container.querySelector('[data-testid="paper-test"]');
    expect(paper).toBeTruthy();
  });

  describe('variant combinations', () => {
    it('should render surface variants correctly', () => {
      const variants = [
        'surface-0',
        'surface-1',
        'surface-2',
        'surface-3',
        'surface-4',
        'surface-info',
        'surface-system',
        'surface-warning',
        'surface-positive',
        'surface-negative',
        'surface-primary',
      ] as const;

      variants.forEach((variant) => {
        const { getByText, unmount } = render(
          <EpPaper variant={variant}>Content</EpPaper>
        );
        const paper = getByText('Content');
        expect(paper.className).toContain(variant);
        unmount();
      });
    });

    it('should render color variants correctly', () => {
      const variants = ['primary', 'secondary'] as const;

      variants.forEach((variant) => {
        const { getByText, unmount } = render(
          <EpPaper variant={variant}>Content</EpPaper>
        );
        const paper = getByText('Content');
        expect(paper.className).toContain(variant);
        unmount();
      });
    });
  });

  describe('border combinations', () => {
    it('should render border variants correctly', () => {
      const borders = [
        'none',
        '1',
        '2',
        '3',
        'primary',
        'secondary',
        'info',
        'system',
        'warning',
        'positive',
        'negative',
      ] as const;

      borders.forEach((border) => {
        const { getByText, unmount } = render(
          <EpPaper border={border}>Content</EpPaper>
        );
        const paper = getByText('Content');
        expect(paper.className).toContain(`border-${border}`);
        unmount();
      });
    });
  });

  describe('elevation combinations', () => {
    it('should render elevation variants correctly', () => {
      const elevations = [0, 1, 2, 3, 4] as const;

      elevations.forEach((elevation) => {
        const { getByText, unmount } = render(
          <EpPaper elevation={elevation}>Content</EpPaper>
        );
        const paper = getByText('Content');
        expect(paper.className).toContain(`elevation-${elevation}`);
        unmount();
      });
    });
  });

  describe('accessibility', () => {
    it('should have proper display name', () => {
      expect(EpPaper.displayName).toBe('EpPaper');
    });
  });
});
