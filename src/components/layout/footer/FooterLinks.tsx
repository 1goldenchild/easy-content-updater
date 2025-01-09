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
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold mb-4 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">Legal & Support</h4>
        <ul className="space-y-2">
          <li>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/refund" className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors">Refund Policy</Link>
          </li>
          <li>
            <Link to="/support" className="text-sm text-muted-foreground hover:text-[#8B5CF6] transition-colors">Support</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FooterLinks;