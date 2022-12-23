import Link from "./Link";

function Sidebar() {
//this will show our links w/o having to write them out one by one
    const links = [
        {label: "Dropdown", path: "/"},
        {label: "Accordion", path: "/accordion"},
        {label: "Buttons", path: "/buttons"},
        {label: "Modal", path: "/modal"},
    ];

    const renderedLinks = links.map((link) => {
        return <Link 
        key={link.label}
        to={link.path}
        className="mb-3"
        activeClassName={"font-bold border-l-4 border-blue500 pl-2"}
        >
        {link.label}</Link>
    })

    return(
        <div className="sticky top-0 flex flex-col items-start">
            {renderedLinks}
        </div>
    )

};

export default Sidebar;