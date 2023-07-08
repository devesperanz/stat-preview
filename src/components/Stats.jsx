import StatsSection from "./StatsSection";
function Stats() {
  const ratings = [
    {
      title: "10k+",
      value: "companies",
      id: 1,
    },
    {
      title: "314",
      value: "templates",
      id: 2,
    },
    {
      title: "12M+",
      value: "queries",
      id: 3,
    },
  ];
  return (
    <section className="flex max-xl:flex-col max-xl:justify-center max-xl:items-center gap-x-[4.5rem] gap-y-8">
      {ratings.map((item) => (
        <div key={item.title} className="mr-10">
          <StatsSection heading={item.title} subheading={item.value} />
        </div>
      ))}
    </section>
  );
}

export default Stats;
