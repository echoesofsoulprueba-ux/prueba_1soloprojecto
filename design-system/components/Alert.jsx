import React from 'react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const alertVariants = {
  success: "bg-success border-success text-successForeground",
  warning: "bg-warning border-warning text-warningForeground",
  error: "bg-error border-error text-errorForeground"
};

const Alert = (props) => {
  const { variant, title, children, className } = props;

  const variantClasses = alertVariants[variant] || alertVariants.success; // Fallback to success

  return (
    <div
      role="alert"
      className={cn(
        "relative w-full rounded-lg border p-4",
        variantClasses,
        className
      )}
    >
      {title && <h5 className="mb-1 font-bold leading-none tracking-tight">{title}</h5>}
      <div className="text-sm [&>p]:leading-relaxed">{children}</div>
    </div>
  );
};

export { Alert };