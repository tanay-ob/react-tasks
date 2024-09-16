import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-center gap-2 text-[20px] bg-blue-200">
      <NavLink to="/task1">Task1</NavLink>
      <NavLink to="/task2">Task2</NavLink>
      <NavLink to="/task3">Task3</NavLink>
      <NavLink to="/task4">Task4</NavLink>
      <NavLink to="/task5">Task5</NavLink>
      <NavLink to="/task6">Task6</NavLink>
    </nav>
  );
}

export default Navbar;
