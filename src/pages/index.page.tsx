import { animated, useSpring } from "@react-spring/web";
import { Suspense, lazy } from "react";
import Loading from "../components/shared/loading";

const LazyLoadedComponents = [
  lazy(() => import("../components/index/featured")),
  lazy(() => import("../components/index/trending")),
  lazy(() => import("../components/index/creators")),
  lazy(() => import("../components/index/categories")),
  lazy(() => import("../components/index/discover")),
  lazy(() => import("../components/index/nft.highlight")),
  lazy(() => import("../components/index/how.it.works")),
  lazy(() => import("../components/index/join.us")),
];

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
        {LazyLoadedComponents.map((LazyComponent, index) => (
          <LazyComponent key={index} />
        ))}
      </Suspense>
    </animated.main>
  );
};

export default IndexPage;
