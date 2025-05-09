import bgImage from '../assets/custom.png';

export default function Customs() {
    return (
      <div
        className="bg-cover bg-center rounded-lg p-6 shadow-md flex items-start h-70"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div>
          <span className="text-sm text-black block">Customisable</span>
          <h2 className="text-2xl font-bold text-black">Customisable mugs from top brands</h2>
        </div>
      </div>
    );
  }