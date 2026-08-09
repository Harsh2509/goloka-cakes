import React from 'react';

const Input = React.forwardRef(({ className = '', type = 'text', ...props }, ref) => {
  const classes = [
    'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return <input ref={ref} type={type} className={classes} {...props} />;
});

Input.displayName = 'Input';

export { Input };
export default Input;