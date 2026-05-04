import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <Navbar />
      <main className="flex min-h-[calc(100vh-6rem)] items-start justify-center px-4 pt-32 pb-12 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
