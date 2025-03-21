import { Navbar } from './Navbar';
import { Routes, Route } from 'react-router';
import { routes } from './routes';
import { NotFound } from './NotFound';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} Component={Component} />
        ))}
        <Route path="*" Component={NotFound} />
      </Routes>
    </>
  );
};
