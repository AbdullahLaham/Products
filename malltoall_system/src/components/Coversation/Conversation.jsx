import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import './conversation.css'
// import { getUser } from "../../api/UserRequests";
const Conversation = ({ data, currentUser, online, isSelected }) => {
  console.log(isSelected, 'isSelected')
  const [userData, setUserData] = useState(null)
  const dispatch = useDispatch()
  const fetchMessagesData = () => {
    
  }
  // useEffect(()=> {

  //   const userId = data.members.find((id)=>id!==currentUser)
  //   const getUserData = async ()=> {
  //     try
  //     {
  //        const {data} =await getUser(userId);
  //        setUserData(data);
  //        dispatch({type:"SAVE_USER", data:data})
  //     }
  //     catch(error)
  //     {
  //       console.log(error)
  //     }
  //   }

  //   getUserData();
  // }, [])
  return (
    <>
      <div className={`follower conversation ${isSelected ? 'isSelected' : ''} `}>
          {online && <div className="online-dot"></div>}

          <img
            src={data?.profile_photo_url ? data?.profile_photo_url : data?.participants[0]['profile_photo_url']}
            alt="Profile"
            className="followerImage"
            style={{ width: "50px", height: "50px" }}
          />

          <div className="chat-name" style={{fontSize: '0.8rem'}}>
            <span>{data?.name ? data?.name : data?.participants[0]['name']}</span>
            <p className="last-message">{data?.last_message?.body}</p>
            {/* <span style={{color: online?"#51e200":""}}>{online? "Online" : "Offline"}</span> */}
            
          </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  );
};

export default Conversation;
