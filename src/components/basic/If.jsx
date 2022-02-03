export default function ShowOrNot(props) {
  if (props.test) return props.children;
  else return false;
}
