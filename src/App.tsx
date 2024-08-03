import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import NotFound from "./pages/NotFound";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Bookmarks from "./pages/Bookmarks";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "/movies",
        element: <Movies />,
        errorElement: <NotFound />,
      },
      {
        path: "/tv-shows",
        element: <TvShows />,
        errorElement: <NotFound />,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
        errorElement: <NotFound />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
export default App;
