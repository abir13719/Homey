import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.error(error));
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white/30 backdrop-blur-3xl shadow-2xl p-4 rounded-xl w-[360px]">
          <form onSubmit={handleLogin} className="flex flex-col gap-3">
            <h1 className="text-center text-2xl font-medium text-black">Please Login</h1>

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

            <div>
              <input
                className="text-black w-full btn text-base rounded-full bg-white/10 border border-black backdrop-blur-3xl hover:bg-white/20 hover:border-black"
                type="submit"
                value="Login"
              />
            </div>
            <div className="flex justify-between text-black">
              <span>
                <a>Forget Password?</a>
              </span>
              <span>
                <Link to="/register">Register</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
