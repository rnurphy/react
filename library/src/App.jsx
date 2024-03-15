/** @jsxImportSource @emotion/react */

import { Route, Routes } from "react-router-dom";
import RootContainer from "./components/RootContainer/RootContainer";
import RootHeader from "./components/RootHeader/RootHeader";
import RootLayout from "./components/RootLayout/RootLayout";
import RoodSideMenuLeft from "./components/RootSideMenuLeft/RoodSideMenuLeft";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
  return ( 
    <RootLayout>
      <RootContainer>
        <RoodSideMenuLeft />
        <RootHeader />
        <Routes>
          <Route path="/auth/*" element={ <AuthPage /> } />
        </Routes>


      </RootContainer>
    </RootLayout>
  )
}

export default App;
