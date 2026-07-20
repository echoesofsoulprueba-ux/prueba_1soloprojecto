import React from 'react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const Textarea = React.forwardRef((props, ref) => {
  const { className, disabled, error, errorMessage, rows = 4, ...rest } = props;

  return (
    <div>
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed",
          error ? "border-error focus-visible:ring-error" : "border-border focus-visible:ring-primary",
          disabled && "opacity-50 pointer-events-none",
          className
        )}
        rows={rows}
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

Textarea.displayName = "Textarea";

export { Textarea };