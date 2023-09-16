import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import AppRouter from '../components/router/AppRouter';
import './styles/main.scss';

const app = () => {
  return (
    <main className="app">
      <Header />
      <AppRouter />
      <Footer />
    </main>
  );
};

export default app;
