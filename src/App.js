
import { Canvas } from '@react-three/fiber';
import './App.css';
import Experience from './Experience';
import { OrbitControls } from '@react-three/drei';
function App() {
  return (
   <Canvas shadows>
    <OrbitControls />
    <Experience />
   </Canvas>
  );
}

export default App;
