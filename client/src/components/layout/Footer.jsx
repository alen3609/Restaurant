import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80 mt-auto py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Savoria Technologies Inc. All rights reserved.
        </p>
        <div className="flex items-center space-x-6 text-xs text-slate-500 dark:text-slate-400">
          <Link to="/privacy" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
