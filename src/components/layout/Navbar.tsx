import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../home/CallToAction";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-amber-200/80 via-purple-500/60 to-amber-200/80 [text-shadow:_0_0_1px_rgba(251,191,36,0.3)]">
            Numerology 33
          </span>
        </Link>

        <Button
          onClick={() => {
            navigate('/collect-info');
            scrollToTop();
          }}
          className="relative group overflow-hidden px-4 sm:px-8 py-2 rounded-lg bg-gradient-to-br from-amber-200/20 to-purple-500/20 backdrop-blur-sm border border-amber-200/30 text-amber-100 hover:text-amber-50 transition-colors"
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Button>
      </div>
    </header>
  );
};

export default Navbar;