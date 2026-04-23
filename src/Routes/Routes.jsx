import { createBrowserRouter} from "react-router";
import Root from "../Pages/Root/Root";
import { ErrorPage } from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import { Apps } from "../Pages/Apps/Apps";
import { Installation } from "../Pages/Installation/Installation";
import AppsDetails from "../Pages/AppsDetails/AppsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            path: "/",
            Component: Home,
        },
        {
            path: "/apps",
            Component: Apps,
        },
        {
            path: "/installation",
            Component: Installation,
        },
        {
            path: "/apps/:id",
            Component: AppsDetails,
        }
    ]
  },
]);
