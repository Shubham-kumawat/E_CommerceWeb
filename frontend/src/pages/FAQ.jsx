
// import React, { useState } from 'react';

// const faqData = [
//   {
//     question: "What is an FAQ section?",
//     answer:
//       "An FAQ section can be used to quickly answer common questions about your business like 'Where do you ship to?', 'What are your opening hours?', or 'How can I book a service?'",
//   },
//   {
//     question: "Why do FAQs matter?",
//     answer:
//       "FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience.",
//   },
//   {
//     question: "Where can I add my FAQs?",
//     answer:
//       "FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the go.",
//   },
// ];

// function FAQ() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <div className="bg-white min-h-screen flex flex-col items-center justify-start py-10 px-4">
//       <div className="w-[52%] py-2 px-4 rounded">
//         <h1 className="text-4xl font-semibold">FAQ</h1>
//       </div>
//       <h2 className="text-3xl mt-6 mb-10 text-center text-gray-800">
//         Frequently asked questions
//       </h2>

//       <div className="w-full max-w-3xl">
//         <div className="flex mb-6">
//           <button className="px-4 py-2 text-blue-600 font-semibold">General</button>
//           <button className="px-4 py-2 text-gray-600 hover:text-blue-600">
//             Setting up FAQs
//           </button>
//         </div>

//         {faqData.map((item, index) => (
//           <div key={index} className="border-b border-gray-400">
//             <button
//               onClick={() => toggleFAQ(index)}
//               className="w-full text-left py-4 font-medium text-md flex justify-between items-center focus:outline-none"
//             >
//               {item.question}
//               <img
//                 src={
//                   activeIndex === index
//                     ? "/icons/arrow-up-s-line.png"
//                     : "/icons/arrow-down-s-line.png"
//                 }
//                 alt="arrow icon"
//                 className="w-5 h-5 ml-2"
//               />
//             </button>

//             {activeIndex === index && (
//               <div className="pb-4 px-2">
//                 <p className=" mb-2 font-semibold">{item.answer}</p>
//                 <div className="flex gap-4 mt-2">
//                   <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//                     <img
//                       src="/icons/facebook-circle-fill.png"
//                       alt="Facebook"
//                       className="w-5 h-5 hover:scale-110 transition-transform duration-200"
//                     />
//                   </a>
//                   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//                     <img
//                       src="/icons/twitter-x-fill.png"
//                       alt="Twitter"
//                       className="w-5 h-5 hover:scale-110 transition-transform duration-200"
//                     />
//                   </a>
//                   <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//                     <img
//                       src="/icons/linkedin-box-fill.png"
//                       alt="LinkedIn"
//                       className="w-5 h-5 hover:scale-110 transition-transform duration-200"
//                     />
//                   </a>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FAQ;


import React, { useState } from 'react';

const faqData = {
  general: [
    {
      question: "What is an FAQ section?",
      answer:
        "An FAQ section can be used to quickly answer common questions about your business like 'Where do you ship to?', 'What are your opening hours?', or 'How can I book a service?'",
    },
    {
      question: "Why do FAQs matter?",
      answer:
        "FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience.",
    },
    {
      question: "Where can I add my FAQs?",
      answer:
        "FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the go.",
    },
  ],
  setting: [
    {
      question: "How do I add a new question & answer?",
      answer:
        `To add a new FAQ follow these steps: 
1. Manage FAQs from your site dashboard or in the Editor 
2. Add a new question & answer 
3. Assign your FAQ to a category 
4. Save and publish.
You can always come back and edit your FAQs.`,
    },
    {
      question: "Can I insert an image, video, or GIF in my FAQ?",
      answer:
        `Yes. To add media follow these steps: 
1. Manage FAQs from your site dashboard or in the Editor 
2. Create a new FAQ or edit an existing one 
3. From the answer text box click on the video, image or GIF icon 
4. Add media from your library and save.`,
    },
    {
      question: "How do I edit or remove the 'Frequently Asked Questions' title?",
      answer:
        "You can edit the title from the FAQ 'Settings' tab in the Editor. To remove the title from your mobile app go to the 'Site & App' tab in your Owner's app and customize.",
    },
  ],
};

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('general');

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const currentData = faqData[activeTab];

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-start py-10 px-4">
      <div className="w-[52%] py-2 px-4 rounded">
        <h1 className="text-4xl font-semibold">FAQ</h1>
      </div>
      <h2 className="text-3xl mt-6 mb-10 text-center text-gray-800">
        Frequently asked questions
      </h2>

      <div className="w-full max-w-3xl">
        <div className="flex mb-6 gap-4">
          <button
            onClick={() => {
              setActiveTab('general');
              setActiveIndex(null);
            }}
            className={`px-4 py-2 font-semibold ${
              activeTab === 'general' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            General
          </button>
          <button
            onClick={() => {
              setActiveTab('setting');
              setActiveIndex(null);
            }}
            className={`px-4 py-2 font-semibold ${
              activeTab === 'setting' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Setting up FAQs
          </button>
        </div>

        {currentData.map((item, index) => (
          <div key={index} className="border-b border-gray-400">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-4 font-medium text-md flex justify-between items-center focus:outline-none"
            >
              {item.question}
              <img
                src={
                  activeIndex === index
                    ? "/icons/arrow-up-s-line.png"
                    : "/icons/arrow-down-s-line.png"
                }
                alt="arrow icon"
                className="w-5 h-5 ml-2"
              />
            </button>

            {activeIndex === index && (
              <div className="pb-4 px-2">
                <pre className=" mb-2 whitespace-pre-wrap text">{item.answer}</pre>

                {/* Social Icons */}
                <div className="flex gap-4 mt-2">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img
                      src="icons/facebook-circle-fill.png"
                  
                      alt="Facebook"
                      className="w-5 h-5 hover:scale-110 transition-transform duration-200"
                    />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/icons/twitter-x-fill.png"
                      alt="Twitter"
                      className="w-5 h-5 hover:scale-110 transition-transform duration-200"
                    />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/icons/linkedin-box-fill.png"
                      alt="LinkedIn"
                      className="w-5 h-5 hover:scale-110 transition-transform duration-200"
                    />
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
