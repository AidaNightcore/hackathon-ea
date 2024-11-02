import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Route } from "react-router-dom";
import App from "../App";

import SignInPage from "../pages/sign-in-page/SignInPage";
import SignUpPage from "../pages/sign-up-page/SignUpPage";
import WelcomePage from "../pages/welcome-page/WelcomePage";
import Dashboard from "../pages/welcome-page/Dashboard";
import RegisterParking from "../pages/parking-rent/RegisterParking";
import ShareParkingMenu from "../pages/parking-rent/ShareParkingMenu";
import SelectParking from "../pages/parking-book/SelectParking";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<App />}>
        {/* rute user neautentificat */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />

        {/* rute user */}
        <Route>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="ride-sharing" element={<WelcomePage />} />
          <Route path="ride-searching" element={<WelcomePage />} />
          <Route path="register-parking" element={<RegisterParking />} />
          <Route path="parking-book" element={<SelectParking />} />
          <Route path="parking-rent" element={<ShareParkingMenu />} />
        </Route>
      </Route>
    </>
  )
);
