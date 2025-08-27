import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { PublicLayout } from "@/layouts/PublicLayout";

import HomePage from "@/routes/Home";

import AuthenticationLayout from "@/layouts/AuthenticationLayout";
import SignInPage from "./routes/SignInPage";
import SignUpPage from "./routes/SignUpPage";



//import ProtectRoutes from "@/layouts/protected-routes";
//import { MainLayout } from "@/layouts/main-layout";
// import { R } from "node_modules/@clerk/clerk-react/dist/useAuth-BUGRUp4q";
//import { Generate } from "./components/generate";
//import { Dashboard } from "./routes/dashboard";
//import { CreateEditPage } from "./routes/create-edit-page";

const App = () => {
  return (
    <Router>
      <Routes>

        {/* public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* authentication layout */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>
        

        {/* protected routes */}
        {/* <Route
          element={
            <ProtectRoutes>
              <MainLayout />
            </ProtectRoutes>
          }
        > */}
          {/* add all the protect routes */}
          {/* <Route element={<Generate/>} path="/generate">
            <Route index element={<Dashboard/>}/>
            <Route path=":interviewId" element={<CreateEditPage/>}/>
          </Route>

          

          
          
        </Route> */}
      </Routes>
    </Router>
  );
};

export default App;
