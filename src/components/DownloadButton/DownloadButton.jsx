import { useState } from "react";

const DownloadButton = ({ className }) => {
  const [tapActive, setTapActive] = useState(false);

  const handleTap = () => {

    setTapActive(true);
    setTimeout(() => setTapActive(false), 300);


    const link = document.createElement("a");
    link.href = "./CV/Martin_CV.pdf"; 
    link.download = "Martin_CV.pdf"; 
    link.click();
  };

  return (
    <button
      className={`${className} ${tapActive ? "tap-active" : ""}`}
      onClick={handleTap}       
      onTouchStart={handleTap} 
    >
      Download CV
    </button>
  );
};

export default DownloadButton;
