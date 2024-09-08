import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import { MenuProvider } from "./context/MenuContext";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import ServicesPage from "./pages/ServicesPage";
import GetInTouch from "./pages/GetInTouch";
// import Construction from "./pages/Construction";
// import Transportation from "./pages/Transportation";
// import Telecoms from "./pages/Telecoms";
// import Consults from "./pages/Consults";
// import SolarGeneration from "./pages/SolarGeneration";
// import GauniWater from "./pages/GauniWater";

type routes = {
  path: string;
  element: React.ReactNode;
};

const routes: routes[] = [
  { path: "/", element: <Home /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/services", element: <ServicesPage /> },
  // { path: "/services/construction", element: <Construction /> },
  // { path: "/services/transportation", element: <Transportation /> },
  // { path: "/services/telecoms", element: <Telecoms /> },
  // { path: "/services/consults", element: <Consults /> },
  // { path: "/services/solar-generation", element: <SolarGeneration /> },
  // { path: "/services/gauni-water", element: <GauniWater /> },
  { path: "/get-in-touch", element: <GetInTouch /> },
];

const Router = () => {
  return (
    <MenuProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map(
              (route, index): JSX.Element => (
                <Route key={index} path={route.path} element={route.element} />
              ),
            )}
          </Routes>
        </Layout>
      </BrowserRouter>
    </MenuProvider>
  );
};

export default Router;
