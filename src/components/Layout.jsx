import InstallPrompt from '../functions/InstallPrompt';
import Header from './Header';
import Navbar from './NavBar';
import Footer from './Footer';

function Layout( {children} ) {
  return (
    <>
      <InstallPrompt />
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
