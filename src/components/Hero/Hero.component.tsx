import pumpkin from "../../assets/pumpkin.webp";

const Hero = () => {
  return (
    <main className="flex relative">
      <section className="flex flex-col justify-center items-start gap-20 pt-28">
        <h1 className="font-header text-8xl leading-headerHeight animate-pulse">
          Welcome to the Best Helloween <br /> Party
        </h1>
        <button className="pr-10 pl-10 w-100 border-2 p-4 border-orangeDark rounded-md font-header text-2xl">
          Check The tickets
        </button>
      </section>
      <section className="flex justify-center items-center">
        <img className="w-pumpkinWidth" src={pumpkin} alt="pumpkin" />
      </section>
      <section className="rounded-md absolute bottom-0 right-20 p-16 flex gap-10 bg-transparentDark">
        <div>
          <p className="text-lightWhite">
            The <span className="text-white">best</span> pumpkins <br /> in the cities
          </p>
        </div>{" "}
        <div className="border-l-2 border-r-2 border-lightWhite pr-10 pl-10">
          <p className="text-lightWhite ">
            The <span className="text-white">biggest</span> party <br /> in country
          </p>
        </div>{" "}
        <div>
          <p className="text-lightWhite">
            Take your friend to <br /> receive a <span className="text-white">discount</span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Hero;
