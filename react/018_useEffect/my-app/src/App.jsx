import { useState, useRef, useEffect } from "react";
function App() {
  const [modalShow, setModalShow] = useState(false);
  const modal = useRef();
  const button = useRef();
  useEffect(() =>{
    if(modal.current == null || button.current == null){
      return;
    }

    setTimeout(() => {
      modal.current.style.color = "red";
      modal.current.style.margin = "30px";
    }, 100);
    // const { bottom } = button.current.getBoundingClientRect();
    // modal.current.style.margin = `${bottom+30}px`;
  }, [modalShow]);
  return (
    <div className="App">
      <button
      ref={button}
      onClick={() => setModalShow(!modalShow)}>
        show me the modal
      </button>
      {modalShow && (
        <div ref={modal}>modal</div>
      )}
    </div>
  );
}

export default App;