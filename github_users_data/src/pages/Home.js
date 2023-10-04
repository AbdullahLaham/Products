import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../store/userDataReducer/dataSlice';

const Home = () => {

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  const {userData} = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getUserData(currentUser?.gitHubUsername));
  }, [currentUser]);
  // console.log(currentUser?.gitHubUsername, 'uu')
  return (
    <div className='flex items-center gap-10'>
      <img className='w-[10rem] h-[10rem] rounded-full ' src={userData?.avatar_url} />
      <p>{userData?.login}</p>
      <p>{userData?.company}</p>
      <p>{userData?.bio}</p>
      <p>{userData?.public_repos}</p>
      <p>{userData?.created_at}</p>

    </div>
  )
}

export default Home
