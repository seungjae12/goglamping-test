import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import RoomView from "../pages/room-view";
import FacilityGuide from "../pages/facility-guide";
import Booking from "../pages/booking";
import UsageGuide from "../pages/usage-guide";
import HowToGetHere from "../pages/how-to-get-here";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>돌아가세요.</div>,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/room-view", element: <RoomView /> },
      { path: "/facility-guide", element: <FacilityGuide /> },
      { path: "/booking", element: <Booking /> },
      { path: "/usage-guide", element: <UsageGuide /> },
      { path: "/how-to-get-here", element: <HowToGetHere /> },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
