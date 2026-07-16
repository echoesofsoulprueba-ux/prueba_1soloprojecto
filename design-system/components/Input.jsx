import React from 'react';

function cn() {
  return Array.prototype.slice.call(arguments).filter(Boolean).join(' ');
}

/**
 * @param {object} props
 * @param {string} [props.placeholder=''] - The placeholder text for the input.
 * @param {boolean} [props.disabled=false] - Whether the input is disabled.
 * @param {boolean} [props.error=false] - Whether the input is in an error state.
 * @param {string} [props.errorMessage=''] - The error message to display when `error` is true.
 * @param {string} [props.defaultValue=''] - The default value for the input.
 * @param {string} [props.className=''] - Additional CSS classes to apply.
 * @param {React.Ref<HTMLInputElement>} ref - Ref to the input element.
 */
const Input = React.forwardRef(function Input(props, ref) {
  const {
    placeholder = '',
    disabled = false,
    error = false,
    errorMessage = '',
    defaultValue = '',
    className = '',
    ...rest
  } = props;

  const baseClasses = cn(
    'flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'placeholder:text-mutedForeground',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    error ? 'border-error ring-error' : 'border-border'
  );

  return React.createElement(
    React.Fragment,
    null,
    React.createElement('input', {
      className: cn(baseClasses, className),
      placeholder: placeholder,
      disabled: disabled,
      defaultValue: defaultValue,
      ref: ref,
      ...rest
    }),
    error && errorMessage && React.createElement(
      'p',
      { className: 'text-error text-sm mt-1' },
      errorMessage
    )
  );
});

Input.displayName = 'Input';

export { Input };