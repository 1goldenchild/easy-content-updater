import React from 'react';
import { Youtube, Instagram } from "lucide-react";
import TikTokIcon from "../../icons/TikTokIcon";

const FooterSocialLinks = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex flex-col items-center">
        <a
          href="https://www.tiktok.com/@numerology_33"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] p-[1px] hover:scale-110 transition-transform"
        >
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
            <span className="sr-only">TikTok</span>
            <TikTokIcon className="w-5 h-5 text-white" />
          </div>
        </a>
        <span className="text-xs text-white mt-1">87k</span>
      </div>

      <div className="flex flex-col items-center">
        <a
          href="https://www.youtube.com/@numerology-33"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] p-[1px] hover:scale-110 transition-transform"
        >
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
            <span className="sr-only">YouTube</span>
            <Youtube className="w-5 h-5 text-white" />
          </div>
        </a>
        <span className="text-xs text-white mt-1">&nbsp;</span>
      </div>

      <div className="flex flex-col items-center">
        <a
          href="https://www.instagram.com/33.numerology33"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] p-[1px] hover:scale-110 transition-transform"
        >
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
            <span className="sr-only">Instagram</span>
            <Instagram className="w-5 h-5 text-white" />
          </div>
        </a>
        <span className="text-xs text-white mt-1">&nbsp;</span>
      </div>
    </div>
  );
};

export default FooterSocialLinks;