import "./Popup.css";

const Popup = ( isOpen, onClose, children ) => {
  if (!isOpen) return null;

  const handleOutsideClick = (event) => {
    if (event.target.id === "mModal") {
      console.log("Click outside detected");
      onClose();
    }
  };

  return (
    <div id="myModal" className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <span
          className="close"
          onClick={() => {
            console.log("Close button clicked");
            onClose();
          }}
        >
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Popup;
