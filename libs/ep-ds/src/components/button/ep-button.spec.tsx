import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EpButton } from './ep-button';

describe('EpButton', () => {
  it('should render successfully with default props', () => {
    const { getByText } = render(<EpButton>Click me</EpButton>);
    const btn = getByText('Click me');
    expect(btn).toBeTruthy();
    expect(btn.className).toContain('button');
    expect(btn.className).toContain('variant-solid');
    expect(btn.className).toContain('size-medium');
    expect(btn.className).toContain('color-primary');
  });

  it('should apply size variants', () => {
    const { getByText, rerender } = render(<EpButton size="small">Size</EpButton>);
    expect(getByText('Size').className).toContain('size-small');
    rerender(<EpButton size="medium">Size</EpButton>);
    expect(getByText('Size').className).toContain('size-medium');
    rerender(<EpButton size="large">Size</EpButton>);
    expect(getByText('Size').className).toContain('size-large');
  });

  it('should apply variant styles', () => {
    const { getByText, rerender } = render(<EpButton variant="solid">Var</EpButton>);
    expect(getByText('Var').className).toContain('variant-solid');
    rerender(<EpButton variant="outline">Var</EpButton>);
    expect(getByText('Var').className).toContain('variant-outline');
    rerender(<EpButton variant="text">Var</EpButton>);
    expect(getByText('Var').className).toContain('variant-text');
  });

  it('should apply color styles', () => {
    const { getByText, rerender } = render(<EpButton color="primary">Color</EpButton>);
    expect(getByText('Color').className).toContain('color-primary');
    rerender(<EpButton color="secondary">Color</EpButton>);
    expect(getByText('Color').className).toContain('color-secondary');
  });

  it('should handle disabled state', () => {
    const { getByText } = render(<EpButton disabled>Disabled</EpButton>);
    const btn = getByText('Disabled') as HTMLButtonElement;
    expect(btn.disabled).toBe(true);
    expect(btn.className).toContain('disabled');
  });

  it('should fire onClick when enabled', () => {
    const onClick = jest.fn();
    const { getByText } = render(<EpButton onClick={onClick}>Click</EpButton>);
    fireEvent.click(getByText('Click'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not fire onClick when disabled', () => {
    const onClick = jest.fn();
    const { getByText } = render(<EpButton disabled onClick={onClick}>Click</EpButton>);
    fireEvent.click(getByText('Click'));
    expect(onClick).not.toHaveBeenCalled();
  });
});