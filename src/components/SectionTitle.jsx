export default function SectionTitle(props) {

  const { classN, pill, title, subtitle } = props;

  return (
    <div className={classN}>
      <p className='px-2 py-1 text-green-500 bg-green-100 inline-block rounded-3xl mb-4'>{pill}</p>
      <h2 className='text-4xl font-bold mb-4'>{title}</h2>
      <p className='text-slate-500 text-xl font-medium'>{subtitle}</p>
    </div>
  );
}
