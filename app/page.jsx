import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Your Blogs</span>
    </h1>
    <p className='desc text-center'>
    Insightful Ink is an open-source area for modern world to
      discover, create and share their blogs.
    </p>

    <Feed />
  </section>
);

export default Home;
