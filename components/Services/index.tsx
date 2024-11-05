import Image from "next/image";

const Services = () => {
  return (
    <section className="bg-dark-primary text-white py-10 px-16 text-lg min-h-screen flex flex-col justify-center">
      <div>
        <h1 className="font-extrabold text-3xl text-accent">Our Services</h1>
        <p className="max-w-[60vw] my-2">
          Share your services or product offerings here. Present them as simple
          headers that can lead out to their pages where you can expound on them
          further. You can also use this space for other purposes where the
          information is best presented as mere teasers to other individualised
          pages.
        </p>
      </div>

      <div className="flex gap-10 justify-between my-10">
        <ServiceTile header="BUSINESS MODEL" imgUrl="/images/model.png">
          You can also use this space for other purposes where the information
          is best presented as mere teasers to other individualised pages.
        </ServiceTile>
        <ServiceTile header="BUSINESS EXECUTION" imgUrl="/images/execution.png">
          You can also use this space for other purposes where the information
          is best presented as mere teasers to other individualised pages.
        </ServiceTile>
        <ServiceTile
          header="BUSINESS MONITORING"
          imgUrl="/images/monitoring.png"
        >
          You can also use this space for other purposes where the information
          is best presented as mere teasers to other individualised pages.
        </ServiceTile>
      </div>
    </section>
  );
};

interface ServiceTileProps {
  imgUrl: string;
  header: string;
  children: React.ReactNode;
}
const ServiceTile = (props: ServiceTileProps) => {
  return (
    <div className="bg-dark-secondary max-w-[400px] px-8 py-4 rounded-3xl">
      <div className="relative h-24 w-24">
        <Image
          src={props.imgUrl}
          alt={props.header}
          fill
          className="object-contain object-left"
        />
      </div>
      <h2 className="text-accent font-bold text-xl my-2">{props.header}</h2>
      <p>{props.children}</p>
    </div>
  );
};

export default Services;
