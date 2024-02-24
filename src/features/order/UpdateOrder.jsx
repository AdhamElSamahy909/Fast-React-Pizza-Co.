import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  // In order to write data, we use a form component that the fetcher provides to us
  // Submitting this form will not navigate away
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

// The params object is able to provide to us the informtion about the current URL and that contains the
// order ID
export async function action({ request, params }) {
  const data = { priority: true };
  //   console.log('update');
  //   console.log(params.id);
  await updateOrder(params.id, data);
  return null;
}
