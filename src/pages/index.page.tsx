import Featured from "../components/index/featured";

const IndexPage = () => {
  return (
    <main className="flex justify-center items-center">
      <div role="center-content" className="w-11/12 sm:w-10/12 lg:w-8/12">
        <Featured />
      </div>
    </main>
  );
};

export default IndexPage;
