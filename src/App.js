import ColorBox from './15-context-api/components/ColorBox';
import ColorContext from './15-context-api/contexts/color';

const App = () => {
  return (
    <ColorContext.Provider value={{ color: 'red' }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
};

export default App;
