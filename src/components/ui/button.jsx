import React from 'react';

const buttonVariants = {
  default: 'bg-rose-600 text-white hover:bg-rose-700 shadow-sm',
  destructive: 'bg-red-600 text-white hover:bg-red-700 shadow-sm',
  outline: 'border border-rose-600 bg-transparent text-rose-600 hover:bg-rose-50',
  secondary: 'bg-rose-100 text-rose-700 hover:bg-rose-200',
  ghost: 'bg-transparent text-rose-600 hover:bg-rose-50',
  link: 'bg-transparent text-rose-600 underline-offset-4 hover:underline'
};

const buttonSizes = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-12 rounded-lg px-6',
  icon: 'h-10 w-10'
};

const Button = React.forwardRef(
  ({ className = '', variant = 'default', size = 'default', type = 'button', ...props }, ref) => {
    const classes = [
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2',
      buttonVariants[variant] || buttonVariants.default,
      buttonSizes[size] || buttonSizes.default,
      className
    ]
      .filter(Boolean)
      .join(' ');

    return <button ref={ref} type={type} className={classes} {...props} />;
  }
);

Button.displayName = 'Button';

export { Button };
export default Button;