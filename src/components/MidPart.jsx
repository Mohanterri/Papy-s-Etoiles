import { useState, useEffect } from 'react';

const MidPart = () => {
  // Date cible pour le compte à rebours (exemple : 31 décembre 2024 à 23:59:59)
  const targetDate = new Date("2024-12-31T23:59:59").getTime();
  const [countdownText, setCountdownText] = useState("Précommander");
  
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
    <div className="mid_part">
      <img src="/img.jpg" alt="Image" />

      <div className="description">
        <p id="A_name">Persévérance</p>
        <p>La voie de la jeunesse</p>
        <div className="author_desc">
          <p>Description de l&apos;artiste</p>
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
			<h2>
				Disponible dans :
			</h2>
			{countdownText === "Précommander" && (
				<p>{countdown.days} jours {countdown.hours} heures : {countdown.minutes} minutes : {countdown.seconds} secondes</p>
			)}
        </div>
		<br></br>
        <button id="bay_album">
          <i className="bx bxs-cart-add"></i> {countdownText}
        </button>
      </div>
    </div>
  );
};

export default MidPart;
