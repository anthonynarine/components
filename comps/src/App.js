import Button from "./Button";
import { HiBellAlert, HiCloudArrowDown, HiCircleStack  } from "react-icons/hi2";


function App () {

    const handleClick = () => {
        console.log("click")
    }


    return (
        <div>
            <div>
                <Button success rounded outline className="mb-5" onClick={handleClick}>
                    <HiBellAlert/> 
                    Click Me!!
                    </Button>
            </div>
            <div>
                <Button danger outline>
                    <HiCloudArrowDown/> 
                    Buy Now
                    </Button>
            </div>
            <div>
                <Button warning >
                    <HiCircleStack/> 
                    See Deal
                    </Button>
            </div>
            <div>
                <Button secondary outline>
                    Buy Now 
                    </Button>
            </div>
            <div>
                <Button primary rounded>
                    See Deal
                    </Button>
            </div>
        </div>
    )
}

export default App;