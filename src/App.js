import "./App.css";
import BasicSorting from "./BasicSorting";
import BasicTable from "./BasicTable";
import ExpandableTable from "./ExpandedRows";
import SelectableRows from "./SelectableRows";
import TablePagination from "./TablePagination";

function App() {
    return (
        <div className='App'>
            <BasicTable />
            <BasicSorting />
            <SelectableRows />
            <ExpandableTable />
            <TablePagination />
        </div>
    );
}

export default App;
