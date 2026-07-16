import React from 'react';

function cn() {
  return Array.prototype.slice.call(arguments).filter(Boolean).join(' ');
}

const buttonVariants = {
  primary: 'bg-primary text-primaryForeground hover:bg-primary/90',
  secondary: 'bg-secondary text-secondaryForeground hover:bg-secondary/90',
  ghost: 'hover:bg-muted hover:text-mutedForeground'
};

const buttonSizes = {
  sm: 'h-9 px-3',
  md: 'h-10 px-4 py-2',
  lg: 'h-11 px-8'
};

/**
 * @typedef {'primary' | 'secondary' | 'ghost'} ButtonVariant
 * @typedef {'sm' | 'md' | 'lg'} ButtonSize
 *
 * @param {object} props
 * @param {ButtonVariant} [props.variant='primary'] - The visual style of the button.
 * @param {ButtonSize} [props.size='md'] - The size of the button.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @param {string} [props.className=''] - Additional CSS classes to apply.
 * @param {React.ReactNode} props.children - The content of the button.
 * @param {React.MouseEventHandler<HTMLButtonElement>} [props.onClick] - Click handler for the button.
 * @param {React.Ref<HTMLButtonElement>} ref - Ref to the button element.
 */
const Button = React.forwardRef(function Button(props, ref) {
  const { variant = 'primary', size = 'md', disabled = false, className = '', children, ...rest } = props;

  const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variantClass = buttonVariants[variant];
  const sizeClass = buttonSizes[size];

  return React.createElement(
    'button',
    {
      className: cn(baseClasses, variantClass, sizeClass, className),
      disabled: disabled,
      ref: ref,
      ...rest
    },
    children
  );
});

Button.displayName = 'Button';

export { Button };