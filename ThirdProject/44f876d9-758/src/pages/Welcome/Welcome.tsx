import { HTMLAttributes } from 'react';
import { Form, Wrap } from '../../components';

interface IWelcomeProps extends HTMLAttributes<HTMLDivElement> {}

const Welcome: React.FC<IWelcomeProps> = () => {
  return (
    <Wrap classes={['authorizationWidth']}>
      <Form />
    </Wrap>
  );
};

export default Welcome;
