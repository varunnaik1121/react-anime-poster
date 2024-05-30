import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const SingleAnimePage = () => {
  const [animeData, setAnimeData] = useState(null);

  const { id } = useParams();
  const fetchData = async () => {
    const res = await (await fetch(`https://dummyjson.com/users/${id}`)).json();
    setAnimeData(res);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!animeData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full border-1 border-red-400 bg-green-800">
      <div className="flex flex-col gap-6 items-center w-full bg-red-400">
        <h2 className="text-9xl">{animeData.maidenName}</h2>
        <div className="flex justify-center items-center">
          <img
            src={`${animeData.image}`}
            alt="anime iamge"
            className="w-[300px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};
export default SingleAnimePage;
