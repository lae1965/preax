import { Content } from '../../components/Content/Content';
import { Layout } from '../../components/Layout/Layout';

interface MainProps extends React.HTMLAttributes<HTMLElement> {}

export const Main: React.FC<MainProps> = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  );
};
