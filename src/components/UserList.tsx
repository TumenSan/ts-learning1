import React, { useEffect } from "react";
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

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {users.map(user => 
        <div>{user.name}</div>
      )}
    </div>
  );
};

export default UserList;