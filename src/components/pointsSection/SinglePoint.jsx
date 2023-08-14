function SinglePoint(props) {
  const { img, alt, title, text } = props.item;

  return (
    <div>
      <img src={img} alt={alt} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default SinglePoint;
