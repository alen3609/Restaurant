import React from 'react';

export const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6 py-8">
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Privacy Policy</h1>
      <p className="text-sm text-slate-600 dark:text-slate-300">
        Your privacy is critically important to us. Savoria collects only necessary order, delivery address, and account contact information required to process food orders and fulfill deliveries.
      </p>
      <h2 className="text-lg font-bold text-slate-900 dark:text-white pt-4">Data Collection & Protection</h2>
      <p className="text-sm text-slate-600 dark:text-slate-300">
        We do not store payment card data on our servers. All online transactions are processed directly by PCI-DSS compliant third-party payment providers (Stripe / Razorpay). Personal contact information is shared with fulfilling restaurants strictly for active orders and is automatically redacted for non-active historical orders.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
