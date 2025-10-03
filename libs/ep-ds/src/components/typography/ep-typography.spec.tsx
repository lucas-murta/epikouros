import { render } from '@testing-library/react';
import { EpTypography } from './ep-typography';

describe('EpTypography', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EpTypography>Test content</EpTypography>);
    expect(baseElement).toBeTruthy();
  });

  it('should render with default props', () => {
    const { getByText } = render(<EpTypography>Test content</EpTypography>);
    const element = getByText('Test content');

    expect(element.tagName).toBe('P');
    expect(element.className).toContain('typography');
    expect(element.className).toContain('variant-body-medium');
  });

  it('should render with custom HTML element', () => {
    const { getByText } = render(
      <EpTypography as="h1">Heading content</EpTypography>
    );
    const element = getByText('Heading content');

    expect(element.tagName).toBe('H1');
  });

  describe('Typography variants', () => {
    const variants = [
      'heading-1',
      'heading-2',
      'heading-3',
      'heading-4',
      'highlight-large',
      'highlight-medium',
      'body-large',
      'body-medium',
      'body-small',
    ] as const;

    variants.forEach((variant) => {
      it(`should apply ${variant} variant class`, () => {
        const { getByText } = render(
          <EpTypography variant={variant}>Test content</EpTypography>
        );
        const element = getByText('Test content');

        expect(element.className).toContain(`variant-${variant}`);
      });
    });
  });

  describe('Font sizes', () => {
    const sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;

    sizes.forEach((size) => {
      it(`should apply ${size} size class`, () => {
        const { getByText } = render(
          <EpTypography size={size}>Test content</EpTypography>
        );
        const element = getByText('Test content');

        expect(element.className).toContain(`size-${size}`);
      });
    });
  });

  describe('Font weights', () => {
    const weights = ['light', 'normal', 'medium', 'semibold', 'bold'] as const;

    weights.forEach((weight) => {
      it(`should apply ${weight} weight class`, () => {
        const { getByText } = render(
          <EpTypography weight={weight}>Test content</EpTypography>
        );
        const element = getByText('Test content');

        expect(element.className).toContain(`weight-${weight}`);
      });
    });
  });

  describe('Font families', () => {
    const families = ['body', 'heading', 'display'] as const;

    families.forEach((family) => {
      it(`should apply ${family} family class`, () => {
        const { getByText } = render(
          <EpTypography family={family}>Test content</EpTypography>
        );
        const element = getByText('Test content');

        expect(element.className).toContain(`family-${family}`);
      });
    });
  });

  describe('Line heights', () => {
    const lineHeights = [
      'tight',
      'snug',
      'normal',
      'relaxed',
      'loose',
    ] as const;

    lineHeights.forEach((lineHeight) => {
      it(`should apply ${lineHeight} line height class`, () => {
        const { getByText } = render(
          <EpTypography lineHeight={lineHeight}>Test content</EpTypography>
        );
        const element = getByText('Test content');

        expect(element.className).toContain(`line-height-${lineHeight}`);
      });
    });
  });

  describe('Letter spacings', () => {
    const letterSpacings = [
      'tighter',
      'tight',
      'normal',
      'wide',
      'wider',
      'widest',
    ] as const;

    letterSpacings.forEach((letterSpacing) => {
      it(`should apply ${letterSpacing} letter spacing class`, () => {
        const { getByText } = render(
          <EpTypography letterSpacing={letterSpacing}>
            Test content
          </EpTypography>
        );
        const element = getByText('Test content');

        expect(element.className).toContain(`letter-spacing-${letterSpacing}`);
      });
    });
  });

  describe('Text alignment', () => {
    const alignments = ['left', 'center', 'right', 'justify'] as const;

    alignments.forEach((align) => {
      it(`should apply ${align} alignment class`, () => {
        const { getByText } = render(
          <EpTypography align={align}>Test content</EpTypography>
        );
        const element = getByText('Test content');

        expect(element.className).toContain(`align-${align}`);
      });
    });
  });

  describe('Text decorations', () => {
    it('should apply italic class when italic is true', () => {
      const { getByText } = render(
        <EpTypography italic>Test content</EpTypography>
      );
      const element = getByText('Test content');

      expect(element.className).toContain('italic');
    });

    it('should apply underline class when underline is true', () => {
      const { getByText } = render(
        <EpTypography underline>Test content</EpTypography>
      );
      const element = getByText('Test content');

      expect(element.className).toContain('underline');
    });

    it('should apply strikethrough class when strikethrough is true', () => {
      const { getByText } = render(
        <EpTypography strikethrough>Test content</EpTypography>
      );
      const element = getByText('Test content');

      expect(element.className).toContain('strikethrough');
    });
  });

  describe('Text transformations', () => {
    it('should apply uppercase class when uppercase is true', () => {
      const { getByText } = render(
        <EpTypography uppercase>Test content</EpTypography>
      );
      const element = getByText('Test content');

      expect(element.className).toContain('uppercase');
    });

    it('should apply lowercase class when lowercase is true', () => {
      const { getByText } = render(
        <EpTypography lowercase>Test content</EpTypography>
      );
      const element = getByText('Test content');

      expect(element.className).toContain('lowercase');
    });

    it('should apply capitalize class when capitalize is true', () => {
      const { getByText } = render(
        <EpTypography capitalize>Test content</EpTypography>
      );
      const element = getByText('Test content');

      expect(element.className).toContain('capitalize');
    });
  });

  describe('Text truncation', () => {
    it('should apply truncate class when truncate is true', () => {
      const { getByText } = render(
        <EpTypography truncate>Test content</EpTypography>
      );
      const element = getByText('Test content');

      expect(element.className).toContain('truncate');
    });

    it('should apply line clamp classes when maxLines is specified', () => {
      const { getByText } = render(
        <EpTypography maxLines={3}>Test content</EpTypography>
      );
      const element = getByText('Test content');

      expect(element.className).toContain('line-clamp');
      expect(element.className).toContain('lines-3');
    });
  });

  describe('Custom styling', () => {
    it('should apply custom className', () => {
      const { getByText } = render(
        <EpTypography className="custom-class">Test content</EpTypography>
      );
      const element = getByText('Test content');

      expect(element.className).toContain('custom-class');
    });

    it('should pass through additional props', () => {
      const { getByText } = render(
        <EpTypography data-testid="typography-element">
          Test content
        </EpTypography>
      );
      const element = getByText('Test content');

      expect(element.getAttribute('data-testid')).toBe('typography-element');
    });
  });

  describe('Combined props', () => {
    it('should apply multiple classes when multiple props are provided', () => {
      const { getByText } = render(
        <EpTypography
          variant="heading-1"
          size={8}
          weight="bold"
          family="heading"
          lineHeight="tight"
          letterSpacing="wide"
          align="center"
          italic
          underline
          uppercase
          className="custom-class"
        >
          Test content
        </EpTypography>
      );
      const element = getByText('Test content');

      expect(element.className).toContain('typography');
      expect(element.className).toContain('variant-heading-1');
      expect(element.className).toContain('size-8');
      expect(element.className).toContain('weight-bold');
      expect(element.className).toContain('family-heading');
      expect(element.className).toContain('line-height-tight');
      expect(element.className).toContain('letter-spacing-wide');
      expect(element.className).toContain('align-center');
      expect(element.className).toContain('italic');
      expect(element.className).toContain('underline');
      expect(element.className).toContain('uppercase');
      expect(element.className).toContain('custom-class');
    });

    it('should override variant properties with specific props', () => {
      const { getByText } = render(
        <EpTypography variant="body-small" size={8} weight="bold">
          Test content
        </EpTypography>
      );
      const element = getByText('Test content');

      expect(element.className).toContain('variant-body-small');
      expect(element.className).toContain('size-8');
      expect(element.className).toContain('weight-bold');
    });
  });
});
