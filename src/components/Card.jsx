import { useEffect, useRef } from "react";
import "./styles/card.css";

export default function Card(props) {
  const card = useRef(null);

  useEffect(() => {
    card.current.addEventListener("click", () => {
      props.handleClick();
    });
  }, []);

  return (
    <div className="card" ref={card}>
      <img className="card-image" src={props.image} alt={props.name} />
    </div>
  );
}
