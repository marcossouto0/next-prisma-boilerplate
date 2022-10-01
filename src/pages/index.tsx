import { Meta } from '@/layouts/Meta';
import { Main } from '@/template/Main';

function Index() {
  return (
    <Main meta={<Meta title="Title" description="Description" />}>
      <p>Content</p>
    </Main>
  );
}

export default Index;
