import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaFileImage, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AuthContext } from "../provider/AuthProvider";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  console.log(user);

  const [inputName, setInputName] = useState(user.displayName);
  const [inputPhoto, setInputPhoto] = useState(user.photoURL);

  const handleUpdate = () => {
    updateUserProfile(inputName, inputPhoto);
  };

  return (
    <>
      <Helmet>
        <title>Homey | Update Profile</title>
      </Helmet>
      <div className="container mx-auto  h-[calc(100vh-68px)] flex items-center justify-center loginBg my-5">
        <div className=" backdrop-blur-3xl shadow-2xl p-4 rounded-xl w-[360px] border border-black animate__animated animate__lightSpeedInRight">
          <form onSubmit={handleUpdate} className="grid gap-3 text-black">
            <h1 className="text-center text-2xl font-medium">Update Your Account</h1>
            <div className="">
              <p className="font-medium">Name</p>
              <div className="flex items-center justify-between border border-black rounded-sm py-2 px-4">
                <input
                  className=" w-full bg-transparent border-none outline-none font-medium placeholder:text-black placeholder:font-medium"
                  type="text"
                  name="userName"
                  value={inputName}
                  onChange={(e) => {
                    setInputName(e.target.value);
                  }}
                />
                <FaUser />
              </div>
            </div>
            <div>
              <p className="font-medium">Photo</p>
              <div className="flex items-center justify-between border border-black rounded-sm py-2 px-4">
                <input
                  className="w-full bg-transparent border-none outline-none font-medium placeholder:text-black placeholder:font-medium"
                  type="text"
                  name="photo"
                  value={inputPhoto}
                  onChange={(e) => {
                    setInputPhoto(e.target.value);
                  }}
                />
                <FaFileImage />
              </div>
            </div>
            <div>
              <p className="font-medium">Email</p>
              <div className="flex items-center justify-between border border-black rounded-sm py-2 px-4">
                <input
                  className="w-full bg-transparent border-none outline-none font-medium placeholder:text-black placeholder:font-medium"
                  type="email"
                  name="email"
                  placeholder={user.email}
                  disabled
                />
                <MdEmail className="text-base" />
              </div>
            </div>

            <div>
              <input
                className=" text-black w-full btn text-base rounded-sm bg-white/10 border border-black backdrop-blur-3xl hover:bg-white/20 hover:border-black"
                type="submit"
                value="Update"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
