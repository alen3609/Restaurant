import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import Skeleton from '../components/common/Skeleton';
import EmptyState from '../components/common/EmptyState';
import ErrorState from '../components/common/ErrorState';
import { Search, Sparkles, Clock, Leaf, Star, ArrowRight } from 'lucide-react';

export const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [openNow, setOpenNow] = useState(false);
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedCuisine, setSelectedCuisine] = useState('');

  const [restaurants, setRestaurants] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch cuisines and initial restaurant list
    Promise.all([
      api.get('/restaurants?limit=6'),
      api.get('/admin/cuisine-tags').catch(() => ({ data: { data: [] } })),
    ])
      .then(([restRes, cuisRes]) => {
        setRestaurants(restRes.data.data || []);
        setCuisines(cuisRes.data.data || []);
      })
      .catch((err) => {
        setError(err.response?.data?.error?.message || 'Failed to load home data');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (openNow) params.set('openNow', 'true');
    if (vegOnly) params.set('vegOnly', 'true');
    if (selectedCuisine) params.set('cuisine', selectedCuisine);
    navigate(`/restaurants?${params.toString()}`);
  };

  const handleCuisineClick = (cuisineName) => {
    const nextCuisine = selectedCuisine === cuisineName ? '' : cuisineName;
    setSelectedCuisine(nextCuisine);
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (openNow) params.set('openNow', 'true');
    if (vegOnly) params.set('vegOnly', 'true');
    if (nextCuisine) params.set('cuisine', nextCuisine);
    navigate(`/restaurants?${params.toString()}`);
  };

  return (
    <div className="space-y-10 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-950 text-white rounded-3xl p-6 sm:p-12 shadow-xl border border-emerald-800/40">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10 text-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Curated Local Gastronomy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
            Artisanal dining, crafted for your table.
          </h1>
          <p className="mt-3 text-sm sm:text-base text-emerald-100/90 dark:text-slate-300 font-normal">
            Discover renowned local kitchens, seasonal menus, and swift delivery from neighborhood culinary masters.
          </p>

          {/* Search Box */}
          <form onSubmit={handleSearchSubmit} className="mt-8 space-y-3">
            <div className="flex items-center bg-white/95 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-2 shadow-lg border border-slate-200/50 dark:border-slate-800">
              <Search className="w-5 h-5 text-slate-400 ml-3 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search restaurants, signature dishes, or cuisines..."
                className="w-full px-3 py-2 text-sm text-slate-900 dark:text-white bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-md flex-shrink-0 min-h-touch"
              >
                Search
              </button>
            </div>

            {/* Quick Filter Toggles */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setOpenNow(!openNow)}
                className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  openNow
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Open Now</span>
              </button>

              <button
                type="button"
                onClick={() => setVegOnly(!vegOnly)}
                className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  vegOnly
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                }`}
              >
                <Leaf className="w-3.5 h-3.5" />
                <span>Vegetarian Only</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Cuisine Chips */}
      {cuisines.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Explore Cuisines</h2>
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {cuisines.map((c) => (
              <button
                key={c._id || c.name}
                onClick={() => handleCuisineClick(c.name)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  selectedCuisine === c.name
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-400'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Featured Restaurants */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Popular Restaurants</h2>
          <button
            onClick={() => navigate('/restaurants')}
            className="inline-flex items-center space-x-1 text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
          >
            <span>Explore all</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Skeleton className="h-64" count={3} />
          </div>
        ) : error ? (
          <ErrorState message={error} onRetry={() => window.location.reload()} />
        ) : restaurants.length === 0 ? (
          <EmptyState title="No restaurants available" message="Please check back later for new kitchen listings." />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((rest) => (
              <div
                key={rest._id}
                onClick={() => navigate(`/restaurants/${rest._id}`)}
                className="group cursor-pointer bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative h-44 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  {rest.imageUrl ? (
                    <img
                      src={rest.imageUrl}
                      alt={rest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100 dark:bg-slate-850">
                      <Sparkles className="w-8 h-8 text-emerald-600/40" />
                    </div>
                  )}
                  {!rest.isCurrentlyOpen && (
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-xs font-semibold">
                      Currently Closed
                    </div>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {rest.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-1">
                      {rest.cuisineTypes?.join(', ') || 'Various Cuisines'}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>{rest.estimatedDeliveryTime || '25-35'} min delivery</span>
                    </div>
                    <div>
                      <span>Fee: {rest.deliveryFee ? `$${(rest.deliveryFee / 100).toFixed(2)}` : 'Free'}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
