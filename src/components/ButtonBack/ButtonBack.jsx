import { Link } from 'react-router-dom';

const ButtonBack = ({ to }) => {
  return (
    <Link to={to}>
      <button>Come Back</button>
    </Link>
  );
};

export default ButtonBack;
