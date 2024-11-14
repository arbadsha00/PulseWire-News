import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Error from "../components/Error";

const router = createBrowserRouter([{
    path: '/',
    element: <HomeLayout></HomeLayout>,
    errorElement : <Error></Error>,
},
    
]);
export default router;