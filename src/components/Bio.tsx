const Bio = () => {
  return (
    <section className="mx-auto mt-[-20px] flex max-w-7xl flex-col gap-16 px-4 pb-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-[60px]">
        <div className="flex flex-col justify-start gap-2 md:gap-6">
          <p className="text-sm font-bold uppercase text-[#8094b2] sm:text-base md:text-lg">
            Our Story
          </p>
          <p className="text-[18px] font-bold leading-tight text-neutral-base sm:text-[24px] md:text-[32px]">
            Abdamin International Limited was incorporated under the laws of the
            Federal Republic of Nigeria in the year 2000, with registration
            number RC 395223
          </p>
        </div>
        <div className="flex flex-col gap-3 md:gap-6">
          <p className="text-sm font-medium text-neutral-base sm:text-base md:text-lg">
            Abdamin International Limited is a limited liability company fully
            registered and incorporated in Nigeria with its head office in Yola,
            Adamawa State with several business offices in Abuja, kaduna and
            Lagos.
          </p>
          <p className="text-sm font-medium text-neutral-base sm:text-base md:text-lg">
            The company since incorporation in November of 2000 is engaged in
            various businesses or divisions, Construction, Transportation,
            Telecoms, Consults, and Energy.
          </p>
          <p className="text-sm font-medium text-neutral-base sm:text-base md:text-lg">
            Abdamin Over the years have been investing in technologies and human
            capital to achieve its goals and objectives as a stop company that
            is exploring all business opportunities in order to maximise its
            resources.
          </p>
          <p className="text-sm font-semibold text-primary-base sm:text-base md:text-lg">
            The company understands that is most valuable resource is people and
            its most importance tool is effective communication.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bio;
