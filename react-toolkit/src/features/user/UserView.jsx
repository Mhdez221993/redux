import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from './userSlice';

const UserView = () => {
  const {users, isLoading, error} = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      <h2>List of users</h2>
      {isLoading && <div>Loading...</div>}

      <ul>
        {
          users.map(user => <li key={user.id}>{user.name}</li>)
        }
      </ul>

      {error && <div>{error}</div>}
    </div>
  );
};

export default UserView;