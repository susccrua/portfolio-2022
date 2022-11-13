import Spline from '@splinetool/react-spline';
import Popup from './components/Popup.jsx'
import Contact from './components/Contact.jsx'
import { useState } from 'react';

export default function App() {
  const [popupOpen, setPopupOpen] = useState(false);

  const onWheel = (e) => {
    setPopupOpen(true);
  }

  setTimeout(() => { setPopupOpen(false) }, 5000)
  return (
    <div className="relative w-full h-screen">
      <Popup isOpen={popupOpen} />
      <Contact />
      <Spline scene="https://prod.spline.design/qoJQKBNdU85xEJU8/scene.splinecode"
        onWheel={onWheel}
      // onCollision={onCollision}
      />
    </div>
  );
}
