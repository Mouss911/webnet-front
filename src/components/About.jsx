import AboutBack from '../assets/about/about-back.png'
import About1 from '../assets/about/about1.png'
import About2 from '../assets/about/about2.png'
import About3 from '../assets/about/about3.png'

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero section */}
      <div
        className="h-[300px] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${AboutBack})`,
        }}
      >
        <div className="text-center bg-black bg-opacity-40 p-6 rounded">
          <h1 className="text-4xl font-bold tracking-wide">ABOUT</h1>
          <p className="mt-2 text-sm max-w-xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
      </div>

      {/* First section */}
      <div className="py-12 px-6 md:px-20 text-center">
        <h2 className="text-lg font-semibold mb-4">About</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
          Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
          Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
        </p>
      </div>

      {/* Second section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-20 pb-12">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-lg font-semibold">About</h2>
          <p className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={About1} alt="About image" className="rounded shadow-md w-full" />
        </div>
      </div>

      {/* Third section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-20 pb-12">
        <div className="md:w-1/2">
          <img src={About2} alt="About image" className="rounded shadow-md w-full" />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-lg font-semibold">About</h2>
          <p className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
      </div>

      {/* Fourth section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-20 pb-12">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-lg font-semibold">About</h2>
          <p className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={About3} alt="About image" className="rounded shadow-md w-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
