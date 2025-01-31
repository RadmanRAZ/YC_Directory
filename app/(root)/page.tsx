import SerarchForm from "@/components/SerarchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {

  const query = (await searchParams).query

  const posts = [{
    _createdAt : new Date(),
    views : 55,
    author : {_id : 1 , name : "radman"},
    _id : 1 , 
    description : "this is a description",
    image : "https://plus.unsplash.com/premium_photo-1680402879257-48ffbbc6db1d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category : "Robots",
    title : "We robots"

  }]

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
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `search for ${query}` :  "All startups"}
        </p>
        <ul className="mt-7 card_grid">

          {
            posts?.length > 0 ? (
              posts.map((post : StartupTypeCard , index : number)=>(
                <StartupCard key={post._id} post = {post} />
              ))
            ):(
              <p className="no-result">No startups found</p>
            )
          }

        </ul>
      </section>
    </>
  );
}
