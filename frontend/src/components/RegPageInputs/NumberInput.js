import React from "react";

const NumberInput = ({ formData, setFormData }) => {
    return (
        <div className="number-inputs all-inputs">
            <input 
                type="text" 
                placeholder="Номер телефона" 
                defaultValue={formData.phone} 
                onChange={(event) => 
                    setFormData({ ...formData, phone: event.target.value })
                }
            />
        </div>
    );
}

export default NumberInput;