import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to="/red">Red</Link>
      </li>
      <li>
        <Link to="/Blue">Blue</Link>
      </li>
    </ul>
  );
};

export default Menu;
