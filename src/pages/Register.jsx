import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaEye, FaEyeSlash, FaUser, FaFileImage } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [problem, setProblem] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("userName");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const cPassword = form.get("cPassword");
    console.log(name, photo, email, password, cPassword);

    setProblem("");
    setSuccess("");

    if (password.length < 6) {
      setProblem("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setProblem("Password must have a uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setProblem("Password must have a lowercase letter");
      return;
    } else if (password !== cPassword) {
      setProblem("Passwords do not match");
      return;
    }

    //Create a new user
    createUser(email, password)
      .then(
        (result) =>
          updateProfile(result.user, {
            displayName: name,
            photoURL: photo,
          }),
        setSuccess("User created successfully")
      )
      .catch((error) => setProblem(error.message.split("Error")[1].replace(/[()-.]/g, " ")));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowCPassword = () => {
    setShowCPassword(!showCPassword);
  };

  return (
    <>
      <Helmet>
        <title>Homey | Register</title>
      </Helmet>
      <div className="container mx-auto  h-[calc(100vh-68px)] flex items-center justify-center">
        <div className="bg-white/30 backdrop-blur-3xl shadow-2xl p-4 rounded-xl w-[360px]">
          <form onSubmit={handleRegister} className="flex flex-col gap-3">
            <h1 className="text-center text-2xl font-medium text-black">Register Your Account</h1>
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
              />
              <FaFileImage className="text-black" />
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
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
              />
              <span onClick={handleShowPassword}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
            </div>
            <div className="flex items-center justify-between border border-black rounded-full py-2 px-4">
              <input
                className="text-black w-full bg-transparent border-none outline-none font-medium placeholder:text-gray-800 placeholder:font-medium"
                type={showCPassword ? "text" : "password"}
                name="cPassword"
                placeholder="Confirm Password"
                required
              />
              <span onClick={handleShowCPassword}>
                {showCPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {problem && <p className="text-red-500 text-sm">{problem}</p>}
            {success && <p className="text-black text-center">{success}</p>}
            <div>
              <input
                className=" text-black w-full btn text-base rounded-full bg-white/10 border border-black backdrop-blur-3xl hover:bg-white/20 hover:border-black"
                type="submit"
                value="Register"
              />
            </div>
            <div className="flex text-black">
              <span>
                Already have an account? Please
                <Link to="/login" className="font-medium">
                  {" "}
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
