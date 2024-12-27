import { Button } from '@/shared/ui';
import { useNavigate } from 'react-router';

export const ErrorPage = () => {
  const navigate = useNavigate();

  const refresh = () => {
    navigate(0);
  };

  return (
    <div>
      <h2>Error</h2>
      <Button onClick={refresh}>перезагрузка</Button>
    </div>
  );
};
