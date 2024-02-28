import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = false;

  if(session){
    redirect("/")
  }

  return (
    <div className="profile">
      <h1>Welcome to the ProfilePage</h1>
      <p>
        Welcome, <b>Hazim</b>
      </p>
      <span>You are a <b>Premium</b> user</span>
      <form>
        <button>Buy Premium</button>
      </form>

      <form>
        <input type="text" name="username" required placeholder={"Hazim"} />
        <button>Update</button>
      </form>
    </div>
  );
};

export default ProfilePage;