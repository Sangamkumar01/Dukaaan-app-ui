import React from 'react';

function Fotter() {
  return (
    <div className="flex justify-center items-center flex-col text-black-300 mb-6 gap-2">
      <div>
        ----- Made By
        <a
          className="pl-1 text-blue-700 font-medium"
          href="https://www.linkedin.com/in/sangammuz/"
        >
          Sangam Gupta
        </a>
        , inspired by
        <a
          className="px-1 text-blue-700 font-medium"
          
        >
          Dukaan App UI
        </a>
        -----
      </div>
      <div className="text-black-300 underline">
        <a href="  ">
          Get the source code
        </a>
      </div>
    </div>
  );
}

export default Fotter;
