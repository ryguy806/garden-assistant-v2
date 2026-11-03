import { Link } from "wasp/client/router";
import bumblebot from "../../assets/images/BumbleBot.png"

const Welcome = () => {

  const welcomeText = ["Welcome", " ", "to", " ", "Bumblebot!"]
    
  return (
    <div className="flex flex-col justify-center mx-auto">
      <div id="title" className="flex flex-col justify-center mx-auto w-1/2">
        <div className="ml-5 mt-24 -mb-[15%] w-full">
          <div className="title-test">
            <h2>
              Welcome
              <span>Welcome</span>
              <span>Welcome</span>
              <span>To BumbleBot!</span>
            </h2>
          </div>
        </div>
        <div id="image" className="mx-auto size-[45%]">
          <img src={bumblebot} alt="bumblebot" />
        </div>
      </div>
      <div id="description" className="flex justify-center mx-auto">
        <p>Organize your garden, get information about your plants, and show mother nature who's boss!</p>
      </div>
      <div className="flex justify-center mx-auto space-x-20 mt-10">
        <Link to="/login" className="flex border-2 mx-auto justify-center p-5 hover:ring-2 ring-[#F6CF3F]">Login</Link>
        <Link to="/signup" className="flex border-2 mx-auto justify-center p-5 hover:ring-2 ring-[#F6CF3F]">Sign up</Link>
      </div>
    </div>
  )
}

export default Welcome;