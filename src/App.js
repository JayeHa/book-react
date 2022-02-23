import ColorBox from './15-context-api/components/ColorBox';
import { ColorProvider } from './15-context-api/contexts/color';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
