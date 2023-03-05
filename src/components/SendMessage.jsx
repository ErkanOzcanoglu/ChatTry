import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { userAuth } from "../context/AuthContext";
import { db } from "../firebase";

const SendMessage = () => {
  const [value, setValue] = React.useState("");
  const { currentUser } = userAuth();
  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      alert("Please enter a message");
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createAt: serverTimestamp(),
        uid,
      });
    } catch (error) {
      console.log(error);
    }
    console.log(value);
    setValue("");
  };
  return (
    <div className="bg-gray-200 fixed bottom-0 right-0 left-0 py-10 md:px-20 px-5 shadow-lg">
      <form onSubmit={handleSendMessage} className="flex px-5 justify-center ">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className="input w-3/4 focus:outline-none bg-gray-100 rounded-r-none text-black"
        />
        <button
          type="submit"
          className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-base font-bold">
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
