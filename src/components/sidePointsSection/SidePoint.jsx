export default function SidePoint(props) {
  const { img, alt, title, text } = props.item;
  return (
    <div className='flex gap-6'>
      <div>
      <img className='w-14' src={img} alt={alt} />
      </div>
      <div>
        <h3 className='mb-4 text-2xl font-bold text-gray-900'>{title}</h3>
        <p className='font-medium mb-8 w-96'>{text}</p>
      </div>
    </div>
  );
}
