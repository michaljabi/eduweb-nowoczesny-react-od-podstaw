import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import {PeoplePage} from "../pages/PeoplePage.jsx";
import {ExchangePage} from "../pages/ExchangePage.jsx";
import {PersonInfoPage} from "../pages/PersonInfoPage.jsx";
import {PageLayout} from "../components/PageLayout.jsx";


export const router = createBrowserRouter([
    {
       path: '/',
       element: <App />,
       children: [
           {
               path: "",
               element: <PeoplePage />,
           },
           {
               path: "person/:personName",
               element: <PersonInfoPage />,
           },
           {
               path: "exchange",
               element: <ExchangePage />,
           },
           {
               path: "*",
               element: <PageLayout title="Not found 404" />
           }
       ]
    }
])
