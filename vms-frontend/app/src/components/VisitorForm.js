
// import React, { useState } from 'react';
// import { registerVisitor } from '../api';
// import { useNavigate } from 'react-router-dom';

// const VisitorForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [hostName, setHostName] = useState('');
//   const [hostEmail, setHostEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const visitorData = { name, email, phone, hostName, hostEmail };
//     try {
//       const response = await registerVisitor(visitorData);
//       setMessage(response.data.message);
//       alert('Visitor registered successfully!');
//       navigate('/dashboard'); // Redirect to dashboard after registration
//     } catch (error) {
//       setMessage('Error: ' + error.response.data.error);
//     }
//   };

//   const handleGoToDashboard = () => {
//     navigate('/dashboard'); // Redirect to dashboard without registration
//   };

//   return (
//     <div>
//       <h2>Register Visitor</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Host Name"
//           value={hostName}
//           onChange={(e) => setHostName(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Host Email"
//           value={hostEmail}
//           onChange={(e) => setHostEmail(e.target.value)}
//           required
//         />
//         <button type="submit">Register</button>
//       </form>
//       {message && <p>{message}</p>}
//       <button onClick={handleGoToDashboard} style={{ marginTop: '10px' }}>
//         Go to Dashboard
//       </button>
//     </div>
//   );
// };

// export default VisitorForm;


// components/VisitorForm.js
import React, { useState } from 'react';
import { registerVisitor } from '../api';
import { useNavigate } from 'react-router-dom';
import './VisitorForm.css'; // Import the CSS file

const VisitorForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [hostName, setHostName] = useState('');
  const [hostEmail, setHostEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const visitorData = { name, email, phone, hostName, hostEmail };
    try {
      const response = await registerVisitor(visitorData);
      setMessage(response.data.message);
      alert('Visitor registered successfully!');
      navigate('/dashboard'); // Redirect to dashboard after registration
    } catch (error) {
      setMessage('Error: ' + error.response.data.error);
    }
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard'); // Redirect to dashboard without registration
  };

  return (
    <div className="visitor-form-container">
      <h2>Register Visitor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Host Name"
          value={hostName}
          onChange={(e) => setHostName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Host Email"
          value={hostEmail}
          onChange={(e) => setHostEmail(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      {message && <p className="message">{message}</p>}<br/>
      <button onClick={handleGoToDashboard} className="dashboard-button">
        Go to Dashboard
      </button>
    </div>
  );
};

export default VisitorForm;