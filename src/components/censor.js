"use client";

import React from "react";

const Censor = ({ children }) => {
  const [isCensored, setIsCensored] = React.useState(false);

  function toggleCensorship() {
    setIsCensored(!isCensored);
  }

  return (
    <button
      className={isCensored ? "censored" : undefined}
      onClick={toggleCensorship}
    >
      {children}
    </button>
  );
};

export default Censor;
