import "../style.css";
import data from "../data";

export default function Card() {
  console.log(data);
  return (
    <div className="Card">
      <h1>{data[0].title}</h1>
    </div>
  );
}
