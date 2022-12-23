import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {

    const [showModal, setShowModel] = useState(false); //Modal is closed by default
//opens model on user click
    const handleModalClick = () => {
        setShowModel(true);  
    };
//closes modal when user clicks gray bg. 
    const handleModalClose = () => {
        setShowModel(false);
        
    };
    
    //variables below were created to make jsx code more readable 
    const actionBar = <div>
        <Button primary >I Accept</Button>
    </div>

    const modal = 
        <Modal onClose={handleModalClose} actionBar={actionBar}>
            <p>You will accept that LBJ is the Goat</p>
        </Modal>


    return(
     <div>
        <Button primary onClick={handleModalClick}>Open Modal</Button>
        {showModal && modal}
        {/* if showModel is true, display that component if false show nothing */}
    </div>
    );
};

export default ModalPage;