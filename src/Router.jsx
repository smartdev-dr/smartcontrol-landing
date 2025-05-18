import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import HomeTwo from "./pages/homeTwo";
import About from "./pages/about";
import Services from "./pages/service";
import ServiceDetails from "./pages/service-details";
import Features from "./pages/features";
import Pricing from "./pages/pricing";
import Error from "./pages/Error";
import Signin from "./pages/signin";
import SignUp from "./pages/signup";
import Blogs from "./pages/blogs";
import BlogDetails from "./pages/blog-details";
import Contact from "./pages/contact";
import Layout from "./component/common/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home-two",
        element: <HomeTwo />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services-details",
        element: <ServiceDetails />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/prices",
        element: <Pricing />,
      },
      {
        path: "/404",
        element: <Error />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/blog-details",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
