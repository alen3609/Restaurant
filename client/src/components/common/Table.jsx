import React from 'react';

export const Table = ({ headers, children }) => {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
      <table className="w-full text-left text-sm text-slate-700 dark:text-slate-300">
        <thead className="bg-slate-50 dark:bg-slate-900/50 text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} scope="col" className="px-4 py-3 sm:px-6">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 dark:divide-slate-700">{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
