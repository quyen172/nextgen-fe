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
import Login from "./pages/client/Login/Login";
import Register from "./pages/client/Register/Register";
import Products from "./pages/client/Products/Products";
import ProductDetail from "./pages/client/ProductDetail/ProductDetail";
import Cart from "./pages/client/Cart/Cart";
import Checkout from "./pages/client/Checkout/Checkout";
import ThankYou from "./pages/client/ThankYou/ThankYou";
import VerifyEmail from "./pages/client/VerifyEmail/VerifyEmail";
import ForgotPassword from "./pages/client/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/client/ResetPassword/ResetPassword";

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
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
            {
              path: "verify-email",
              element: <VerifyEmail />,
            },
            {
              path: "forgot-password",
              element: <ForgotPassword />,
            },
            {
              path: "reset-password",
              element: <ResetPassword />,
            },
            {
              path: "products",
              element: <Products />,
            },
            {
              path: "products/:id",
              element: <ProductDetail />,
            },
            {
              path: "cart",
              element: <Cart />,
            },
            {
              path: "checkout",
              element: <Checkout />,
            },
            {
              path: "thank-you",
              element: <ThankYou />,
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
