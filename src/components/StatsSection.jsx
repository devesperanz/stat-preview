function StatsSection({ heading, subheading }) {
  return (
    <section className="max-xl:flex max-xl: flex-col max-xl:items-center max-xl:justify-center max-xl:order-2 max-xl:text-center w-[100%] ">
      <h2 className="text-white text-2xl font-bold mb-2">{heading}</h2>
      <p className="text-[#ffffffbf] text-base font-normal uppercase">
        {subheading}
      </p>
    </section>
  );
}

export default StatsSection;
