import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ShoppingBag, Bell, UtensilsCrossed, User, LogOut, Shield, Store } from 'lucide-react';

export const Navbar = () => {
  const { user, logout, unreadNotificationsCount } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center space-x-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-md shadow-emerald-900/10 group-hover:scale-[1.02] transition-transform duration-150">
            <UtensilsCrossed className="w-4 h-4" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
            Savoria<span className="text-emerald-600 dark:text-emerald-400">.</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-1 sm:space-x-3">
          <Link
            to="/restaurants"
            className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
          >
            Explore Dining
          </Link>

          {user && user.role === 'customer' && (
            <>
              <Link
                to="/cart"
                className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 relative min-h-touch min-w-touch flex items-center justify-center transition-colors"
                aria-label="View Cart"
              >
                <ShoppingBag className="w-5 h-5" />
              </Link>
              <Link
                to="/notifications"
                className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 relative min-h-touch min-w-touch flex items-center justify-center transition-colors"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                {unreadNotificationsCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                    {unreadNotificationsCount > 9 ? '9+' : unreadNotificationsCount}
                  </span>
                )}
              </Link>
            </>
          )}

          {user && user.role === 'restaurant' && (
            <Link
              to="/restaurant/dashboard"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors"
            >
              <Store className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Partner Console</span>
            </Link>
          )}

          {user && user.role === 'admin' && (
            <Link
              to="/admin/dashboard"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800/50 hover:bg-teal-100 dark:hover:bg-teal-900/60 transition-colors"
            >
              <Shield className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Platform Admin</span>
            </Link>
          )}

          {/* User Menu */}
          {user ? (
            <div className="flex items-center space-x-1 sm:space-x-2 pl-2 border-l border-slate-200 dark:border-slate-800">
              <Link
                to="/profile"
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                <User className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="hidden md:inline">{user.name}</span>
              </Link>
              <button
                onClick={logout}
                className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 min-h-touch min-w-touch flex items-center justify-center transition-colors"
                title="Sign Out"
                aria-label="Sign Out"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2 pl-2">
              <Link
                to="/login"
                className="px-3.5 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 min-h-touch flex items-center transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm min-h-touch flex items-center transition-all"
              >
                Get Started
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
