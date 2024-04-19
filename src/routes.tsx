import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pets } from "./pages/Pets";
import { PetDetails } from "./pages/PetDetails";

const router = createBrowserRouter([
  {
  path: "/",
  element: <Home />
},
{
  path: "/pets",
  children: [
    {
      index: true,
      element: <Pets />,
    },
   {
    path: ":id",
    element: <PetDetails />
   }
  ]  
},
{
  path: "/admin",
  element: <div>Admin</div>
}
]);

export default router;