import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, Environment, OrbitControls, useGLTF } from '@react-three/drei';

const DEFAULT_MODEL_PATH = '/models/fixed_new_york_highway_interstate_95.glb';

interface ExperienceProps {
  modelPath?: string;
}

function Model({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
}

export const Experience = ({ modelPath = DEFAULT_MODEL_PATH }: ExperienceProps) => (
  <div style={{ width: '100vw', height: '100vh' }}>
    <Canvas dpr={[1, 2]} frameloop="demand" camera={{ position: [1, 0.75, 1] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.1}>
          <Model modelPath={modelPath} />
        </Bounds>
        <Environment preset="city" />
      </Suspense>
      <OrbitControls makeDefault />
    </Canvas>
  </div>
);
