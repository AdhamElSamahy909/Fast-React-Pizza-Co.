import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

// Sice we are using this component for the error , it has access for the error that occured
function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
