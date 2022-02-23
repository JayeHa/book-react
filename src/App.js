import ColorBox from './15-context-api/components/ColorBox';
import { ColorProvider } from './15-context-api/contexts/color';
import SelectColors from './15-context-api/components/SelectColors';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
