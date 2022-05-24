import React from "react";

const UserCard = ({ userData }) => {
  return (
    <div className="container">
      <div className="card_item">
        <div className="card_inner">
          {Object.entries(userData).length !== 0 ? (
            <>
              <img src={userData?.avatar_url} alt="" />
              <div className="userName">{userData?.login}</div>
              <div className="userUrl">{userData?.url}</div>
              <div className="detail-box">
                {userData.public_repos !== "" && (
                  <div className="gitDetail">
                    <span>Repos</span>
                    {userData?.public_repos}
                  </div>
                )}
                {userData.followers !== "" && (
                  <div className="gitDetail">
                    <span>Following</span>
                    {userData?.following}
                  </div>
                )}
                {userData.followers !== "" && (
                  <div className="gitDetail">
                    <span>Followers</span>
                    {userData?.followers}
                  </div>
                )}
              </div>
            </>
          ) : (
            <h3 className="card_title">No Data</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
