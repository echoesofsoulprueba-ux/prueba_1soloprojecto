import React from 'react';

const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const buttonVariants = {
  base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    primary: "bg-primary text-primaryForeground hover:bg-primary/90",
    secondary: "bg-secondary text-secondaryForeground hover:bg-secondary/90",
    ghost: "hover:bg-muted hover:text-mutedForeground"
  },
  sizes: {
    sm: "h-9 px-3",
    md: "h-10 px-4 py-2",
    lg: "h-11 px-8"
  }
};

const Button = React.forwardRef((props, ref) => {
  const { className, variant = "primary", size = "md", ...rest } = props;

  return (
    <button
      className={cn(
        buttonVariants.base,
        buttonVariants.variants[variant],
        buttonVariants.sizes[size],
        className
      )}
      ref={ref}
      {...rest}
    />
  );
});

Button.displayName = "Button";

export { Button };