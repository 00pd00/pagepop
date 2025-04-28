import React from 'react';
import NotFoundPage from './NotFoundPage'; //


function UserProfile({ userId }) {
 
 const { userData, loading, error } = useFetchUserData(`https://api.example.com/users/${userId}`);


return (
  <div>
    {loading ? (
      <div>Loading user data...</div>
    ) : error ? (
      <NotFoundPage />
    ) : (
      <>
        <h1>{userData.name}</h1>
        <p>Email: {userData.email}</p>
      </>
    )}
  </div>
);


}

export default UserProfile;