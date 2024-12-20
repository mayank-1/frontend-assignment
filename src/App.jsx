// COMPONENTS
import Table from "./components/Table";

// LIBS
import { getHomPageTableColumns } from "./libs/tableColumns/homepage";

// DATA
import data from "./data/frontend-assignment.json";

// CSS
import "./App.css";

const App = () => {
  return (
    <div>
      <h2>Pagination table</h2>
      <div className="table_container">
        <Table header={getHomPageTableColumns()} data={data} />
      </div>
    </div>
  );
};

export default App;
