import { useEffect, useState } from 'react';
import { useNetworkStatus } from '../../functions/useNetworkStatus';

const NetworkStatusBar = () => {
  const isOnline = useNetworkStatus();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!isOnline) {
      setVisible(true);
    }
  }, [isOnline]);

  return (
    visible && !isOnline && (
      <div style={{ backgroundColor: 'red', color: 'white', padding: '10px', position: 'fixed', top: '0', width: '100%', textAlign: 'center' }}>
        Vous êtes hors ligne. Certaines fonctionnalités peuvent ne pas être disponibles.
      </div>
    )
  );
};

export default NetworkStatusBar;
