export default function showOrNot(props) {
  if (props.test) return props.children;
  else return false;
}
