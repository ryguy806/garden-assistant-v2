import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";

const Layout = ({ children }: any) => {
  return (
    <div className='min-h-screen'>
      <div className='sticky top-0 w-full flex-flex-col z-10'>
        <Header />
        <Breadcrumbs />
      </div>
      <div className='flex flex-col object-fill'>
        <div className='flex h-auto'>
          <Outlet />
        </div>
      </div>
      <div className='w-full h-full sticky z-10 bottom-0'>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
