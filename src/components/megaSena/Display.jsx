export default function Display(props) {
  return (
    <h4>
      Número gerado: <span className="result">{props.num}</span>
    </h4>
  );
}
