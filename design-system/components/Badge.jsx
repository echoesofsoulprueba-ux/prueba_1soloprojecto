import React from 'react';

function cn() {
  return Array.prototype.slice.call(arguments).filter(Boolean).join(' ');
}

const badgeVariants = {
  default: 'bg-muted text-mutedForeground hover:bg-muted/80',
  primary: 'bg-primary text-primaryForeground hover:bg-primary/80',
  success: 'bg-success text-successForeground hover:bg-success/80',
  warning: 'bg-warning text-warningForeground hover:bg-warning/80',
  error: 'bg-error text-errorForeground hover:bg-error/80'
};

/**
 * @typedef {'default' | 'primary' | 'success' | 'warning' | 'error'} BadgeVariant
 *
 * @param {object} props
 * @param {BadgeVariant} [props.variant='default'] - The visual style of the badge.
 * @param {React.ReactNode} props.children - The content of the badge.
 * @param {string} [props.className=''] - Additional CSS classes to apply.
 */
function Badge(props) {
  const { variant = 'default', children, className = '' } = props;

  const baseClasses = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClass = badgeVariants[variant];

  return React.createElement(
    'div',
    { className: cn(baseClasses, variantClass, className) },
    children
  );
}

Badge.displayName = 'Badge';

export { Badge };