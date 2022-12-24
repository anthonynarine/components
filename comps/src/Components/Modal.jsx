import ReactDOM  from "react-dom";
import { useEffect } from "react";

// the createPortal function will allow our modal to be rendered without a 
// depending a parent position by telling React to place HTML produced 
// by this Component somwhere else. we will render our model in a div created in index.html

function Modal({ onClose, children, actionBar }) {
    //this useEffec function will disable scrolling when the modal is open and enable when closed
    useEffect(() => {
        document.body.classList.add("overflow-hidden");

        return () => {
            document.body.classList.remove("overflow-hidden")
        };

    }, []);



    return ReactDOM.createPortal(
        <div>
            <div 
                onClick={onClose} 
                className="fixed inset-0 bg-gray-300 opacity-80"
            ></div>
            <div className="fixed inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="flex justify-end" >
                        {actionBar}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector(".modal-container")
        // refrence  to the div element in our indexe.html

    );     
};

export default Modal;

