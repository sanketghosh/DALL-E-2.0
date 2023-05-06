import { Header } from "../components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="text-gray-600">
      <Header />
      <main className="sm:p-8 px-4 py-8 w-full bg-zinc-200 min-h-[calc(100vh-73px)]">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
