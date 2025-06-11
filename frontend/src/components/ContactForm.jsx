// import React, { useState } from "react";

// function ContactForm() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Yahan tum form data ko backend ya kisi service ko bhej sakte ho
//     alert("Form submitted: " + JSON.stringify(formData, null, 2));
//   };

//   return (
//     <div style={{ maxWidth: 500, margin: "auto", padding: 20, fontFamily: "Arial" }}>
//       <h2>Contact</h2>
//       <p>You're welcome to contact us with any inquiry</p>
//       <p>
//         <strong>Tel:</strong> 123-456-7890 &nbsp; | &nbsp; <strong>Email:</strong> info@mysite.com
//       </p>

//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: 12 }}>
//           <label>
//             First Name:<br />
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//               style={{ width: "100%", padding: 8 }}
//             />
//           </label>
//         </div>

//         <div style={{ marginBottom: 12 }}>
//           <label>
//             Last Name:<br />
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//               style={{ width: "100%", padding: 8 }}
//             />
//           </label>
//         </div>

//         <div style={{ marginBottom: 12 }}>
//           <label>
//             Email:<br />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               style={{ width: "100%", padding: 8 }}
//             />
//           </label>
//         </div>

//         <div style={{ marginBottom: 12 }}>
//           <label>
//             Phone:<br />
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               style={{ width: "100%", padding: 8 }}
//               pattern="[0-9]{10,15}"
//               placeholder="Digits only"
//             />
//           </label>
//         </div>

//         <div style={{ marginBottom: 12 }}>
//           <label>
//             Message:<br />
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               style={{ width: "100%", padding: 8, minHeight: 100 }}
//             />
//           </label>
//         </div>

//         <button type="submit" style={{ padding: "10px 20px" }}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;
import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted:\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 font-sans">
      <h2 className="text-4xl font-semibold text-center mb-2">Contact</h2>
      <p className="text-center text-2xl font-semibold mt-8 mb-4">
        You're welcome to contact us with any inquiry
      </p>
      <p className="text-center   mb-10">
        <strong>Tel:</strong> 123-456-7890 | <strong>Email:</strong> info@mysite.com
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 ">
        <div >
          <label htmlFor="firstName" className="block mb-1  font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block mb-1 font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-1 font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            pattern="[0-9]{10,15}"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Digits only"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      <div className="flex justify-end">
          <button
          type="submit"
          className="w-[35%]  bg-black text-white font-semibold py-2 border rounded hover:bg-white hover:text-black transition-colors"
        >
          Submit
        </button>
      </div>
      </form>
    </div>
  );
}

export default ContactForm;
