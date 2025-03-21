import { NavLink } from 'react-router';
import { routes } from './routes';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        {routes.map(({ path, title }) => (
          <li key={path}>
            <NavLink to={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
