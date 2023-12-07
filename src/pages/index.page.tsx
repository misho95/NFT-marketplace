import { animated, useSpring } from "@react-spring/web";
import { Suspense, lazy } from "react";
import Loading from "../components/shared/loading";
const Featured = lazy(() => import("../components/index/featured"));
const Trending = lazy(() => import("../components/index/trending"));
const Creators = lazy(() => import("../components/index/creators"));
const Categories = lazy(() => import("../components/index/categories"));
const Discover = lazy(() => import("../components/index/discover"));
const NftHighLight = lazy(() => import("../components/index/nft.highlight"));
const HowItWorks = lazy(() => import("../components/index/how.it.works"));
const JoinUs = lazy(() => import("../components/index/join.us"));

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
      <Suspense fallback={<Loading />}>
        <Featured />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Trending />
      </Suspense>
      <Creators />
      <Categories />
      <Suspense fallback={<Loading />}>
        <Discover />
      </Suspense>
      <NftHighLight />
      <HowItWorks />
      <JoinUs />
    </animated.main>
  );
};

export default IndexPage;
