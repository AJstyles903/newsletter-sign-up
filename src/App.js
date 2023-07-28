import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NewsletterSignUp from './components/NewsletterSignUp';
import Success from './components/Success';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="bg-charcoal-grey flex justify-center items-center md:h-[100vh]">
          <Routes>
            <Route path="/" element={<NewsletterSignUp />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
