const Hero = ({ children }) => {
  return (
    <div className="bg-image">
      {children}
      <main>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24 lg:py-44">
          <h1 className="text-4xl font-extrabold  text-white sm:text-7xl">
            Turkey-Syria <br /> Earthquake
          </h1>
          <p className="mt-6 text-2xl leading-8 text-white max-w-prose">
            Devastating earthquakes have killed thousands of people in Turkey
            and Syria. Hundreds of buildings have been destroyed. Survivors are
            facing freezing conditions and need urgent aid. Please donate now.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Hero;
