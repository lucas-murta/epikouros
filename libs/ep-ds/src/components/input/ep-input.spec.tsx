import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EpInput } from './ep-input';

describe('EpInput', () => {
  it('should render successfully with label', () => {
    const { getByText, getByRole } = render(
      <EpInput label="Name" placeholder="Enter" />
    );
    expect(getByText('Name')).toBeTruthy();
    const input = getByRole('textbox') as HTMLInputElement;
    expect(input.placeholder).toBe('Enter');
  });

  it('should handle input events', () => {
    const onInput = jest.fn();
    const onChange = jest.fn();
    const { getByRole } = render(
      <EpInput onInput={onInput} onChange={onChange} />
    );
    const input = getByRole('textbox') as HTMLInputElement;
    fireEvent.input(input, { target: { value: 'a' } });
    fireEvent.change(input, { target: { value: 'abc' } });
    expect(onInput).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalled();
  });

  it('should manage validity state', () => {
    const onReportValidity = jest.fn();
    const { getByRole, rerender } = render(
      <EpInput required onReportValidity={onReportValidity} />
    );
    const input = getByRole('textbox') as HTMLInputElement;
    fireEvent.blur(input);
    expect(onReportValidity).toHaveBeenCalled();

    rerender(
      <EpInput pattern="^[0-9]+$" onReportValidity={onReportValidity} />
    );
    fireEvent.change(input, { target: { value: 'abc' } });
    expect(onReportValidity).toHaveBeenCalled();
  });

  it('should expose imperative methods', () => {
    const ref = React.createRef<import('./ep-input.types').EpInputRef>();
    const { getByRole } = render(<EpInput ref={ref} />);
    const input = getByRole('textbox') as HTMLInputElement;
    ref.current?.focus();
    expect(document.activeElement).toBe(input);
    ref.current?.blur();
    expect(document.activeElement).not.toBe(input);
    ref.current?.clear();
    expect(input.value).toBe('');
    const validity = ref.current?.reportValidity();
    expect(typeof validity).toBe('boolean');
  });
});
