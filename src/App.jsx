import Spline from '@splinetool/react-spline';
import Popup from './components/Popup.jsx'

export default function App() {
  return (
    <div className="relative w-full h-screen">
      <Popup />
      <Spline scene="https://prod.spline.design/qoJQKBNdU85xEJU8/scene.splinecode" />
    </div>
  );
}
