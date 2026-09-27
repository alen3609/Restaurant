import React from 'react';
import Modal from './Modal';
import { AlertTriangle } from 'lucide-react';

export const ConfirmDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed?',
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  isDanger = false,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="flex flex-col items-center sm:items-start sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
            isDanger ? 'bg-red-100 dark:bg-red-900/30 text-red-600' : 'bg-amber-100 dark:bg-amber-900/30 text-amber-600'
          }`}
        >
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm text-slate-600 dark:text-slate-300">{message}</p>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row justify-end gap-2">
        <button
          onClick={onClose}
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 font-medium text-sm min-h-touch"
        >
          {cancelLabel}
        </button>
        <button
          onClick={() => {
            onConfirm();
            onClose();
          }}
          className={`w-full sm:w-auto px-4 py-2.5 rounded-xl text-white font-medium text-sm shadow-sm transition-colors min-h-touch ${
            isDanger
              ? 'bg-red-600 hover:bg-red-700'
              : 'bg-brand-500 hover:bg-brand-600'
          }`}
        >
          {confirmLabel}
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmDialog;
