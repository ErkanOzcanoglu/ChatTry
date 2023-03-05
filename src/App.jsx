import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ChatRoom from "./screens/ChatRoom";

import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      {/* <div className="h-[90vh]"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/chatroom"
          element={
            <PrivateRoute>
              <ChatRoom />
            </PrivateRoute>
          }
        />
      </Routes>
      {/* </div> */}
    </AuthProvider>
  );
}

export default App;
