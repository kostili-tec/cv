import { Header } from '../components/Header/Header';
import AppRouter from '../components/router/AppRouter';
import './styles/main.scss';

const app = () => {
  return (
    <main className="app">
      <Header />
      <AppRouter />
    </main>
  );
};

export default app;
