import React from 'react';
import { useSelector } from 'react-redux';

const UserView = () => {
  const {users} = useSelector(state => state.users)
  return (
    <div>
      <h2>List of users</h2>
    </div>
  );
};

export default UserView;