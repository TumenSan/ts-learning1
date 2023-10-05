import React, { useEffect, useMemo } from "react";
import {useSelector} from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
//import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {
  const {users, error, loading} = useTypedSelector(state => state.user)
  const {fetchUsers} = useActions()
  //const dispatch = useDispatch()

  useEffect(() => {
    //dispatch(fetchUsers())
    fetchUsers()
    console.log(users)
  }, [])

  const cachedUsers = useMemo(() => users, [users]);

  return (
    <div>
      {loading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {cachedUsers.map(user => 
        <div 
          key={user.id}
          className="border border-2 rounded-xl my-3 mx-auto w-[500px]">
            {user.name}</div>
      )}
    </div>
  );
};

export default UserList;