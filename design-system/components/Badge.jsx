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
 * Badge component for small, descriptive labels.
 * @param {object} props - The component props.
 * @param {'default' | 'primary' | 'success' | 'warning' | 'error'} [props.variant='default'] - The visual variant of the badge.
 * @param {React.ReactNode} props.children - The content of the badge.
 * @param {string} [props.className] - Additional CSS classes to apply to the badge.
 * @returns {JSX.Element}
 */
const Badge = (props) => {
  const { variant = 'default', children, className, ...rest } = props;

  const baseStyles = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';

  const variantStyles = {
    'default': 'border-transparent bg-muted text-muted-foreground',
    'primary': 'border-transparent bg-primary text-primary-foreground',
    'success': 'border-transparent bg-success text-success-foreground',
    'warning': 'border-transparent bg-warning text-warning-foreground',
    'error': 'border-transparent bg-error text-error-foreground'
  };

  return (
    <span className={cn(baseStyles, variantStyles[variant], className)} {...rest}>
      {children}
    </span>
  );
};


export { Badge }
