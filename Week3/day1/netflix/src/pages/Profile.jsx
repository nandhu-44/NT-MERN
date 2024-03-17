import React, { useContext, useEffect, useState, useRef } from "react";
import supabaseClient from "../database/supabase";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

function Profile() {
  const { user, isAuth } = useContext(UserContext);
  const navigate = useNavigate();
  if (!isAuth) {
    navigate("/signin");
  }
  const [userData, setUserData] = useState({});
  const [profileIcon, setProfileIcon] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  const userNameRef = useRef();
  const userPhoneRef = useRef();
  const userBioRef = useRef();
  const userIconRef = useRef();

  useEffect(() => {
    if (!user) return;
    const { id: userId } = user.data?.user;
    (async () => {
      const { data, error } = await supabaseClient
        .from("users_table")
        .select()
        .eq("id", userId);
      if (error) {
        console.log(error);
      } else {
        setUserData(data[0]);
      }
      const icon = await getProfileIcon(userId);
      setProfileIcon(icon + "?" + Date.now());
      setLoading(false);
    })();
  }, [user]);

  async function handleUpdate() {
    setButtonLoading(true);
    const name = userNameRef.current.value;
    const phone = userPhoneRef.current.value;
    const bio = userBioRef.current.value;
    const { id: userId } = user.data?.user;

    //eslint-disable-next-line
    const { data, error } = await supabaseClient
      .from("users_table")
      .update({ fullname: name, phone, bio })
      .eq("id", userId);
    if (error) {
      setButtonLoading(false);
      console.log(error);
    } else {
      setUserData({ ...userData, fullname: name, phone, bio });
      setButtonLoading(false);
    }
  }

  const handleIconChange = async (icon) => {
    if (!icon) return;
    if (!validateIcon(icon)) return;
    const { id: userId } = user.data?.user;
    if (icon) {
      const url = URL.createObjectURL(icon);
      setProfileIcon(url);
      saveProfileIcon(userId, icon);
    }
  };

  async function getProfileIcon(userId) {
    const { data } = supabaseClient.storage
      .from("ProfileUrl")
      .getPublicUrl(`/${userId}/profile`);
    return data.publicUrl;
  }

  async function saveProfileIcon(userId, image) {
    const { error } = await supabaseClient.storage
      .from("ProfileUrl")
      .upload(`${userId}/profile`, image, {
        cacheControl: "3600",
        upsert: true,
      });
    if (error) {
      console.log(error);
    }
  }

  function validateIcon(icon) {
    if (icon?.size * 12 > 1024 * 1024) {
      alert("File size should be less than 12MB");
      return false;
    }
    if (icon?.type?.startsWith("image/*")) {
      alert("File type should be JPEG or PNG");
      return false;
    }
    return true;
  }

  return (
    <div className="main-image-area flex flex-col items-center justify-center rounded-lg">
      {loading ? (
        <Loader />
      ) : (
        <div className="my-32 flex flex-col items-center justify-center rounded-lg bg-gray-700  px-44">
          <div className="relative mt-16 flex flex-col items-center pb-5">
            <div className=" group">
              <input
                type="file"
                name="icon"
                id="icon"
                accept="image/*"
                className="hidden"
                ref={userIconRef}
                onChange={(e) => {
                  handleIconChange(e.target.files[0]);
                }}
              />
              <div className="rounded-full border-2 border-white bg-white">
                <label htmlFor="icon" className="relative overflow-hidden">
                  <img
                    src={profileIcon || "/assets/profile-icon.svg"}
                    alt=""
                    className="h-28 w-28 rounded-full text-white group-hover:text-black group-hover:opacity-30"
                  />
                  {/* pencil icon */}
                  <div className="absolute left-[50%] top-[50%] hidden h-28  w-28 translate-x-[-50%] translate-y-[-50%] rounded-full bg-black bg-opacity-50 group-hover:block">
                    <img
                      src="/assets/pencil.svg"
                      className=" absolute  left-[50%] top-[50%] hidden h-20 w-20 translate-x-[-50%] translate-y-[-50%] rounded-full p-4  hover:block group-hover:block"
                      alt=""
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-1 pb-20">
            <label htmlFor="" className="text-xs font-medium text-white">
              Name
            </label>
            <input
              className=" focus:shadow-outline rounded-md bg-slate-800 px-2 py-1 text-white focus:outline-none"
              ref={userNameRef}
              placeholder="Name"
              defaultValue={userData?.fullname}
            ></input>
            <label htmlFor="" className="text-xs font-medium text-white">
              Phone Number
            </label>
            <input
              type="number"
              className="focus:shadow-outline [&::-webkit-outer-spin-button]:appearance-none- w-64 rounded-md bg-slate-800 px-2 py-1 text-white [appearance:textfield] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="Phone Number"
              defaultValue={userData?.phone}
              ref={userPhoneRef}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
            />
            <label htmlFor="" className="text-xs font-medium text-white">
              Bio
            </label>
            <textarea
              name="bio"
              id="bio"
              ref={userBioRef}
              className="scroll-hidden focus:shadow-outline max-h-40 resize-none  rounded-md bg-slate-800 px-2 py-1 text-white focus:border-0 focus:outline-none focus:ring-0"
              cols="30"
              rows="10"
              defaultValue={userData?.bio}
              placeholder="Bio"
            ></textarea>
            <button
              className={` mt-4 flex w-full items-center justify-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none  focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ${buttonLoading ? "cursor-not-allowed opacity-50" : ""}`}
              onClick={() => handleUpdate()}
            >
              {buttonLoading ? (
                <>
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="mr-2 animate-spin "
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                  </svg>
                  <span>Updating ...</span>
                </>
              ) : (
                "Update"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
