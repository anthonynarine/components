function Table({ data, config }) {

    const renderedHeaders = config.map((column) => {
//column label (col header) is unique so it can be used as they key during mapping
        return <th key={column.label}>{column.label}</th>

    });
    
    const renderedRows = data.map((car) => {
        const renderedCells = config.map((column) => {
            return <td className="p-2" key={column.label}>{column.render(car)}</td>
        })

        return (
//car model is unique so it can be used as the key during mapping
            <tr key={car.model} className="border-b">
                {renderedCells}
            </tr>
        );
    });



    return(
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2"> {renderedHeaders}</tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    );

};

export default Table;