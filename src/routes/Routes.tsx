import App from "../App";
import Blogpage from "../components/Blog/BlogPage";
import Dashboard from "../components/dashboard/Dashboard";
import InvalidRoute from "../components/Error/InvalidRoute";
import Landing from "../components/layout/Landing";
import {createBrowserRouter} from 'react-router'


const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/blog", element: <Blogpage /> },
    ],
  },
  { path: "*", element: <InvalidRoute /> },
];

export const router = createBrowserRouter(routes);