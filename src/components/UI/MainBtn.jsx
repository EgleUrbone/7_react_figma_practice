function MainBtn(props) {
  return <button className="text-white px-7 py-4 bg-green-500 rounded-md text-lg font-medium " onClick={props.onClick}>{props.text}</button>
}

export default MainBtn;