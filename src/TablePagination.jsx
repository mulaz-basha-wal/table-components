import DataTable from "react-data-table-component";

const columns = [
    {
        name: "Title",
        selector: (row) => row.title,
    },
    {
        name: "Year",
        selector: (row) => row.year,
    },
];

const data = [
    {
        id: 1,
        title: "Beetlejuice",
        year: "1988",
    },
    {
        id: 2,
        title: "Ghostbusters",
        year: "1984",
    },
    {
        id: 3,
        title: "C",
        year: "1988",
    },
    {
        id: 4,
        title: "D",
        year: "1984",
    },
    {
        id: 5,
        title: "E",
        year: "1988",
    },
    {
        id: 6,
        title: "F",
        year: "1984",
    },
    {
        id: 7,
        title: "G",
        year: "1988",
    },
    {
        id: 8,
        title: "H",
        year: "1984",
    },
    {
        id: 9,
        title: "I",
        year: "1988",
    },
    {
        id: 10,
        title: "J",
        year: "1984",
    },
    {
        id: 11,
        title: "K",
        year: "1988",
    },
    {
        id: 12,
        title: "L",
        year: "1984",
    },
];

export default function TablePagination() {
    const paginationComponentOptions = {
        rowsPerPageText: "Rows per page",
        rangeSeparatorText: "Out of",
        selectAllRowsItem: true,
        selectAllRowsItemText: "All",
    };
    return (
        <div className='container'>
            <h1>Table with Pagination</h1>
            <DataTable
                columns={columns}
                data={data}
                pagination
                paginationComponentOptions={paginationComponentOptions}
            />
        </div>
    );
}
