import ReactDOM  from "react-dom";

// the createPortal function will allow our modal to be rendered without a 
// depending a parent position by telling React to place HTML produced 
// by this Component somwhere else. we will render our model in a div created in index.html

function Modal({ onClose, children, actionBar }) {
    return ReactDOM.createPortal(
        <div>
            <div 
                onClick={onClose} 
                className="absolute inset-0 bg-gray-300 opacity-80"
            ></div>
            <div className="absolute inset-40 p-10 bg-white">
                {children}
                {actionBar}
            </div>
        </div>,
        document.querySelector(".modal-container")
        // refrence  to the div element in our indexe.html

    );     
};

export default Modal;

