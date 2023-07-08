import Stats from "./Stats";
function ContentSection() {
  return (
    <section className="max-xl:flex max-xl: flex-col max-xl:items-center max-xl:justify-center max-xl:order-2 max-xl:text-center w-[100%] xl:p-[4.5rem] xl:pb-[3.75rem] max-xl:p-8">
      <h1 className="xl:text-4xl xl:leading-tight max-xl:text-[1.75rem] font-bold leading-tight mb-6 max-w-[400px] max-xl:w-[270px] xl:min-w-[400px]">
        Get <span className="text-[#aa5cdb]">insights</span> that help your
        business grow.
      </h1>
      <p
        className={`w-[350px] max-xl:w-[270px] text-[15px] leading-relaxed opacity-75 max-xl:mb-10 xl:mb-[4.5rem]`}
      >
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency.
      </p>
      <Stats />
    </section>
  );
}

export default ContentSection;
