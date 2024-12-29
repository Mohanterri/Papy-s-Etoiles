// ModalPopup.jsx
import React, { useRef } from "react";
import { gsap } from "gsap";
import "./ModalPopup.css";

const ModalPopup = ( isModalOpen, closeModal, handleSubmit ) => {
  const modalRef = useRef(null);

  // Animation d'entrée pour le modal
  React.useEffect(() => {
    if (isModalOpen) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [isModalOpen]);

  // Animation de sortie pour le modal
  const handleClose = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power3.in",
      onComplete: closeModal,
    });
  };

  if (!isModalOpen) return null;

  return (
    <div className="overlay">
      <div ref={modalRef} className="modal">
        <h2 className="title">Formulaire</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Champ 1"
            className="input"
            required
          />
          <input
            type="text"
            placeholder="Champ 2"
            className="input"
            required
          />
          <input
            type="text"
            placeholder="Champ 3"
            className="input"
            required
          />
          <div className="button-group">
            <button type="submit" className="validate-button">
              Valider
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="cancel-button"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalPopup;
