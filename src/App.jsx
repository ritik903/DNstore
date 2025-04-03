import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./HeaderLayout/Layout";
import { useFetchProducts } from "./api/fetchProducts";
import Loading from "./UI/Loading";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import OrderTracking from "./UI/OrderTracking";


// ✅ Lazy loading components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contct"));
const ProdutsAll = lazy(() => import("./Component/ProductsAll"));
const ProductDetail = lazy(() => import("./Component/ProductDetail"));
const AddToCart = lazy(() => import("./Component/AddToCart"));
const Blog = lazy(() => import("./pages/Blog"));
const ResultsPage = lazy(() => import("./Component/ResultsPage"));
const AuthForm = lazy(() => import("./Component/AuthForm"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/product",
        element: (
          <Suspense fallback={<Loading />}>
            <ProdutsAll />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<Loading />}>
            <ResultsPage />
          </Suspense>
        ),
      },
      {
        path: "/blog",
        element: (
          <Suspense fallback={<Loading />}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: "/orderTracking",
        element: (
          <Suspense fallback={<Loading />}>
            <OrderTracking />
          </Suspense>
        ),
      },
      {
        path: "/authForm",
        element: (
          <Suspense fallback={<Loading />}>
            <AuthForm />
          </Suspense>
        ),
      },
      {
        path: "/addtocart",
        element: (
          <Suspense fallback={<Loading />}>
            <AddToCart />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  useFetchProducts();
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
};

export default App;
