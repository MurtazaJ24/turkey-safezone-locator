const Donate = () => {
  return (
    <div id="donate" className="bg-indigo-400 px-6 lg:px-8 py-8">
      <div className="flex flex-col gap-8 items-center mx-auto max-w-7xl px-6 md:flex-row lg:px-8">
        <div className="grow">
          <h1 className="text-2xl text-center font-semibold tracking-tight text-gray-900 sm:text-4xl md:text-left">
            Save Lives
          </h1>
          <p className=" mt-2 text-xl text-center font-semibold tracking-tight text-gray-800 sm:text-2xl md:text-left">
            Help earthquake survivors get urgent aid
          </p>
        </div>
        <a
          href="https://donation.dec.org.uk/turkey-syria-earthquake-appeal"
          target="_blank"
          className="h-fit text-2xl whitespace-nowrap rounded-md bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Donate Now
        </a>
      </div>
    </div>
  );
};

export default Donate;
