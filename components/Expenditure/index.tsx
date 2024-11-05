import Image from "next/image";

const Expenditure = () => {
  return (
    <section className="bg-dark-primary text-white py-10 px-16 text-lg min-h-screen flex justify-between items-center">
      <div>
        <h1 className="font-medium text-3xl">The Expenditure</h1>
        <p className="max-w-[40vw] my-2">
          Share your services or product offerings here. Present them as simple
          headers that can lead out to their pages where you can expound on them
          further. You can also use this space for other purposes where the
          information is best presented as mere teasers to other individualised
          pages.
        </p>

        <button className="bg-dark-secondary w-48 h-16 rounded-[50%] mt-40">
          Know More...
        </button>
      </div>

      <div className="w-[300px] scale-y-[150%] scale-x-[120%] flex relative mr-16">
        <ul className="absolute top-0 left-0 h-full flex flex-col justify-between ">
          <li className="h-5">50</li>
          <li className="h-5">40</li>
          <li className="h-5">30</li>
          <li className="h-5">20</li>
          <li className="h-5">10</li>
          <li className="h-5">0</li>
        </ul>
        <div className="flex items-start gap-2 pl-8">
          <div className="h-[50px] w-[50px] bg-white relative rounded-t overflow-hidden mt-auto">
            <div className="w-[50px] h-[25px] absolute top-0 left-0 bg-[#65a6fa]"></div>
          </div>
          <div className="h-[100px] w-[50px] bg-white relative rounded-t overflow-hidden mt-auto">
            <div className="w-[50px] h-[25px] absolute top-0 left-0 bg-[#65a6fa]"></div>
            <div className="w-[50px] h-[25px] absolute bottom-0 left-0 bg-[#00cadc]"></div>
          </div>
          <div className="h-[150px] w-[50px] bg-white relative rounded-t overflow-hidden mt-auto">
            <div className="w-[50px] h-[25px] absolute top-0 left-0 bg-[#65a6fa]"></div>
            <div className="w-[50px] h-[70px] absolute bottom-0 left-0 bg-[#00cadc]"></div>
          </div>
          <div className="h-[200px] w-[50px] bg-white relative rounded-t overflow-hidden mt-auto">
            <div className="w-[50px] h-[25px] absolute top-0 left-0 bg-[#65a6fa]"></div>
            <div className="w-[50px] h-[100px] absolute bottom-0 left-0 bg-[#00cadc]"></div>
          </div>
          <div className="h-[250px] w-[50px] bg-white relative rounded-t overflow-hidden mt-auto">
            <div className="w-[50px] h-[25px] absolute top-0 left-0 bg-[#65a6fa]"></div>
            <div className="w-[50px] h-[130px] absolute bottom-0 left-0 bg-[#00cadc]"></div>
          </div>
        </div>
        <div className="flex absolute bottom-[-50px] left-0 w-full justify-between">
          <p className="-rotate-45 text-sm text-right">Sales</p>
          <p className="-rotate-45 text-sm text-right">Services</p>
          <p className="-rotate-45 text-sm text-right">Infra...</p>
          <p className="-rotate-45 text-sm text-right">Promotion</p>
          <p className="-rotate-45 text-sm text-right">Componsations</p>
        </div>
        <div className="h-1 bg-white"></div>
      </div>
    </section>
  );
};

export default Expenditure;
