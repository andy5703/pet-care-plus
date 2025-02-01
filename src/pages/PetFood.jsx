import {useNavigate} from "react-router-dom";

const PetFood = () => {
    const navigate = useNavigate();
    return(
        <div>
            <h1>Pet Food Page</h1>
            <button type='button' onClick={() => navigate('/Homepage.jsx')}></button>
        </div>
    );
}

export default PetFood;