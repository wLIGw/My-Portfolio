import { useState } from "react";


const DownloadButton = ({ className }) => {
  const [tapActive, setTapActive] = useState(false);

  const handleTap = () => {
    
    setTapActive(true);

    
    setTimeout(() => {
      setTapActive(false);
    }, 300);
  };

  return (
    <button 
      className={`${className} ${tapActive ? "tap-active" : ""}`}
      onTouchStart={handleTap}  
    >
      Download CV
    </button>
  );
};

export default DownloadButton;
