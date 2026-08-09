import React from 'react';

const Textarea = React.forwardRef(({ className = '', ...props }, ref) => {
  const classes = [
    'flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return <textarea ref={ref} className={classes} {...props} />;
});

Textarea.displayName = 'Textarea';

export { Textarea };
export default Textarea;