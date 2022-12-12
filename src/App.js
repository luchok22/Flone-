import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Dash from "./pages/Dashboaard/Dash";
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
    <Route  path="/" element={<Dash/>}/>
    </Routes>
    </div>
  );
}

export default App;
