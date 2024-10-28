import { logout, useAuth } from "wasp/client/auth";
import { Link } from "react-router-dom";

const Header = () => {
  const { data: user } = useAuth();
  return (
    <div className='bg-[#596720] h-12 flex items-center justify-center'>
      <h1 className='text-xl font-bold text-white'>Garden Assistant</h1>
      <div className='absolute right-3'>
        {user ? (
          <button
            onClick={logout}
            className='border-2 border-white text-white p-2'
          >
            (Logout)
          </button>
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
