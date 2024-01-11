import "./styles/card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img
        className="card-image"
        src={props.image}
        alt={props.name}
        // onClick={() => props.handleClick(props.id)}
      />
      {/* <p>{props.name}</p> */}
    </div>
  );
}
