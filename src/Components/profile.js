function Profile(prop) {
  return (
    <>
      <img
        className="img"
        src={"https://avatars.dicebear.com/api/bottts/" + prop.ind + ".svg"}
        alt=""
      />
      <div className="profile">
        <p>Userid : {prop.profile.postId}</p>
        <p>Id : {prop.profile.id}</p>
      </div>
    </>
  );
}

export default Profile;
