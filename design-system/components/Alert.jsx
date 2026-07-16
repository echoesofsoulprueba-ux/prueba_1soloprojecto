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
 * Alert component to display important messages.
 * @param {object} props - The component props.
 * @param {'success' | 'warning' | 'error'} props.variant - The visual variant of the alert.
 * @param {string} props.title - The title of the alert.
 * @param {React.ReactNode} props.children - The content of the alert message.
 * @param {string} [props.className] - Additional CSS classes to apply to the alert.
 * @returns {JSX.Element}
 */
const Alert = (props) => {
  const { variant, title, children, className, ...rest } = props;

  const baseStyles = 'relative w-full rounded-lg border p-4';

  const variantStyles = {
    success: 'bg-success/10 border-success text-success-foreground',
    warning: 'bg-warning/10 border-warning text-warning-foreground',
    error: 'bg-error/10 border-error text-error-foreground'
  };

  return (
    <div
      className={cn(baseStyles, variantStyles[variant], className)}
      role="alert"
      {...rest}
    >
      {title && <h5 className="mb-1 font-bold leading-none tracking-tight">{title}</h5>}
      <div className="text-sm [&_p]:leading-relaxed">{children}</div>
    </div>
  );
};


export { Alert }
