import { useState } from "react";
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import RepoCard from "./components/RepoCard";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});
  const [repoData, setRepoData] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();

    const repoData = await fetch(profileJson.repos_url);
    const repoJson = await repoData.json();

    if (profileJson) {
      setUserData(profileJson);
      setRepoData(repoJson);
    }
  };

  return (
    <div className="homepage">
      <Search
        username={username}
        setUsername={setUsername}
        submitHandler={submitHandler}
      />
      <div className="card_container">
        <UserCard userData={userData} />
        <RepoCard username={username} repoData={repoData} />
      </div>
    </div>
  );
}

export default App;
