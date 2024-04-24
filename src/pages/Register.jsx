import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaEye, FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("userName");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const cPassword = form.get("cPassword");
    console.log(name, photo, email, password, cPassword);

    //Create a new user
    createUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="container mx-auto  h-[calc(100vh-68px)] flex items-center justify-center">
        <div className="bg-white/30 backdrop-blur-3xl shadow-2xl p-4 rounded-xl w-[360px]">
          <form onSubmit={handleRegister} className="flex flex-col gap-3">
            <h1 className="text-center text-2xl font-medium text-black">Please Register</h1>
            <div className="flex items-center justify-between border border-black rounded-full py-2 px-4">
              <input
                className="text-black w-full bg-transparent border-none outline-none font-medium placeholder:text-gray-800 placeholder:font-medium"
                type="text"
                name="userName"
                placeholder="User Name"
                required
              />
              <FaUser className="text-black" />
            </div>
            <div className="flex items-center justify-between border border-black rounded-full py-2 px-4">
              <input
                className="text-black w-full bg-transparent border-none outline-none font-medium placeholder:text-gray-800 placeholder:font-medium"
                type="text"
                name="photo"
                placeholder="Photo URL"
                required
              />
              <FaUser className="text-black" />
            </div>
            <div className="flex items-center justify-between border border-black rounded-full py-2 px-4">
              <input
                className="text-black w-full bg-transparent border-none outline-none font-medium placeholder:text-gray-800 placeholder:font-medium"
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <MdEmail className="text-base text-black" />
            </div>

            <div className="flex items-center justify-between border border-black rounded-full py-2 px-4">
              <input
                className="text-black w-full bg-transparent border-none outline-none font-medium placeholder:text-gray-800 placeholder:font-medium"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <FaEye className="text-black" />
            </div>
            <div className="flex items-center justify-between border border-black rounded-full py-2 px-4">
              <input
                className="text-black w-full bg-transparent border-none outline-none font-medium placeholder:text-gray-800 placeholder:font-medium"
                type="password"
                name="cPassword"
                placeholder="Confirm Password"
                required
              />
              <FaEye className="text-black" />
            </div>

            <div>
              <input
                className=" text-black w-full btn text-base rounded-full bg-white/10 border border-black backdrop-blur-3xl hover:bg-white/20 hover:border-black"
                type="submit"
                value="Register"
              />
            </div>
            <div className="flex justify-between text-black">
              <span>
                <a>Forget Password?</a>
              </span>
              <span>
                <Link to="/login">Login</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
