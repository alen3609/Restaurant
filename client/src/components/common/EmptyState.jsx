import React from 'react';
import { PackageOpen } from 'lucide-react';

export const EmptyState = ({ title = 'No items found', message = 'There are no items to display at this time.', actionLabel, onAction }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-2xl border-2 border-dashed border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 my-4">
      <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 border border-emerald-100 dark:border-emerald-900/40">
        <PackageOpen className="w-7 h-7" />
      </div>
      <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mb-6">{message}</p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="px-4.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-sm min-h-touch"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
