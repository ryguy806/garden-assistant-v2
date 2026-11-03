import { useAuth } from "wasp/client/auth";
import { Link } from "react-router";
import BackButton from "../components/Navigation/BackButton";
import NavMenu from "../components/Navigation/NavMenu";

const Header = () => {
  const { data: user } = useAuth();
  return (
    <div className='bg-[#596720] h-10 flex items-center justify-center sticky top-0'>
      <div className="absolute left-3 text-white">
        {location.pathname !== "/" ? <BackButton fallbackUrl={"/yard"}/> : null}
      </div>
      <h1 className='text-xl font-bold font-shadowsIntoLight text-white'>BumbleBot Garden</h1>
      <div className='absolute right-3'>
        {user ? (
          <NavMenu />
        ) : (
          <Link to='/login'>
            <p className='text-xl2 underline text-white'>Log in</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
