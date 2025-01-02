import { useState } from 'react';
import { Input } from '@/shared/ui';

export const AboutPage = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      About Page
      <Input onChange={setValue} value={value} />
    </div>
  );
};
