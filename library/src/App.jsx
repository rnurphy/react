/** @jsxImportSource @emotion/react */

import { Route, Routes } from "react-router-dom";
import RootContainer from "./components/RootContainer/RootContainer";
import RootHeader from "./components/RootHeader/RootHeader";
import RootLayout from "./components/RootLayout/RootLayout";
import RoodSideMenuLeft from "./components/RootSideMenuLeft/RoodSideMenuLeft";
import AuthPage from "./pages/AuthPage/AuthPage";
import HomePage from "./pages/HomePage/HomePage";
import AuthRoute from "./Routes/AuthRoute";

function App() {
  return ( 
    <RootLayout>
      <RootContainer>

        <AuthRoute />


      </RootContainer>
    </RootLayout>
  )
}

export default App;
