import "./styles.css";
const Modal = ({ message, isOpen, onClose }) => {
  return (
    <>
      {isOpen == true ? (
        <div className="modalBackdrop">
          <div className="modalContainer">
            <p className="message">{message}</p>
            <button className="closeBtn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
