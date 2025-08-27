
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
//import AuthHanlder from "@/handlers/AuthHandler";
import Footer from "@/components/Footer";


export const PublicLayout = () => {
  return (
    <div className="w-full">
      {/* handler to store the user data */}

      {/* <AuthHanlder/> */}

      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};