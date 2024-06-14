import React from "react";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import AllTasks from "./pages/AllTasks";
import { AppContext } from "./context/appContext";
import CompletedTasks from "./pages/CompletedTasks";
import UncompletedTasks from "./pages/UncompletedTasks";
import ImportantTasks from "./pages/ImportantTasks";
import CreateTask from "./components/CreateTask";

const App = () => {
  return (
    <AppContext>
      <div className="">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AllTasks />} />
            <Route path="completed" element={<CompletedTasks />} />
            <Route path="uncompleted" element={<UncompletedTasks />} />
            <Route path="important" element={<ImportantTasks />} />
            <Route path="create" element={<CreateTask />} />
          </Route>
        </Routes>
      </div>
    </AppContext>
  );
};

export default App;
