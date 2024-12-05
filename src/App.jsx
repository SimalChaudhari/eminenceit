import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import { PrivacyPolicy } from "./pages";


function App() {
  const { pathname } = useLocation();

  return (
    <div>
    {/*
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
      */}
      {!(pathname == '/sign-in' || pathname == '/sign-up') && (
        <div >
          <Navbar routes={routes} className=" px-4" />
        </div>
      )
      }
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/privacy-policys" element={<PrivacyPolicy />} />
        {/*
          */}
      </Routes>
    </div>
  );
}

export default App;
