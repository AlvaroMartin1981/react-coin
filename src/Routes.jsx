import { createBrowserRouter } from "react-router-dom";
import Header from "./templates/Header";
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import Favorites from "./pages/Favorites";
import Error from "./Error"

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error/>,
        element:  <Header/>,
        children:[
            {path:'/', element: <Home/>},
            {path:'/coin/:id', element:<Coin/>},
            {path:'/favorites', element:<Favorites/>}
        ]
    },
    {
        path:"*",
        element: <Error />
    }
]);
export default  router;