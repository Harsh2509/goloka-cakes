import React from 'react';

const Card = React.forwardRef(({ className = '', ...props }, ref) => (
  <div
    ref={ref}
    className={['rounded-xl border border-rose-100 bg-white text-gray-900 shadow-sm', className].filter(Boolean).join(' ')}
    {...props}
  />
));

Card.displayName = 'Card';

const CardContent = React.forwardRef(({ className = '', ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));

CardContent.displayName = 'CardContent';

const CardHeader = React.forwardRef(({ className = '', ...props }, ref) => (
  <div ref={ref} className={['flex flex-col space-y-1.5 p-6', className].filter(Boolean).join(' ')} {...props} />
));

CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef(({ className = '', ...props }, ref) => (
  <h3 ref={ref} className={['text-2xl font-semibold leading-none tracking-tight', className].filter(Boolean).join(' ')} {...props} />
));

CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef(({ className = '', ...props }, ref) => (
  <p ref={ref} className={['text-sm text-gray-500', className].filter(Boolean).join(' ')} {...props} />
));

CardDescription.displayName = 'CardDescription';

const CardFooter = React.forwardRef(({ className = '', ...props }, ref) => (
  <div ref={ref} className={['flex items-center p-6 pt-0', className].filter(Boolean).join(' ')} {...props} />
));

CardFooter.displayName = 'CardFooter';

export { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter };