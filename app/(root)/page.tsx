import SerarchForm from "@/components/SerarchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {

  const query = (await searchParams).query

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          pisch your startups <br /> connect with us
        </h1>
        ;
        <p className="sub-heading !max-w-3xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod magni
          assumenda esse, incidunt dolore maiores! Sequi suscipit eius ducimus
          magnam? Nostrum eaque nobis ullam distinctio dolorem beatae quibusdam
          officia illo?
        </p>
        <SerarchForm query = {query}  />
      </section>
    </>
  );
}
