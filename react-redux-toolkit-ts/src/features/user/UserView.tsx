import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { fetchUsers } from './userSlice';
import { useEffect } from 'react';

const UserView = () => {
  const {users, isLoading, error} = useAppSelector(state => state.users)
  const dispatch = useAppDispatch()

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