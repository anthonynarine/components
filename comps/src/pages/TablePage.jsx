// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
    
    const carData = [
        { make: "Honda", model: "Civic Dx", color: "bg-red-800", hp: 106 },
        { make: "Honda", model: "Civic si", color: "bg-black", hp: 160 },
        { make: "Acura", model: "RSX typeS", color: "bg-gray-300", hp: 201 },
        { make: "BMW",   model: "335i", color: "bg-gray-200", hp: 302 },
        { make: "Audi",  model: "A5", color: "bg-gray-500", hp: 211 },
        { make: "Audi",  model: "S5", color: "bg-stone-100", hp: 333 },
        { make: "Audi",  model: "RS5", color: "bg-gray-700", hp: 444 },
    ];

    const config = [
        {
            label: "Make",
            render: (car) => car.make,
            sortValue: (car) => car.make
        },  
        {
            label: "Model",
            render: (car) => car.model
        },
        {
            label: "Color",
            render: (car) => <div className={`p-3 m-2 ${car.color}`} ></div>
        },
        {
            label: "hp",
            render: (car) => car.hp,
            sortValue: (car) => car.hp
        },
        // {
        //     label: "User Rating",
        //     render: (car) => car.price,
        // },
    ];


    return(
        <div>
            {/* <Table data={carData} config={config}/> */}
            <SortableTable data={carData} config={config}/>
        </div>
    ) 
};

export default TablePage;