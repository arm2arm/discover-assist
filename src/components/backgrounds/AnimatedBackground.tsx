import NeuralNetwork from './NeuralNetwork';
import MatrixRain from './MatrixRain';
import TronGrid from './TronGrid';

interface AnimatedBackgroundProps {
  showNeuralNetwork?: boolean;
  showMatrixRain?: boolean;
  showTronGrid?: boolean;
  intensity?: number;
}

const AnimatedBackground = ({
  showNeuralNetwork = true,
  showMatrixRain = true,
  showTronGrid = true,
  intensity = 1
}: AnimatedBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {showTronGrid && <TronGrid opacity={0.2 * intensity} />}
      {showMatrixRain && <MatrixRain density={30 / intensity} />}
      {showNeuralNetwork && <NeuralNetwork intensity={intensity} />}
    </div>
  );
};

export default AnimatedBackground;
