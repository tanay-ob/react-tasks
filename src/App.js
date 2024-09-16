import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ToDoApp from "./tasks/task1/ToDoApp";
import ShoppingCart from "./tasks/task2/ShoppingCart";
import TemperatureConverter from "./tasks/task3/TemperatureConverter";
import RatingComponent from "./tasks/task4/RatingComponent";
import WeatherApp from "./tasks/task5/WeatherApp";
import UserProfiles from "./tasks/task6/UserProfiles";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="task1" element={<ToDoApp />} />
        <Route path="task2" element={<ShoppingCart />} />
        <Route path="task3" element={<TemperatureConverter />} />
        <Route path="task4" element={<RatingComponent />} />
        <Route path="task5" element={<WeatherApp />} />
        <Route path="task6" element={<UserProfiles />} />
      </Routes>
    </>
  );
}
