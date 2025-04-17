import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./Component/Body";
import BookPage from "./Component/BookPage";
import Header from "./Component/HeadnFoot/Header";
import BookContext from "./utils/BookContext";
import { useEffect, useState } from "react";
import BookNotFound from "./Component/ErrorPages/BookNotFound";
import NotFoundPage from "./Component/ErrorPages/NotFound";
import About from "./Component/About";
import Favorites from "./Component/Favorites";
import { Provider } from "react-redux";
import { persistor, store } from "./utils/FavoriteStore";
import { PersistGate } from "redux-persist/lib/integration/react";
import AdvanceForm from "./Component/AdvanceForm";

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

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <NotFoundPage />
      },
      {
        path: "/BookPage",
        element: <BookPage />,
        errorElement: <BookNotFound />
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <NotFoundPage />
      },
      {
        path: "/favorites",
        element: <Favorites />,
        errorElement: <NotFoundPage />
      },
      {
        path: "/Search",
        element: <AdvanceForm />,
        errorElement: <NotFoundPage />
      }
    ]
  }
]);

const Root = () => {
  return <RouterProvider router={AppRouter} />;
};

export default Root;
