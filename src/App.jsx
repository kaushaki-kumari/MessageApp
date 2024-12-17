import { HashRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import MessageUs from "./Pages/MessageUs";
import MessageDetail from './Pages/MessageDetail';
import "./App.css";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/Cnt" element={<ContactUs />} />
          <Route path="/Msg" element={<MessageUs />} />
          <Route path="/Msg/:id" element={<MessageDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
