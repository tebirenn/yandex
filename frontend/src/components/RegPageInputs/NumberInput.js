import React from "react";

const NumberInput = ({ formData, setFormData }) => {
    return (
        <div className="number-inputs all-inputs">
            <input 
                type="text" 
                placeholder="Номер телефона" 
                defaultValue={formData.phone_number} 
                onChange={(event) => 
                    setFormData({ ...formData, phone_number: event.target.value })
                }
            />
        </div>
    );
}

export default NumberInput;