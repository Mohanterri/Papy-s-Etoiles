import { useState } from "react";

import MidPart from "../components/MidPart";
import TopTracks from "../components/TopTracks";
import UserComments from "../components/UserComments";
import PopularCreator from "../components/PopularCreator";
import Contact from "../components/Contact";

import ModalPopup from "../components/modal/ModalPopup";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (formData) => {
    console.log("Form data submitted:", formData);
    closeModal();
  };

  return (
    <>
      {isModalOpen && (
        <ModalPopup onClose={closeModal} onSubmit={handleSubmit} />
      )}

      <MidPart openModal={openModal} />
      <TopTracks />
      <UserComments />
      <PopularCreator />
      <Contact />
    </>
  );
}

export default Home;
