import { createBrowserRouter } from "react-router-dom";
import Index from "@/pages/Index";
import BlogPost from "@/pages/BlogPost";
import Blog from "@/pages/Blog";
import CollectInfo from "@/pages/CollectInfo";
import EmailPreview from "@/pages/EmailPreview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/blog/:slug",
    element: <BlogPost />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/collect-info",
    element: <CollectInfo />,
  },
  {
    path: "/email-preview",
    element: <EmailPreview />,
  },
]);

export default router;
