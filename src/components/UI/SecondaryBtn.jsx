export default function SecondaryBtn(props) {
  return <button className=" px-7 py-4 bg-white rounded-md text-lg font-medium " onClick={props.onClick}>{props.text}</button>
}