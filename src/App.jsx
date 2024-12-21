import { useState } from "react";

// COMPONENTS
import Table from "./components/Table";
import Pagination from "./components/Pagination";

// LIBS
import { getHomPageTableColumns } from "./libs/tableColumns/homepage";

//HOOKS
import useFetchData from "./hooks/useFetchData";

// CSS
import "./App.css";

const App = () => {
  const [page, setPage] = useState(1);
  const recordsPerPage = 5;

  const { data = [], loading } = useFetchData(
    "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
  );

  const newData = data?.slice(
    page * recordsPerPage - recordsPerPage,
    page * recordsPerPage
  ); // Here the first parameter will be the start index and the second will be the end index
  return (
    <div>
      <h2>Pagination table</h2>
      <div className="table_container">
        <Table
          header={getHomPageTableColumns()}
          data={newData}
          loading={loading}
        />
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(data?.length / recordsPerPage)}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default App;
