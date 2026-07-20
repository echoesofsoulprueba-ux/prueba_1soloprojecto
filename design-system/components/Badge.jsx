import React from 'react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const badgeVariants = {
  default: "bg-muted text-mutedForeground border-transparent",
  primary: "bg-primary text-primaryForeground border-primary",
  success: "bg-success text-successForeground border-success",
  warning: "bg-warning text-warningForeground border-warning",
  error: "bg-error text-errorForeground border-error"
};

const Badge = (props) => {
  const { variant = "default", className, ...rest } = props;

  const variantClasses = badgeVariants[variant] || badgeVariants.default;

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
        variantClasses,
        className
      )}
      {...rest}
    />
  );
};

export { Badge };