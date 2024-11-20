import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import {PeoplePage} from "../pages/PeoplePage.jsx";
import {ExchangePage} from "../pages/ExchangePage.jsx";


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
               path: "exchange",
               element: <ExchangePage />,
           },

       ]
    }
])
