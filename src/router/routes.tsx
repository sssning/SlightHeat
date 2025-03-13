import { lazy } from "react";
const App = lazy(() => import("../App"));
const Layout = lazy(() => import("../pages/layout"));

export const routes = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <App />,
			}
		],
	}
];
