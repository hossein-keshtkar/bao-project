import { lazy, Suspense } from "react";

const Columns = lazy(() => import("./Columns"));
const StoryBig = lazy(() => import("./StoryBig"));
const BteamBig = lazy(() => import("./BteamBig"));
const NftBig = lazy(() => import("./NftBig"));
const HexOneBig = lazy(() => import("./HexOneBig"));
const TrainingBig = lazy(() => import("./TrainingBig"));
const HexTwoBig = lazy(() => import("./HexTwoBig"));
const FightBig = lazy(() => import("./FightBig"));

const ContentsBig = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StoryBig />
      <Columns />
      <BteamBig />
      <NftBig />
      <HexOneBig />
      <TrainingBig />
      <HexTwoBig />
      <FightBig />
    </Suspense>
  );
};

export default ContentsBig;
