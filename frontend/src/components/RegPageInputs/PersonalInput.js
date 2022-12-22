import React from "react";

const PersonalInput = ({ formData, setFormData }) => {
    return (
        <div className="personal-inputs all-inputs">
            <input 
                type="text" 
                placeholder="Имя" 
                defaultValue={formData.name} 
                onChange={(event) => 
                    setFormData({ ...formData, name: event.target.value })
                }
            />
            <input 
                type="text" 
                placeholder="Фамилия" 
                defaultValue={formData.surname}
                onChange={(event) => 
                    setFormData({ ...formData, surname: event.target.value })
                }
            />
        </div>
    );
}

export default PersonalInput;