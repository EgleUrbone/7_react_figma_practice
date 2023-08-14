export default function LogoSection() {
  const logoArr = [
    {
      id: 1,
      src: 'img/Logo (1).svg',
      alt: 'jiggle',
    },
    {
      id: 2,
      src: 'img/Logo (2).svg',
      alt: 'symtric',
    },
    {
      id: 3,
      src: 'img/Logo (3).svg',
      alt: 'wishelp',
    },
    {
      id: 4,
      src: 'img/Logo (4).svg',
      alt: 'resecurb',
    },
    {
      id: 5,
      src: 'img/Logo (5).svg',
      alt: 'welytics',
    },
  ];
  return (
    <div className='mx-36 mt-20 text-center'>
      <p className='text-slate-300 inline-block '>
        Join 4,000+ companies already growing
      </p>
      <div className='flex gap-16 justify-between mt-8'>
        {logoArr.map((lObj) => (
          <img key={lObj.id} src={lObj.src} alt={lObj.alt} />
        ))}
      </div>
    </div>
  );
}
