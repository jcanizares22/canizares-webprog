import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <Navbar />
      <main className="pt-20 pb-16 min-h-[calc(100vh-12rem)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
