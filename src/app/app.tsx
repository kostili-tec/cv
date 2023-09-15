import { Header } from '../components/Header/Header';
import { MainPage } from '../pages/MainPage/MainPage';
import './styles/main.scss';

const app = () => {
  return (
    <main className="app">
      <Header />
      <MainPage />
    </main>
  );
};

export default app;
