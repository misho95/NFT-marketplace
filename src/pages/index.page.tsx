import { animated, useSpring } from "@react-spring/web";
import Featured from "../components/index/featured";
import Trending from "../components/index/trending";
import Creators from "../components/index/creators";
import Categories from "../components/index/categories";
import Discover from "../components/index/discover";
import NftHighLight from "../components/index/nft.highlight";

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
      className="flex flex-col justify-center items-center"
    >
      <Featured />
      <Trending />
      <Creators />
      <Categories />
      <Discover />
      <NftHighLight />
    </animated.main>
  );
};

export default IndexPage;
