import DataTable from "react-data-table-component";

const columns = [
    {
        name: "Title",
        selector: (row) => row.title,
        sortable: true,
    },
    {
        name: "Year",
        selector: (row) => row.year,
        sortable: true,
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
];

export default function BasicSorting() {
    return (
        <div className='container'>
            <h1>Basic Sorting</h1>
            <DataTable columns={columns} data={data} />
        </div>
    );
}