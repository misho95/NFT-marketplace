import { animated, useSpring } from "@react-spring/web";
import Featured from "../components/index/featured";
import Trending from "../components/index/trending";
import Creators from "../components/index/creators";
import Categories from "../components/index/categories";

const IndexPage = () => {
  const animatedPage = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 600,
      mass: 5,
      friction: 120,
      tension: 120,
    },
  });

  return (
    <animated.main
      style={{ ...animatedPage }}
      className="flex justify-center items-center"
    >
      <div role="center-content" className="w-11/12 sm:w-10/12 lg:w-8/12">
        <Featured />
        <Trending />
        <Creators />
        <Categories />
      </div>
    </animated.main>
  );
};

export default IndexPage;
