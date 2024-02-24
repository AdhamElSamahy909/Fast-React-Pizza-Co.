import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header
      className="font-pizza flex items-center justify-between
     border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6"
    >
      {/* [] is an escape hatch where we can escape all the predefined classes of tailwind */}
      <Link to="/" className="tracking-[5px]">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;