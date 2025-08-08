import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./components/Home.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import axios from "axios";
import MyAddedCoffee from "./components/MyAddedCoffee.jsx";
import Errorpage from "./components/Errorpage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Errorpage></Errorpage>,
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => axios("http://localhost:3000/coffees"),
        Component: Home,
      },
      {
        path: "addCoffee",
        Component: AddCoffee,
      },
      {
        path: "/coffee/:id",
        loader: ({ params }) =>
          axios(`http://localhost:3000/coffee/${params.id}`),

        Component: CoffeeDetails,
      },
      {
        path: "updateCoffee/:id",

        Component: UpdateCoffee,
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "/my-added-coffees/:email",
        loader: ({ params }) =>
          axios(`http://localhost:3000/my-coffees/${params.email}`),
        Component: MyAddedCoffee,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
