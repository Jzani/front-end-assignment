import React, { useState } from "react";

const DynamicForm = () => {
  const [formFields, setFormFields] = useState([]); // Current form fields
  const [formData, setFormData] = useState({}); // Form data entered by user

  // Simulated backend responses
  const forms = {
    "User Information": [
      { name: "firstName", type: "text", label: "First Name", required: true },
      { name: "lastName", type: "text", label: "Last Name", required: true },
      { name: "age", type: "number", label: "Age", required: false },
    ],
    "Address Information": [
      { name: "street", type: "text", label: "Street", required: true },
      { name: "city", type: "text", label: "City", required: true },
      { 
        name: "state", 
        type: "dropdown", 
        label: "State", 
        options: ["California", "Texas", "New York"], 
        required: true 
      },
      { name: "zipCode", type: "text", label: "Zip Code", required: false },
    ],
    "Payment Information": [
      { name: "cardNumber", type: "text", label: "Card Number", required: true },
      { name: "expiryDate", type: "date", label: "Expiry Date", required: true },
      { name: "cvv", type: "password", label: "CVV", required: true },
      { name: "cardholderName", type: "text", label: "Cardholder Name", required: true },
    ],
  };

  // Handle dropdown selection
  const handleDropdownChange = (e) => {
    const selectedForm = e.target.value;

    if (forms[selectedForm]) {
      setFormFields(forms[selectedForm]); // Update form fields dynamically
      // Reset form data
      const initialData = forms[selectedForm].reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {});
      setFormData(initialData);
    } else {
      setFormFields([]);
      setFormData({});
    }
  };

  // Handle input changes
  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted! Check the console for details.");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2 style={{ textAlign: "center" }}>Dynamic Form</h2>

      {/* Dropdown for selecting form type */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "10px" }}>Select Form Type:</label>
        <select onChange={handleDropdownChange}>
          <option value="">-- Select --</option>
          <option value="User Information">User Information Form</option>
          <option value="Address Information">Address Information Form</option>
          <option value="Payment Information">Payment Information Form</option>
        </select>
      </div>

      {/* Render the dynamic form */}
      {formFields.length > 0 && (
        <form onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <div key={field.name} style={{ marginBottom: "15px" }}>
              <label>
                {field.label} {field.required && "*"}
              </label>

              {field.type === "dropdown" ? (
                <select
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  required={field.required}
                  style={{ display: "block", width: "100%", padding: "8px" }}
                >
                  <option value="">-- Select --</option>
                  {field.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  required={field.required}
                  style={{ display: "block", width: "100%", padding: "8px" }}
                />
              )}
            </div>
          ))}
          <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default DynamicForm;
