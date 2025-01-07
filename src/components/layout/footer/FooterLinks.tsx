import React from 'react';
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <>
      <div>
        <h4 className="text-sm font-semibold mb-4 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">Quick Links</h4>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/analysis" className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors">Analysis</Link>
          </li>
          <li>
            <Link to="/blog" className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors">Blog</Link>
          </li>
          <li>
            <Link to="/portal" className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors">Portal</Link>
          </li>
          <li>
            <Link to="/email-preview" className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors">Flow</Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold mb-4 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">Resources</h4>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors">About Numerology</a>
          </li>
          <li>
            <a href="#" className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors">FAQ</a>
          </li>
          <li>
            <a href="#" className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FooterLinks;