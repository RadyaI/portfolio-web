import React from 'react';
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color='0, 150, 255'
        outerAlpha={0.5}
        innerScale={0.7}
        outerScale={2}
        showSystemCursor={false} 
        outerStyle={{
          border: '2px solid orange',
          backgroundColor: 'transparent', 
        }}
        innerStyle={{
          backgroundColor: 'transparent', 
          border: '2px solid orange'
        }}
      />
    </div>
  );
}

export default App;
