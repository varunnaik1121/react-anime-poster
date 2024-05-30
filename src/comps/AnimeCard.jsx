import { Link } from 'react-router-dom';
import star from '../assets/public/star.svg';
import episodes from '../assets/public/episodes.svg';
import './Animes.css';
function AnimeCard({ anime }) {
  return (
    <div className="max-w-sm rounded relative ">
      <div className="relative ">
        <img src={`${anime.image}`} alt={anime.maidenName} className="image" />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.firstName}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.lastName}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <img
              src={episodes}
              alt="episodes"
              className="object-contain w-[20px] h-[20px]"
            />
            <p className="text-base text-white font-bold">
              {anime.height || anime.weight}
            </p>
          </div>
          <Link
            to={`/${anime.id}`}
            className="flex flex-row gap-2 items-center"
          >
            <img
              src={star}
              alt="star"
              className="object-contain w-[18px] h-[18px]"
            />
            <p className="text-base font-bold text-[#FFAD49]">{anime.weight}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
