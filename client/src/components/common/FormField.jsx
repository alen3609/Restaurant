import React from 'react';

export const FormField = ({ label, id, error, helpText, required, children }) => {
  const errorId = error ? `${id}-error` : undefined;
  const helpId = helpText ? `${id}-help` : undefined;
  const ariaDescribedBy = [errorId, helpId].filter(Boolean).join(' ') || undefined;

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {React.cloneElement(children, {
        id,
        'aria-invalid': !!error,
        'aria-describedby': ariaDescribedBy,
        className: `w-full rounded-lg border px-3 py-2.5 text-sm bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 min-h-touch ${
          error ? 'border-red-500 focus:ring-red-500' : ''
        } ${children.props.className || ''}`,
      })}
      {error && (
        <p id={errorId} className="mt-1 text-xs text-red-600 dark:text-red-400 font-medium">
          {error}
        </p>
      )}
      {helpText && !error && (
        <p id={helpId} className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          {helpText}
        </p>
      )}
    </div>
  );
};

export default FormField;
