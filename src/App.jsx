import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./Component/Body";
import BookPage from "./Component/BookPage";
import Header from "./Component/Header";
import BookContext from "./utils/BookContext";
import { useEffect, useState } from "react";

const App = () => {
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const data = {}
    setCurrent(data.title)
  },[] )

  return (
    <BookContext.Provider value={{ current:current, setCurrent }}>
      <Header />
      <Outlet />
    </BookContext.Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/BookPage",
        element: <BookPage />
      }
    ]
  }
]);

const Root = () => {
  return <RouterProvider router={AppRouter} />;
};

export default Root;
