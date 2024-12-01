# front-end-assignment
How It Works:
  1.Dropdown Options:
    Three options are provided in the dropdown: User Information, Address Information, and Payment Information.
  2.Dynamic Form Rendering:
    Based on the selected option, the form fields are dynamically updated.
    Address fields include a dropdown for selecting the state.
    Payment fields include sensitive input types like password and date.
  3.Form Submission:
    Form data is collected in the formData state and logged to the console on submission.


Dynamic Form in React
This project demonstrates a dynamic form implementation in React, where form fields are dynamically generated based on user selection from a dropdown menu. The form integrates simulated backend responses for User Information, Address Information, and Payment Information.

Features
Dynamically renders form fields based on user selection.
Includes text inputs, number inputs, dropdowns, and date fields.
Form validation for required fields.
Modular design for easy extension with additional forms.
Logs submitted data to the console.


Project_Structure.css

.
├── src
│   ├── components
│   │   └── DynamicForm.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
DynamicForm.jsx: Contains the logic for dynamic form rendering and submission.
App.jsx: Root component that renders the DynamicForm.
index.js: Entry point for the React application.
Simulated Backend Responses


User_Information Form.json

{
  "fields": [
    { "name": "firstName", "type": "text", "label": "First Name", "required": true },
    { "name": "lastName", "type": "text", "label": "Last Name", "required": true },
    { "name": "age", "type": "number", "label": "Age", "required": false }
  ]
}
Address_Information_Form.json
{
  "fields": [
    { "name": "street", "type": "text", "label": "Street", "required": true },
    { "name": "city", "type": "text", "label": "City", "required": true },
    { "name": "state", "type": "dropdown", "label": "State", "options": ["California", "Texas", "New York"], "required": true },
    { "name": "zipCode", "type": "text", "label": "Zip Code", "required": false }
  ]
}


Payment_Information_Form.json

{
  "fields": [
    { "name": "cardNumber", "type": "text", "label": "Card Number", "required": true },
    { "name": "expiryDate", "type": "date", "label": "Expiry Date", "required": true },
    { "name": "cvv", "type": "password", "label": "CVV", "required": true },
    { "name": "cardholderName", "type": "text", "label": "Cardholder Name", "required": true }
  ]
}
Installation and Setup
Clone the repository:


git clone https://github.com/your-username/dynamic-form-react.git
cd dynamic-form-react
Install dependencies:


npm install
Start the development server:


npm start
Open the application in your browser:


http://localhost:3000

How to Use
Select Form Type:
Choose a form type from the dropdown menu: User Information, Address Information, or Payment Information.
Fill the Form:
Enter the required details dynamically rendered based on your selection.
Submit the Form:
Click the Submit button to log the form data in the console.

 
Technologies Used
React: For building the user interface.
JavaScript: Logic for dynamic rendering and state management.
CSS: Basic styling for the form.
Customization
You can add more forms or modify the existing ones by updating the forms object in the DynamicForm.jsx file. Example:


Contributing
Feel free to fork the repository and submit pull requests with improvements or new features.
