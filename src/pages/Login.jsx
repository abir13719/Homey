import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signInUser, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [problem, setProblem] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    setProblem("");

    signInUser(email, password)
      .then(
        (result) => console.log(result.user),

        navigate(location.state ? location.state : "/")
      )
      .catch(() => setProblem("User and password do not match"));
  };

  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then((result) => console.log(result.user))
      .catch((error) => console.error(error));
  };

  const handleGithubLogIn = () => {
    signInWithGitHub()
      .then((result) => console.log(result.user))
      .catch((error) => console.error(error));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Helmet>
        <title>Homey | Login</title>
      </Helmet>
      <div className="container mx-auto min-h-screen flex items-center justify-center loginBg my-5">
        <div className="backdrop-blur-3xl shadow-2xl p-4 rounded-xl w-[360px] border-black border animate__animated animate__lightSpeedInLeft">
          <form onSubmit={handleLogin} className="flex flex-col gap-3">
            <h1 className="text-center text-2xl font-medium text-black">Please Login</h1>

            <div className="flex items-center justify-between border border-black rounded-full py-2 px-4">
              <input
                className="text-black w-full bg-transparent border-none outline-none font-medium placeholder:text-black placeholder:font-medium"
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <MdEmail className="text-base text-black" />
            </div>

            <div className="flex items-center justify-between border border-black rounded-full py-2 px-4">
              <input
                className="text-black w-full bg-transparent border-none outline-none font-medium placeholder:text-black placeholder:font-medium"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
              />
              <span onClick={handleShowPassword}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
            </div>

            {problem && <p className="text-red-500 text-sm">{problem}</p>}

            <div>
              <input
                className="text-black w-full btn text-base rounded-full bg-white/10 border border-black backdrop-blur-3xl hover:bg-white/20 hover:border-black"
                type="submit"
                value="Login"
              />
            </div>
            <div className="flex gap-2 items-center justify-center text-black border-b border-gray-800 py-2">
              <span>Log in with</span>
              <span onClick={handleGoogleLogIn} className="cursor-pointer">
                <div className="flex items-center gap-1 bg-white/10 border border-black backdrop-blur-3xl hover:bg-white/20 hover:border-black p-1 rounded-md">
                  <FaGoogle />
                  Google
                </div>
              </span>
              <span onClick={handleGithubLogIn} className="cursor-pointer">
                <div className="flex items-center gap-1 bg-white/10 border border-black backdrop-blur-3xl hover:bg-white/20 hover:border-black p-1 rounded-md">
                  <FaGithub />
                  Github
                </div>
              </span>
            </div>
            <div className=" text-black">
              Don&apos;t have an account? Please
              <span>
                <Link to="/register" className="font-medium">
                  {" "}
                  Register
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
