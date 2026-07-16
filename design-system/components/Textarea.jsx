import React from 'react';

/**
 * A utility function to conditionally join Tailwind CSS classes.
 * @param {(string | boolean | null | undefined)[]} classes - An array of class names, booleans, null, or undefined.
 * @returns {string} A single string of joined and filtered class names.
 */
function cn() {
  var classes = Array.prototype.slice.call(arguments);
  return classes.filter(Boolean).join(' ');
}

/**
 * Textarea component for multi-line text input.
 * @param {object} props - The component props.
 * @param {string} [props.placeholder] - The placeholder text for the textarea.
 * @param {number} [props.rows=4] - The number of visible text lines for the textarea.
 * @param {boolean} [props.disabled=false] - If true, the textarea is disabled.
 * @param {boolean} [props.error=false] - If true, displays an error state.
 * @param {string} [props.errorMessage] - The error message to display when `error` is true.
 * @param {string} [props.defaultValue] - The default value for the textarea.
 * @param {string} [props.className] - Additional CSS classes to apply to the textarea.
 * @param {React.Ref<HTMLTextAreaElement>} ref - The ref to forward to the underlying textarea element.
 * @returns {JSX.Element}
 */
const Textarea = React.forwardRef((props, ref) => {
  const { placeholder, rows = 4, disabled = false, error = false, errorMessage, defaultValue, className, ...rest } = props;

  const baseStyles = 'flex min-h-[80px] w-full rounded-md border border-border bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
  const errorStyles = 'border-error focus-visible:ring-error';

  return (
    <div className={cn('flex flex-col w-full', className)}>
      <textarea
        placeholder={placeholder}
        rows={rows}
        defaultValue={defaultValue}
        disabled={disabled}
        className={cn(baseStyles, error && errorStyles)}
        ref={ref}
        {...rest}
      />
      {error && errorMessage && (
        <p className="text-sm text-error mt-1">{errorMessage}</p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';


export { Textarea }
