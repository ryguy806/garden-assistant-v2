import waspLogo from "../waspLogo.png";

const Footer = () => {
  return (
    <div className='flex flex-row justify-center items-center bg-[#596720]'>
      <div>
        <p className='text-white'>
          Made using Wasp:{" "}
          <a className='underline' href='https://wasp-lang.dev'>
            wasp-lang.dev
          </a>
        </p>
      </div>
      <div className='ml-3 mt-1'>
        <img src={waspLogo} alt='wasp logo' height={20} width={20} />
      </div>
    </div>
  );
};

export default Footer;
