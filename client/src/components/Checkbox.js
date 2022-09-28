import { useState } from 'react';
import { Form } from 'react-bootstrap';


const Checkbox = ({ label, checked, ...props }) => {

    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(false);

    return ( 
        <div className="checkbox-wrapper">
            <label>
                <span>{label}</span>
                <Form.Check type="checkbox" checked={isChecked} onChange = {() => setIsChecked((prev) => !prev)}
                    {...props}
                ></Form.Check>
            </label>
            <p>{isChecked ? "Selected" : "Unchecked"}</p>
        </div>
     );
}
 
export default Checkbox;