export default function SidePoint(props) {
  const { img, alt, title, text } = props.item;
  return (
    <div>
      <img src={img} alt={alt} />
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}
