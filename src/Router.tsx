import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import { MenuProvider } from "./context/MenuContext";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Project/Portfolio";
import ServicesPage from "./pages/Services/ServicesPage";
import GetInTouch from "./pages/GetInTouch";
import Construction from "./pages/Services/Construction";
import Transportation from "./pages/Services/Transportation";
import Telecoms from "./pages/Services/Telecoms";
import Consults from "./pages/Services/Consults";
import SolarGeneration from "./pages/Services/SolarGeneration";
import GauniWater from "./pages/Services/GauniWater";
import ProjectPage from "./pages/Project/ProjectPage";
import NotFound from "./pages/NotFound";

type routes = {
  path: string;
  element: React.ReactNode;
  layout?: boolean;
};

const routes: routes[] = [
  { path: "/", element: <HomePage />, layout: true },
  { path: "/about-us", element: <AboutUs />, layout: true },
  { path: "/portfolio", element: <Portfolio />, layout: true },
  { path: "/services", element: <ServicesPage />, layout: true },
  { path: "/services/construction", element: <Construction />, layout: true },
  {
    path: "/services/transportation",
    element: <Transportation />,
    layout: true,
  },
  { path: "/services/telecoms", element: <Telecoms />, layout: true },
  { path: "/services/consults", element: <Consults />, layout: true },
  {
    path: "/services/solar-generation",
    element: <SolarGeneration />,
    layout: true,
  },
  { path: "/services/gauni-water", element: <GauniWater />, layout: true },
  { path: "/get-in-touch", element: <GetInTouch />, layout: true },
  { path: "/portfolio/:projectId", element: <ProjectPage />, layout: true },
  { path: "*", element: <NotFound />, layout: false },
];

const Router = () => {
  return (
    <MenuProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.layout ? <Layout>{route.element}</Layout> : route.element
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </MenuProvider>
  );
};

export default Router;
