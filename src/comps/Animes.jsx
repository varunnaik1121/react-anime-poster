import { useEffect, useState } from 'react';
import AnimeCard from './AnimeCard';
import './Animes.css';
const Animes = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch('https://dummyjson.com/users');
    const response = await res.json();
    setData(response.users);
  };
  console.log(data);

  return (
    <div className="container">
      {data &&
        data.map((anime) => {
          return <AnimeCard anime={anime} key={anime.id} />;
        })}
    </div>
  );
};

export default Animes;
