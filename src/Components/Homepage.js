import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import loadablevisibility from "react-loadable-visibility/loadable-components";
const Profile = loadablevisibility(() => import("./profile"), {
  fallback: <Loading />,
});

function Homepage() {
  let [profile, setprofile] = useState([]);
  let getprofiledata = async () => {
    let uri = "https://jsonplaceholder.typicode.com/comments";
    let data = await fetch(uri);
    let response = await data.json();
    setprofile([...response]);
  };

  useEffect(() => {
    getprofiledata();
  }, []);

  return (
    <>
      {profile.map((profiles, index) => {
        return (
          <section key={index} className="profile-card">
            <Profile profile={profiles} ind={index} />
          </section>
        );
      })}
    </>
  );
}

export default Homepage;
