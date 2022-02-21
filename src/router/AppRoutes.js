import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
