import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUS";
import MessageUs from "./Pages/MessageUs";
import MessageDetail from './Pages/MessageDetail';
import "./App.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <AboutUs />
        },
        {
          path: "/Contact",
          element: <ContactUs />
        },
        {
          path: "/Message",
          element: <MessageUs /> 
        },
        {
          path: "/Message/:id",
          element:<MessageDetail />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
