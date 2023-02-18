const Facts = () => {
  return (
    <div class="bg-gray-100 py-8 sm:py-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto pb-8 lg:pb-12">
          <h1 class="text-2xl text-center font-semibold tracking-tight text-gray-600 sm:text-4xl md:text-left">
            Key Facts
          </h1>
        </div>
        <dl class="flex gap-y-16 gap-x-2 text-center justify-center md:justify-between flex-wrap">
          <div class="bg-white px-6 py-8 rounded-lg shadow-md flex flex-1 max-w-md flex-col gap-y-4 md:max-w-xl">
            <dt class="mx-auto text-base leading-7 text-gray-600 max-w-sm">
              have died and many thousands are injured in Turkey and Syria, with
              numbers expected to rise
            </dt>
            <dd class="order-first text-3xl whitespace-nowrap font-semibold tracking-tight text-gray-900 sm:text-5xl">
              41,000 people
            </dd>
          </div>

          <div class="bg-white px-6 py-8 rounded-lg shadow-md flex flex-1 max-w-md flex-col gap-y-4 md:max-w-xl">
            <dt class="mx-auto text-base leading-7 text-gray-600 max-w-sm">
              people in the affected area, many of them in urgent need of
              shelter, food and medical aid.
            </dt>
            <dd class="order-first text-3xl whitespace-nowrap font-semibold tracking-tight text-gray-900 sm:text-5xl">
              17 million
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Facts;
