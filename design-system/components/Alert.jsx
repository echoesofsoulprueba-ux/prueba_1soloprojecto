import React from 'react';

function cn() {
  return Array.prototype.slice.call(arguments).filter(Boolean).join(' ');
}

const alertVariants = {
  success: 'bg-success text-successForeground border-success',
  warning: 'bg-warning text-warningForeground border-warning',
  error: 'bg-error text-errorForeground border-error'
};

/**
 * @typedef {'success' | 'warning' | 'error'} AlertVariant
 *
 * @param {object} props
 * @param {AlertVariant} props.variant - The visual style of the alert.
 * @param {string} props.title - The title of the alert.
 * @param {React.ReactNode} props.children - The content of the alert.
 * @param {string} [props.className=''] - Additional CSS classes to apply.
 */
function Alert(props) {
  const { variant, title, children, className = '' } = props;

  const baseClasses = 'relative w-full rounded-lg border p-4';
  const variantClass = alertVariants[variant];

  return React.createElement(
    'div',
    { className: cn(baseClasses, variantClass, className), role: 'alert' },
    React.createElement(
      'div',
      { className: 'mb-1 font-semibold' },
      title
    ),
    React.createElement(
      'div',
      { className: 'text-sm [&_p]:leading-relaxed' },
      children
    )
  );
}

Alert.displayName = 'Alert';

export { Alert };