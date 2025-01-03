import { useState } from "react";

import MidPart from "../components/MidPart";
import TopTracks from "../components/TopTracks";
import UserComments from "../components/UserComments";
import PopularCreator from "../components/PopularCreator";
import Contact from "../components/Contact";

import ModalPopup from "../components/modal/ModalPopup";

function Home() {
  const [mode, setMode] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (mode) => {
    setMode(mode);
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
      <ModalPopup
        mode={mode}
        open={isModalOpen}
        onClose={closeModal} 
        onSubmit={handleSubmit} 
      />

      <MidPart openModal={openModal} />
      <TopTracks />
      <UserComments />
      <PopularCreator />
      <Contact />
    </>
  );
}

export default Home;
