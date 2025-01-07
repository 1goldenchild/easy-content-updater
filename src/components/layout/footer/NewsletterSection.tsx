import React from 'react';

const NewsletterSection = () => {
  return (
    <div className="col-span-2 md:col-span-1">
      <h4 className="text-sm font-semibold mb-4 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">Newsletter</h4>
      <p className="text-sm text-muted-foreground mb-4">
        Subscribe to receive numerology insights and updates.
      </p>
      <div className="relative">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 text-sm border rounded-lg bg-background/50 backdrop-blur-sm border-purple-500/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
        />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] opacity-0 hover:opacity-10 transition-opacity pointer-events-none" />
      </div>
    </div>
  );
};

export default NewsletterSection;