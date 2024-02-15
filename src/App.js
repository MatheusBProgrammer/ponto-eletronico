import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "./context/userContext";
import Navbar from "./layout/Navbar";
function App() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.username) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <>
      <Navbar />
      <Outlet />
      jesus
    </>
  );
}

export default App;
