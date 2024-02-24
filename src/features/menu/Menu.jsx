import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  // we do not need to pass anything to the fn bec React-Router will automatically know that the data that
  // we want here is the one that is associated to the page
  const menu = useLoaderData();
  console.log(menu);

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

// The data loader can be placed anywhere inside our code base , but the convention is to place it for
// the data of a certain page inside the file of that page
// The loader fn needs to return whatever data it needs to provide to the page
export async function loader() {
  const menu = await getMenu();
  return menu;
}
// Right here, we used a "render as you fetch" strategy bec React-Router will start fetching the data
// at the same time as it starts rendering the correct route

export default Menu;
