import { useLocation } from "react-router-dom";

export default function Detail() {

  const location = useLocation();

  const item = location.state.item;

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.image} alt="" width="200" />
      <p>{item.description}</p>
    </div>
  );
}