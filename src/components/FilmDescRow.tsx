interface FilmDescParam
{
  title: string;
  value: string;
}

function FilmDescRow({title, value}: FilmDescParam) {


  return (
    <>
      <div className="leading-10">
        <span className="text-orange-500 font-bold mr-2">{title}</span>
        <span className="text-white">{value}</span>
      </div>
    </>
  );
}

export default FilmDescRow;