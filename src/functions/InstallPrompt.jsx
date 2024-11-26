import { useState, useEffect } from 'react';

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    // Écoute l'événement `beforeinstallprompt`
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault(); // Empêche l'invite par défaut
      setDeferredPrompt(event); // Stocke l'événement pour utilisation ultérieure
      setShowInstallPrompt(true); // Affiche une interface utilisateur
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Affiche la boîte de dialogue d'installation
      const choiceResult = await deferredPrompt.userChoice;
      console.log(`Utilisateur a choisi : ${choiceResult.outcome}`);
      setDeferredPrompt(null); // Réinitialise l'invite différée
      setShowInstallPrompt(false); // Cache l'interface utilisateur
    }
  };

  if (!showInstallPrompt) {
    return null; // Ne rien afficher si l'invite n'est pas prête
  }

  if ('serviceWorker' in navigator && window.matchMedia('(display-mode: standalone)').matches) {
    console.log('L\'application est déjà installée');
  } else {
    console.log('L\'application peut être installée');
  }

  return (
    <div className="install-prompt">
      <p>Souhaitez-vous ajouter l&apos;application à votre écran d&apos;accueil ?</p>
      <button onClick={handleInstallClick}>Ajouter à l&apos;écran d&apos;accueil</button>
    </div>
  );
};

export default InstallPrompt;
