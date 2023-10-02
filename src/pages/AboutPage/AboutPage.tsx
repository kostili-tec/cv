import { EditorWindow } from '../../components/IDE/EditorWindow/EditorWindow';
import { ExplorerBar } from '../../components/IDE/ExplorerBar/ExplorerBar';

const AboutPage = () => {
  return (
    <section style={{ display: 'flex', width: '100%' }}>
      <ExplorerBar />
      <EditorWindow />
    </section>
  );
};

export default AboutPage;
