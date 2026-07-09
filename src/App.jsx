import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";

import Home from "./app/Home/Home";
import About from "./app/About/About";
import ProductPage from "./app/ProductPage/ProductPage";

import Contact from "./app/Contact/contact";
import CoreKey from "./app/Core value/CoreKey";
import Quality from "./app/QualityAssurance/Quality";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "products/:id",
        element: <ProductPage />,
      },

      {
  path: "products/:id/:variant?",
  element: <ProductPage />,
},
      {
        path: "quality",
        element: <Quality />,
      },

      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "values",
        element: <CoreKey />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;