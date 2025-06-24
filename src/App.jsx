import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout/AppLayout";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Home from "./pages/client/Home/Home";
import About from "./pages/client/About/About";
import Projects from "./pages/client/Projects/Projects";
import News from "./pages/client/News/News";
import Services from "./pages/client/Services/Services";
import Contact from "./pages/client/Contact/Contact";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
import Dashboard from "./pages/admin/Dashboard/Dashboard";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <AppLayout />,
      children: [
        // client
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "about",
              element: <About />,
            },
            {
              path: "projects",
              element: <Projects />,
            },
            {
              path: "news",
              element: <News />,
            },
            {
              path: "services",
              element: <Services />,
            },
            {
              path: "contact",
              element: <Contact />,
            },
          ],
        },

        // admin
        {
          path: "admin",
          element: <AdminLayout />,
          children: [
            {
              path: "",
              element: <Dashboard />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
