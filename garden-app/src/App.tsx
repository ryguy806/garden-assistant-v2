import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { Outlet } from "react-router";
import "./Main.css";
import { Breadcrumbs } from "./components/Breadcrumbs/Breadcrumbs";

const App = ({ children }: any) => {
  return (
    <div className='min-h-screen bg-[#F2F5F3]'>
      <div className='sticky top-0 w-full flex-flex-col z-10'>
        <Header />
        <Breadcrumbs/>
      </div>
      <div className='flex flex-col object-fill px-10'>
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

export default App;
