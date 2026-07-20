import React from 'react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const Input = React.forwardRef((props, ref) => {
  const { className, disabled, error, errorMessage, ...rest } = props;

  return (
    <div>
      <input
        className={cn(
          "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed",
          error ? "border-error focus-visible:ring-error" : "border-border focus-visible:ring-primary",
          disabled && "opacity-50 pointer-events-none",
          className
        )}
        ref={ref}
        disabled={disabled}
        {...rest}
      />
      {error && errorMessage && (
        <p className="mt-1 text-sm text-error">{errorMessage}</p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export { Input };