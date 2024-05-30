import logo from '../assets/public/logo.svg';
import tiktok from '../assets/public/tiktok.svg';
import insta from '../assets/public/instagram.svg';
import twitter from '../assets/public/twitter.svg';
function Footer() {
  return (
    <div className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <div className="text-base font-bold text-white">@2023 EpicAnimeVault</div>
      <img
        src={logo}
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
        <img
          src={tiktok}
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <img
          src={insta}
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <img
          src={twitter}
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default Footer;
