import React from "react";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import AllTasks from "./pages/AllTasks";
import { AppContext, useUserData } from "./context/appContext";
import CompletedTasks from "./pages/CompletedTasks";
import UncompletedTasks from "./pages/UncompletedTasks";
import ImportantTasks from "./pages/ImportantTasks";
import CreateTask from "./components/CreateTask";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoutes from "./utils/PrivateRoutes";
import useFetchTasks from "./utils/fetchTasks";
const App = () => {
  return (
    <AppContext>
      <div className="">
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<AllTasks />} />
              <Route path="completed" element={<CompletedTasks />} />
              <Route path="uncompleted" element={<UncompletedTasks />} />
              <Route path="important" element={<ImportantTasks />} />
              <Route path="create" element={<CreateTask />} />
              <Route path="edit/:id" element={<CreateTask />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </AppContext>
  );
};

export default App;
