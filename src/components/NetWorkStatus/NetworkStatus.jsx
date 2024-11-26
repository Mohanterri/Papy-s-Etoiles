import { useNetworkStatus } from '../../functions/useNetworkStatus'; // Assurez-vous de l'importer correctement

const NetworkStatus = () => {
  const isOnline = useNetworkStatus();

  return (
    <div>
      <h1>État de la connexion</h1>
      {isOnline ? (
        <p>Vous êtes en ligne.</p>
      ) : (
        <p>Vous êtes hors ligne. Certaines fonctionnalités peuvent être limitées.</p>
      )}
    </div>
  );
};

export default NetworkStatus;
