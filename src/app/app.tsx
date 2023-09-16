import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import AppRouter from '../components/router/AppRouter';
import './styles/main.scss';

const app = () => {
  return (
    <div className="app">
      <div className="main-container">
        <Header />
        <main className="main">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default app;
