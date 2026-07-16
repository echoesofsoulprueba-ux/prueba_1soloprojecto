import React from 'react';

function cn() {
  return Array.prototype.slice.call(arguments).filter(Boolean).join(' ');
}

/**
 * @param {object} props
 * @param {string} [props.placeholder=''] - The placeholder text for the textarea.
 * @param {number} [props.rows=4] - The number of rows for the textarea.
 * @param {boolean} [props.disabled=false] - Whether the textarea is disabled.
 * @param {boolean} [props.error=false] - Whether the textarea is in an error state.
 * @param {string} [props.errorMessage=''] - The error message to display when `error` is true.
 * @param {string} [props.defaultValue=''] - The default value for the textarea.
 * @param {string} [props.className=''] - Additional CSS classes to apply.
 * @param {React.Ref<HTMLTextAreaElement>} ref - Ref to the textarea element.
 */
const Textarea = React.forwardRef(function Textarea(props, ref) {
  const {
    placeholder = '',
    rows = 4,
    disabled = false,
    error = false,
    errorMessage = '',
    defaultValue = '',
    className = '',
    ...rest
  } = props;

  const baseClasses = cn(
    'flex min-h-[80px] w-full rounded-md border bg-background px-3 py-2 text-sm',
    'placeholder:text-mutedForeground',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    error ? 'border-error ring-error' : 'border-border'
  );

  return React.createElement(
    React.Fragment,
    null,
    React.createElement('textarea', {
      className: cn(baseClasses, className),
      placeholder: placeholder,
      rows: rows,
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

Textarea.displayName = 'Textarea';

export { Textarea };