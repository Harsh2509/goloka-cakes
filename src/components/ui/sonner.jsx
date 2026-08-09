import React from 'react';
import { useToast } from '../../hooks/use-toast';

const variantStyles = {
  default: 'border-rose-100 bg-white text-gray-900 shadow-lg',
  destructive: 'border-red-100 bg-white text-red-700 shadow-lg'
};

const Toaster = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex w-[calc(100vw-2rem)] max-w-sm flex-col gap-3 pointer-events-none">
      {toasts.map((item) => (
        <div
          key={item.id}
          className={[
            'pointer-events-auto rounded-xl border px-4 py-3 backdrop-blur-sm transition-all duration-300',
            variantStyles[item.variant] || variantStyles.default
          ].join(' ')}
        >
          {item.title ? <div className="font-semibold">{item.title}</div> : null}
          {item.description ? <div className="mt-1 text-sm text-gray-600">{item.description}</div> : null}
        </div>
      ))}
    </div>
  );
};

export { Toaster };
export default Toaster;