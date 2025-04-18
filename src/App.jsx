import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Component/HeadnFoot/Header";
import BookContext from "./utils/BookContext";
import { lazy, Suspense, useEffect, useState } from "react";
import BookNotFound from "./Component/ErrorPages/BookNotFound";
import NotFoundPage from "./Component/ErrorPages/NotFound";
import About from "./Component/About";
import { Provider } from "react-redux";
import { persistor, store } from "./utils/FavoriteStore";
import { PersistGate } from "redux-persist/lib/integration/react";
import Loading from "./Component/Loadin";

const App = () => {
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const data = {};
    setCurrent(data.title);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BookContext.Provider value={{ current: current, setCurrent }}>
          <Header />
          <Outlet />
        </BookContext.Provider>
      </PersistGate>
    </Provider>
  );
};

const Favorites = lazy(() => import("./Component/Favorites") )
const BookPage = lazy(() => import("./Component/BookPage") )
const AdvanceForm = lazy(() => import("./Component/AdvanceForm") )
const Body = lazy(() => import("./Component/Body") )

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<Loading/>} ><Body/></Suspense>,
        errorElement: <NotFoundPage />
      },
      {
        path: "/BookPage",
        element:  <Suspense fallback={<Loading/>} ><BookPage/></Suspense>,
        errorElement: <BookNotFound />
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <NotFoundPage />
      },
      {
        path: "/favorites",
        element: <Suspense fallback={<Loading/>} ><Favorites/></Suspense>,
        errorElement: <NotFoundPage />
      },
      {
        path: "/Search",
        element:  <Suspense fallback={<Loading/>} ><AdvanceForm/></Suspense>,
        errorElement: <NotFoundPage />
      }
    ]
  }
]);

const Root = () => {
  return <RouterProvider router={AppRouter} />;
};

export default Root;
