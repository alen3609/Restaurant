import React from 'react';

const STATUS_COLORS = {
  // Order Statuses
  PAYMENT_PENDING: 'bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/50',
  PLACED: 'bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700',
  CONFIRMED: 'bg-teal-50 text-teal-800 border border-teal-200 dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-800/50',
  PREPARING: 'bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/50',
  READY: 'bg-emerald-100 text-emerald-900 border border-emerald-300 dark:bg-emerald-900/50 dark:text-emerald-200 dark:border-emerald-700',
  OUT_FOR_DELIVERY: 'bg-sky-50 text-sky-800 border border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800/50',
  DELIVERED: 'bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/50',
  COMPLETED: 'bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/50',
  REJECTED: 'bg-rose-50 text-rose-800 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800/50',
  CANCELLED: 'bg-rose-50 text-rose-800 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800/50',
  EXPIRED: 'bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',

  // Account / Restaurant Statuses
  ACTIVE: 'bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/50',
  SUSPENDED: 'bg-rose-50 text-rose-800 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800/50',

  // Payment Statuses
  PENDING: 'bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/50',
  FAILED: 'bg-rose-50 text-rose-800 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800/50',
  REFUND_PENDING: 'bg-orange-50 text-orange-800 border border-orange-200 dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-800/50',
  REFUNDED: 'bg-slate-100 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
};

export const StatusBadge = ({ status }) => {
  const colorClass = STATUS_COLORS[status] || 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300';
  const label = status ? status.replace(/_/g, ' ') : 'UNKNOWN';

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-semibold tracking-wider uppercase ${colorClass}`}>
      {label}
    </span>
  );
};

export default StatusBadge;
