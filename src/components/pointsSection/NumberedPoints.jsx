export default function NumberedPoints(props) {

  const { number, alt, title, text } = props.item;
  
  return (
    <div>
    <img className='mb-6 inline-block mt-8 w-14' src={number} alt={alt} />
    <h3 className='mb-4 text-2xl font-bold text-gray-900'>{title}</h3>
    <p className='font-medium mb-8'>{text}</p>
  </div>
  )
}