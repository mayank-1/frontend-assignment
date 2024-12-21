import { useState, useEffect } from "react";

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
  const {
    data = [],
    loading,
    error,
  } = useFetchData("src/data/frontend-assignment.json");

  const newData = data?.slice(page * 5 - 5, page * 5);
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
          totalPages={Math.ceil(data?.length / 5)}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default App;
