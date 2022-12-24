import { Fragment } from "react";

//Fragment is func can be assigned key props or groups differend child el's together

function Table({ data, config }) {

    const renderedHeaders = config.map((column) => {
//column label (col header) is unique so it can be used as they key during mapping
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>
        }
        return <th key={column.label}>{column.label}</th>
        // if col obj has prop that is defined then return the result of calling column header. header is defined on hp label tablepage. a div is returned to accomodate the key attribute for map function        

    });
    
    const renderedRows = data.map((car) => {
        const renderedCells = config.map((column) => {
            return <td className="p-2" key={column.label}>{column.render(car)}</td>
        })

        return (
//car model is unique so it can be used as the key during mapping
            <tr key={car.model} className="border-b">{renderedCells}</tr>
        );
    });



    return(
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">{renderedHeaders}</tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    );

};

export default Table;