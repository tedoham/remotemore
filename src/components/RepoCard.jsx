import React, { useState } from "react";
import Modal from "./Modal";

function RepoCard({ username, repoData }) {
  const [open, setOpen] = useState(false);
  const [readme, setReadme] = useState("");

  const getReadMe = async (index) => {
    const getReadme = await fetch(
      `https://raw.githubusercontent.com/${username}/${repoData[index].name}/${repoData[index].default_branch}/README.md`
    );
    setReadme(getReadme);
    setOpen(true);
  };

  return (
    <>
      <div className="container">
        <div className="card_inner">
          <h3 className="card_title">Repositories</h3>
          {repoData.length !== 0 ? (
            repoData.map((repo, index) => (
              <div className="repo_list" key={repo?.id}>
                <button type="button" onClick={() => getReadMe(index)}>
                  {repo?.name}
                </button>
              </div>
            ))
          ) : (
            <h3 className="card_title">No Repo</h3>
          )}
        </div>
      </div>
      {open && <Modal readme={readme} setOpen={setOpen} />}
    </>
  );
}

export default RepoCard;
