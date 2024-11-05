import Image from "next/image";

const Contacts = () => {
  return (
    <section className="bg-black text-white py-10 px-16 text-lg min-h-screen flex items-center">
      <div className="h-[50vw] w-[70vw] relative">
        <Image
          src="/images/contact.png"
          alt="Contact Image"
          fill
          className="object-contain"
        />
      </div>
      <div>
        <h1 className="font-extrabold text-3xl">Contact Us</h1>
        <div className="flex flex-col justify-between h-[40vh] mt-16">
          <div>
            <h2 className="text-accent">PHONE</h2>
            <p>123-456-7890</p>
          </div>
          <div>
            <h2 className="text-accent">EMAIL</h2>
            <p>
              <a href="mailto:hello@reallygreatsite.com">
                hello@reallygreatsite.com
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-accent">SOCIALS</h2>
            <div className="flex gap-4">
              <Image
                src="/images/facebook.png"
                style={{ filter: "invert(100%)" }}
                alt="facebook"
                height={30}
                width={30}
              />
              <Image
                src="/images/instagram.png"
                style={{ filter: "invert(100%)" }}
                alt="instagram"
                height={30}
                width={30}
              />
              <Image
                src="/images/twitter.png"
                style={{ filter: "invert(100%)" }}
                alt="twitter"
                height={30}
                width={30}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contacts;
