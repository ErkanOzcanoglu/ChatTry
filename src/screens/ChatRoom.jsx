import React from "react";
import Navbar from "../components/Navbar";
import ChatBox from "../components/ChatBox";
import SendMessage from "../components/SendMessage";

const ChatRoom = () => {
  return (
    <div className="flex w-full h-full flex-col">
      <Navbar />
      <div className="">
        <ChatBox />
        <SendMessage />
      </div>
    </div>
  );
};

export default ChatRoom;
