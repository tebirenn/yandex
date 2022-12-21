import React from "react";

const LoginInput = ({ formData, setFormData }) => {
    return (
        <div className="login-inputs all-inputs">
            <input 
                type="text"
                placeholder="Логин" 
                defaultValue={formData.login}
                onChange={(event) => 
                    setFormData({ ...formData, login: event.target.value })
                }
            />
        </div>
    );
}

export default LoginInput;