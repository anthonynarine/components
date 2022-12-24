import Table from "./Table";
import { useState } from "react";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";


//this function returns an instance of table (no sorting options version) 
function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const { config, data } = props;

    const handleClick = (label) => {
        if (sortOrder === null) {
            setSortOrder("asc");
            setSortBy(label)
        } else if (sortOrder === "asc") {
            setSortOrder("desc");
            setSortBy(label)
        } else if (sortOrder === "desc") {
            setSortOrder(null);
            setSortBy(null);
        }    
    };

    const updatedConfig = config.map((column) => {
 //if this column has does not have a sort value just return the column       
        if (!column.sortValue){
            return column;
        }

        return {
            ...column,
            header: ()=> (
            <th 
                className="cursor-pointer hover:bg-gray-100"
                onClick={()=> handleClick(column.label)}>
                <div className="flex items-center">
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label} 
                </div>
            </th>
            )
        }
    });

    // Only sort data if sortOrder && sortBy are not null
    // Make a copy of the data prop if they are not null we do not want to 
    //modify the data prop being passed down

    let sortedData = data;
    if (sortOrder && sortBy){
        const { sortValue } = config.find(column => column.label === sortBy)
// look @ config array coming from props. do a find operation on it for every to find column object with the label equlal to our current sortBy piece of state
        sortedData = [...data].sort((a,b)=>{
            // copy of data array we use to sort. don't modify prop
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === "asc" ? 1 : -1;

            if (typeof valueA === "string") {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            } 

        });

   };

    //find the correct sortvalue function & use it for sorting

    return <div>
            {sortOrder}  {sortBy}
            <Table {...props} data={sortedData} config={updatedConfig} />
        </div>

    //the config porp that will come with props will get overwritten
    //by the new config prop we are passing in. 

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy){
        return <div>
            <HiArrowSmUp/>
            <HiArrowSmDown/>
        </div>
    }

    if (sortOrder === null) {
        return <div>
        <HiArrowSmUp/>
        <HiArrowSmDown/>
    </div>;
    } else if (sortOrder === "asc") {
        return <div><HiArrowSmUp/>
    </div>;
    } else if (sortOrder === "desc") {
        return <div>
        <HiArrowSmDown/>
    </div>
    };
    
}

};

export default SortableTable;