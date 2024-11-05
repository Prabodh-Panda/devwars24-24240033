import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-screen max-w-screen bg-accent text-white py-10 px-16 flex flex-col">
      <nav className="flex justify-between">
        <div className="flex gap-2">
          <div className="h-full w-[2px] bg-dark-primary rounded" />
          <p className="text-lg">Pankaj + Co.</p>
        </div>
        <div>
          <ul className="flex gap-10 text-lg font-medium">
            <li>Home</li>
            <li>Our Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </nav>
      <main className="flex-1 flex justify-between items-center">
        <div>
          <h1 className="flex font-bold text-7xl">
            Experience <br />
            excellence <br />
            with us.
          </h1>
          <p className="text-2xl my-4 font-light">Your partner in business</p>
          <button className="bg-dark-primary px-10 py-2 rounded-full flex justify-center items-center">
            Learn More
          </button>
        </div>
        <div className="relative w-[50vw] h-[85vh] flex justify-end">
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            fill
            className="object-contain object-right"
          />
        </div>
      </main>
    </div>
  );
};

export default Hero;
