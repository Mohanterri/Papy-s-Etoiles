import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'boxicons'

const MidPart = () => {
  // Date cible pour le compte à rebours (exemple : 31 décembre 2024 à 23:59:59)
  const targetDate = new Date("2025-01-22T23:59:59").getTime();
  const [countdownText, setCountdownText] = useState("Précommander");

  const openDonation = () => {
    Swal.fire({
      title:"Titre",
    });
  }
  
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Fonction pour calculer le compte à rebours
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      if (timeLeft <= 0) {
        setCountdownText("Acheter");
        clearInterval(interval);
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        setCountdown({
          days,
          hours,
          minutes,
          seconds
        });
      }
    }, 1000);

    // Nettoyage du setInterval à la fin de l'effet
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <>
      <div className="mid_part">
        <img src="/img.jpg" alt="Image" />

        <div className="description">
          <p id="A_name">Persévérance</p>
          <p id='sub-title'>La voie de la jeunesse</p>
          <div className="author_desc">
            <p>Papy&apos;s 5 Etoiles est un artiste passionné, fusionnant soul et musique urbaine pour créer une atmosphère musicale 
              captivante. Son univers allie rythmes entraînants, mélodies profondes et paroles touchantes, résonnant profondément 
              avec l&apos;âme.</p>
          </div>
          <div className="buttons">
            <button><i className="bx bx-play"></i></button>
            <button><i className="bx bxs-like"></i></button>
            <button><i className="bx bx-share-alt"></i></button>
            <button><i className="bx bx-bookmark-alt"></i></button>
          </div>
        </div>

        <div className="bay-section">
          <div className="countdown">
            {countdownText === "Précommander" && (
              <>
                <h1>Date : 22 Jan 2025</h1>
                <h2>
                  Disponible dans :
                </h2>
                <p>{countdown.days} jours {countdown.hours} heures : {countdown.minutes} minutes : {countdown.seconds} secondes</p>
              </>
            )}
          </div>
          <br></br>
          
          <button id="donation" onClick={openDonation}>
              <i className="bx bxs-donate-heart"></i>
               Fire un don
          </button>
          
          <button id="bay_album">
            <i className="bx bxs-cart-add"></i> {countdownText}
          </button>
        </div>
      </div>
    </>
  );
};

export default MidPart;
