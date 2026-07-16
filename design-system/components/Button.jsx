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
 * Button component with variants, sizes, and states.
 * @param {object} props - The component props.
 * @param {'primary' | 'secondary' | 'ghost'} [props.variant='primary'] - The visual style of the button.
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - The size of the button.
 * @param {boolean} [props.disabled=false] - If true, the button is disabled.
 * @param {string} [props.className] - Additional CSS classes to apply to the button.
 * @param {React.ReactNode} props.children - The content of the button.
 * @param {React.Ref<HTMLButtonElement>} ref - The ref to forward to the underlying button element.
 * @returns {JSX.Element}
 */
const Button = React.forwardRef((props, ref) => {
  const { variant = 'primary', size = 'md', disabled = false, className, children, ...rest } = props;

  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variantStyles = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70',
    ghost: 'hover:bg-muted hover:text-muted-foreground active:bg-muted/80'
  };

  const sizeStyles = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2 text-base',
    lg: 'h-11 px-8 text-lg'
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className,
        disabled && 'cursor-not-allowed'
      )}
      disabled={disabled}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';


export { Button }
