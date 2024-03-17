import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import supabaseClient from "../database/supabase";

function ProfileIcon() {
  const { user, isAuth } = useContext(UserContext);
  const [profileIcon, setProfileIcon] = useState(null);
  const navigate = useNavigate();
  if (!isAuth) {
    navigate("/signin");
  }

  async function getProfileIcon(userId) {
    const { data } = supabaseClient.storage
      .from("ProfileUrl")
      .getPublicUrl(`/${userId}/profile`);
    return data.publicUrl;
  }

  useEffect(() => {
    if (!user) return;
    const { id: userId } = user.data?.user;
    (async () => {
      const icon = await getProfileIcon(userId);
      setProfileIcon(icon + "?" + Date.now());
    })();
  }, [user]);
  return (
    <Link to="/profile" className="rounded-full border-2 border-white bg-white">
      <img
        src={profileIcon || "/assets/profile-icon.svg"}
        className="h-8 w-8 rounded-full"
        alt=""
      />
    </Link>
  );
}

export default ProfileIcon;
