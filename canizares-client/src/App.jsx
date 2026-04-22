import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components & Layouts
import Layout from "./layouts/Layout";
import AuthLayout from "./layouts/AuthLayout";

// Pages
import ArticlePage from "./pages/ArticlePage";
import ArticleListPage from "./pages/ArticleListPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignInPage from "./pages/AuthPages/SignInPage";
import SignUpPage from "./pages/AuthPages/SignUpPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "articles",
        element: <ArticlePage />,
      },
      {
        path: "articles/list",
        element: <ArticleListPage />,
      },
      {
        path: "articles/:name",
        element: <ArticleDetailPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/signin",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <SignInPage />,
      },
    ],
  },
  {
    path: "/signup",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <SignUpPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
