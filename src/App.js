import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Dash from "./pages/Dashboaard/Dash";
import { base_url } from "./api";
import Profile from "./pages/Profile/Profile";
import { useEffect, useState } from "react";
function App() {
  const [item, setItem] = useState([])
  useEffect(() => {
    fetch(base_url)
      .then((resp) => resp.json())
      .then(data => {
        setItem(data)
      })
  }, [])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dash item={item} />} />
        <Route path="/profile" element={<Profile item={item} />} />
      </Routes>
    </div>
  );
}

export default App;
