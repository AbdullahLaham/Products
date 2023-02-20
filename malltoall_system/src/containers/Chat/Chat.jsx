import React, { useRef, useState } from "react";
import * as api from '../../api'
import ChatBox from "../../components/ChatBox/ChatBox";
import Conversation from "../../components/Coversation/Conversation";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import NavIcons from "../../components/NavIcons/NavIcons";
import "./Chat.css";
import { useEffect } from "react";
// import { userChats } from "../../api/ChatRequests";
import { useDispatch, useSelector } from "react-redux";
import Pusher from "pusher-js";
import axios from "axios";
// import { io } from "socket.io-client";

const Chat = () => {
  const dispatch = useDispatch();
  const socket = useRef();

  // pusher 
  const pusher = new Pusher('427f576d163484fae8d0', {
    cluster: 'ap2',
  });
  var channel = pusher.subscribe('my-channel');

  channel.bind('my-event', function(data) {
    alert(JSON.stringify(data));
  });
  // const { authData } = useSelector((state) => state.userReducer);
  
  
  const [chats, setChats] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  const [selected, setSelected] = useState('chats');
  const [chatSelected, setChatSelected] = useState('');
  // Get the chat in chat section

  useEffect(() => {

    const getChats = async () => {
      try {
        const { data } = await api.fetchChatUsers();
        console.log('chats', data);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };

    getChats();

  }, []);

  const fetchMessagesData = async (chatId) => {
    try {
      setChatMessages([]);
      const { data } = await api.fetchChatMessages(chatId);
      console.log('chats', data);
      setChatMessages(data?.messages?.data);
    } catch (error) {
      console.log(error);
    }
  }


  // Connect to Socket.io

  // useEffect(() => {
  //   socket.current = io("ws://localhost:8800");
  //   socket.current.emit("new-user-add", user._id);
  //   socket.current.on("get-users", (users) => {
  //     setOnlineUsers(users);
  //   });
  // }, [user]);

  // Send Message to socket server
  
  useEffect(() => {
    if (sendMessage!==null) {
      socket.current.emit("send-message", sendMessage);}
  }, [sendMessage]);






  // const [chats, setChats] = useState([]);
  const [messageToSend, setMessageToSend] = useState("");
  const [onlineUsersCount, setOnlineUsersCount] = useState(0);
  const [usersRemoved, setUsersRemoved] = useState([]);

  useEffect( () => {
    const channel = pusher.subscribe("3"); 
    // when a new member successfully subscribes to the channel
    channel.bind("pusher:subscription_succeeded", (members) => {
      // total subscribed
      console.log('success');
      setOnlineUsersCount(members.count);
    });

    // when a new member joins the chat
    channel.bind("pusher:member_added", (member) => {
      // console.log("count",channel.members.count)
      setOnlineUsersCount(channel.members.count);
      setOnlineUsers((prevState) => [
        ...prevState,
        { username: member.info.username, userLocation: member.info.userLocation },
      ]);
    });

    // when a member leaves the chat
    channel.bind("pusher:member_removed", (member) => {
      setOnlineUsersCount(channel.members.count);
      setUsersRemoved((prevState) => [...prevState, member.info.username]);
    });

    // updates chats
    channel.bind("chat-update", function (data) {
      const {username, message} = data;
      // setChats((prevState) => [
      //   ...prevState,
      //   { username, message },
      // ]);
    });
    
    return () => {
      pusher.unsubscribe("presence-channel");
    };
  }, []);

  const handleSignOut = () => {
    pusher.unsubscribe("presence-channel");
    // router.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("/api/pusher/chat-update", {
      message: messageToSend,
    });
  };






























  // Get the message from socket server

  // useEffect(() => {
  //   socket.current.on("recieve-message", (data) => {
  //     console.log(data)
  //     setReceivedMessage(data);
  //   }

  //   );
  // }, []);


  const checkOnlineStatus = (chat) => {
    // const chatMember = chat.members.find((member) => member !== user._id);
    // const online = onlineUsers.find((user) => user.userId === chatMember);
    // return online ? true : false;
  };

  return (
    <div className="Chat">
      {/* Left Side */}
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container h-[100vh] max-h-[100vh] ">
          <div className="chats-header">
            <div className="chat-types">
              <p onClick={() => setSelected('chats')} className={`${selected == 'chats' ? 'button' : ''}`}>Chats</p>
              <p onClick={() => setSelected('stores')} className={`${selected == 'stores' ? 'button' : ''}`}>Markets</p>
              <p onClick={() => setSelected('support')} className={`${selected == 'support' ? 'button' : ''}`}>Technical Support</p>
            </div>
          </div>

          <div className="Chat-list">
            {chats[selected]?.map((chat) => {

              console.log('current chat', chat);
              return (<div className="w-[100%] " 
                onClick={() => {
                  setCurrentChat(chat);
                }}
              >
                <div onClick={() => {fetchMessagesData(chat?.id); setChatSelected(chat?.name ? chat?.name : chat?.participants[0]['name']); }} >
                  <Conversation
                    data={chat}
                    currentUser={''}
                    online={checkOnlineStatus(chat)}
                    isSelected={(chatSelected == chat?.name) || (chatSelected == chat?.participants && chat?.participants[0]['name'])}
                  />
                </div>
              </div>)
            })}
          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="Right-side-chat">
        {/* <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          <NavIcons />
        </div> */}
          <ChatBox
          chat={chatMessages}
          // chat={currentChat}
          chatDetails={currentChat}
          currentUser={''}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        />
        
      </div>
    </div>
  );
};

export default Chat;