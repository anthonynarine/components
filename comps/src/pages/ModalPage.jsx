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
        <Button onClick={handleModalClose} primary >I Accept</Button>
    </div>

    const modal = 
        <Modal onClose={handleModalClose} actionBar={actionBar}>
            <p>This is an important document click to accept</p>
        </Modal>


    return(
     <div>
        <Button primary onClick={handleModalClick}>Open Modal</Button>
        {showModal && modal}  
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut placerat eros. Etiam volutpat purus leo, ut luctus ante accumsan id. Donec pretium vulputate lectus, in laoreet dui ornare et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed gravida velit vel cursus ultricies. Donec ultrices, urna ac maximus tincidunt, ipsum ligula viverra nunc, in bibendum justo augue non dolor. Fusce sodales nisl sit amet vehicula dapibus. Phasellus eget diam vel orci hendrerit aliquet. Etiam scelerisque elit sed turpis tempus, sed fringilla sem gravida. Vivamus velit elit, accumsan at congue ut, ornare eu arcu. Duis et scelerisque diam, in porta justo. Morbi ultricies eros sit amet sem fermentum ultrices. Morbi nec tortor vel orci laoreet sagittis. Nam eu faucibus est. Donec vehicula ligula nisl, in maximus dolor ultrices ut. Proin et consequat nisl.
        </p>        {/* if showModel is true, display that component if false show nothing */}
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut placerat eros. Etiam volutpat purus leo, ut luctus ante accumsan id. Donec pretium vulputate lectus, in laoreet dui ornare et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed gravida velit vel cursus ultricies. Donec ultrices, urna ac maximus tincidunt, ipsum ligula viverra nunc, in bibendum justo augue non dolor. Fusce sodales nisl sit amet vehicula dapibus. Phasellus eget diam vel orci hendrerit aliquet. Etiam scelerisque elit sed turpis tempus, sed fringilla sem gravida. Vivamus velit elit, accumsan at congue ut, ornare eu arcu. Duis et scelerisque diam, in porta justo. Morbi ultricies eros sit amet sem fermentum ultrices. Morbi nec tortor vel orci laoreet sagittis. Nam eu faucibus est. Donec vehicula ligula nisl, in maximus dolor ultrices ut. Proin et consequat nisl.
        </p>        {/* if showModel is true, display that component if false show nothing */}
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut placerat eros. Etiam volutpat purus leo, ut luctus ante accumsan id. Donec pretium vulputate lectus, in laoreet dui ornare et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed gravida velit vel cursus ultricies. Donec ultrices, urna ac maximus tincidunt, ipsum ligula viverra nunc, in bibendum justo augue non dolor. Fusce sodales nisl sit amet vehicula dapibus. Phasellus eget diam vel orci hendrerit aliquet. Etiam scelerisque elit sed turpis tempus, sed fringilla sem gravida. Vivamus velit elit, accumsan at congue ut, ornare eu arcu. Duis et scelerisque diam, in porta justo. Morbi ultricies eros sit amet sem fermentum ultrices. Morbi nec tortor vel orci laoreet sagittis. Nam eu faucibus est. Donec vehicula ligula nisl, in maximus dolor ultrices ut. Proin et consequat nisl.
        </p>        {/* if showModel is true, display that component if false show nothing */}
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut placerat eros. Etiam volutpat purus leo, ut luctus ante accumsan id. Donec pretium vulputate lectus, in laoreet dui ornare et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed gravida velit vel cursus ultricies. Donec ultrices, urna ac maximus tincidunt, ipsum ligula viverra nunc, in bibendum justo augue non dolor. Fusce sodales nisl sit amet vehicula dapibus. Phasellus eget diam vel orci hendrerit aliquet. Etiam scelerisque elit sed turpis tempus, sed fringilla sem gravida. Vivamus velit elit, accumsan at congue ut, ornare eu arcu. Duis et scelerisque diam, in porta justo. Morbi ultricies eros sit amet sem fermentum ultrices. Morbi nec tortor vel orci laoreet sagittis. Nam eu faucibus est. Donec vehicula ligula nisl, in maximus dolor ultrices ut. Proin et consequat nisl.
        </p>        {/* if showModel is true, display that component if false show nothing */}
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut placerat eros. Etiam volutpat purus leo, ut luctus ante accumsan id. Donec pretium vulputate lectus, in laoreet dui ornare et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed gravida velit vel cursus ultricies. Donec ultrices, urna ac maximus tincidunt, ipsum ligula viverra nunc, in bibendum justo augue non dolor. Fusce sodales nisl sit amet vehicula dapibus. Phasellus eget diam vel orci hendrerit aliquet. Etiam scelerisque elit sed turpis tempus, sed fringilla sem gravida. Vivamus velit elit, accumsan at congue ut, ornare eu arcu. Duis et scelerisque diam, in porta justo. Morbi ultricies eros sit amet sem fermentum ultrices. Morbi nec tortor vel orci laoreet sagittis. Nam eu faucibus est. Donec vehicula ligula nisl, in maximus dolor ultrices ut. Proin et consequat nisl.
        </p> 
     {/* if showModel is true, display that component if false show nothing */}
    </div>
    );
};

export default ModalPage;