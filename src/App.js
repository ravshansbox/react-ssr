import { Navbar } from './Navbar';
import { Routes, Route } from 'react-router';
import { Home } from './pages/Home';
import { About } from './pages/About';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
      </Routes>
    </>
  );
};
