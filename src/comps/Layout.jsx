import Hero from './Hero';
import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto bg-[#0F1117]">
      <Hero />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
