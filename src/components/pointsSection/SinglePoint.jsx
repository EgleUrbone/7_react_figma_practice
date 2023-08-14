function SinglePoint(props) {
  const { img, alt, title, text } = props.item;

  return (
    <div className='text-center'>
      <img className='mb-6 inline-block mt-8' src={img} alt={alt} />
      <h3 className='mb-4 text-2xl font-bold text-gray-900'>{title}</h3>
      <p className='font-medium mb-8 mx-8'>{text}</p>
    </div>
  );
}

export default SinglePoint;
