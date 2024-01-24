import DCStatus from "@/components/misc/(home)/dc-status";
import GHStats from "@/components/misc/(home)/gh-stats";
import { PlacesCard } from "@/components/misc/(home)/places-card";
import Map from "./map";
import { Time } from "./time";

const GridCards = () => {
  return (
    <div>
      <div className="grid md:grid-cols-6 grid-cols-3 mt-5 gap-3">
        <div className="col-span-3">
          <PlacesCard />
        </div>
        <div className="col-span-2">
          <GHStats />
        </div>
        <DCStatus />
      </div>

      <div className="grid md:grid-cols-6 grid-cols-3 gap-3 mt-3">
        <div className="col-span-2 md:order-1 order-2">
          <Map />
        </div>
        <div className="md:order-2 order-1">
          <Time />
        </div>
      </div>
    </div>
  );
};

export default GridCards;
