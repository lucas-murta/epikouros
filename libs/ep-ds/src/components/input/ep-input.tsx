import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import styles from './ep-input.module.scss';
import { EpIcon } from '../icon';
import { EpInputProps, EpInputRef } from './ep-input.types';

const getCounterClassName = (maxLength: number, charCount: number): string => {
  const remaining = Math.max(0, maxLength - charCount);
  if (remaining <= 0) {
    return [styles.charCounterInside, styles.charCounterNegativeInside]
      .filter(Boolean)
      .join(' ');
  }
  if (remaining <= 3) {
    return [styles.charCounterInside, styles.charCounterWarnInside]
      .filter(Boolean)
      .join(' ');
  }
  return styles.charCounterInside;
};

export const EpInput = forwardRef<EpInputRef, EpInputProps>(
  (
    {
      value,
      icon,
      label,
      type = 'text',
      name,
      disabled,
      readOnly,
      placeholder,
      maxLength,
      min,
      max,
      autoComplete,
      required,
      pattern,
      messageInfo,
      messageDanger,
      messageSuccess,
      className,
      onInput,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      onKeyUp,
      onClick,
      ...rest
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isValid, setIsValid] = useState(true);
    const [charCount, setCharCount] = useState<number>(
      typeof value === 'string' ? value.length : 0
    );

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur(),
      clear: () => {
        const el = inputRef.current;
        if (el) {
          el.value = '';
          const valid = el.checkValidity();
          setIsValid(valid);
          // Disparar eventos para refletir mudança imediata
          const inputEvent = new Event('input', { bubbles: true });
          const changeEvent = new Event('change', { bubbles: true });
          el.dispatchEvent(inputEvent);
          el.dispatchEvent(changeEvent);
        }
      },
      setInvalidity: () => {
        setIsValid(false);
      },
      setValidity: () => {
        setIsValid(true);
      },
      reportValidity: () => {
        const v = inputRef.current?.reportValidity() ?? true;
        setIsValid(v);
      },
    }));

    const classes = [
      styles.input,
      isValid ? styles.valid : styles.invalid,
      disabled && styles.disabled,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleInput: React.FormEventHandler<HTMLInputElement> = (e) => {
      onInput?.(e);
    };

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const valid = e.currentTarget.checkValidity();
      setIsValid(valid);
      if (typeof maxLength === 'number') {
        setCharCount(e.currentTarget.value.length);
      }
      onChange?.(e);
    };

    const handleFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
      onFocus?.(e);
    };

    const handleBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
      const valid = e.currentTarget.checkValidity();
      setIsValid(valid);
      onBlur?.(e);
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
      onKeyDown?.(e);
    };

    const handleKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
      onKeyUp?.(e);
    };

    const handleClick: React.MouseEventHandler<HTMLInputElement> = (e) => {
      onClick?.(e);
    };

    return (
      <label className={styles.wrapper}>
        {label && <span className={styles.label}>{label}</span>}
        <div
          className={[
            typeof maxLength === 'number' ? styles.hasCounter : '',
            icon ? styles.hasIcon : '',
            styles.inputContainer,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {icon && (
            <div className={styles.iconContainer} aria-hidden="true">
              <EpIcon name={icon} size={2} />
            </div>
          )}
          <input
            ref={inputRef}
            className={classes}
            type={type}
            name={name}
            disabled={disabled}
            readOnly={readOnly}
            placeholder={placeholder}
            maxLength={maxLength}
            min={min}
            max={max}
            autoComplete={autoComplete}
            required={required}
            pattern={pattern}
            value={value}
            onInput={handleInput}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            onClick={handleClick}
            {...rest}
          />
          {typeof maxLength === 'number' && (
            <span className={getCounterClassName(maxLength, charCount)}>
              {Math.max(0, maxLength - charCount)}
            </span>
          )}
        </div>
        {isValid && !messageSuccess && messageInfo && (
          <span className={styles.messageInfo}>
            <EpIcon
              name="InfoCircle"
              size={2}
              className={styles.messageIconInfo}
              aria-label="info"
            />
            {messageInfo}
          </span>
        )}
        {!isValid && messageDanger && (
          <span className={styles.messageDanger}>
            <EpIcon
              name="TimesCircle"
              size={2}
              className={styles.messageIconDanger}
              aria-label="error"
            />
            {messageDanger}
          </span>
        )}
        {isValid && messageSuccess && (
          <span className={styles.messageSuccess}>
            <EpIcon
              name="CheckCircle"
              size={2}
              className={styles.messageIconSuccess}
              aria-label="success"
            />
            {messageSuccess}
          </span>
        )}
      </label>
    );
  }
);

EpInput.displayName = 'EpInput';

export default EpInput;
