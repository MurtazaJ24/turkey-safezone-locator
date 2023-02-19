import dynamic from "next/dynamic";
import Donate from "./Donate";
import Facts from "./Facts";
import Footer from "./Footer";

const Map = dynamic(() => import("./Map"), {
  loading: () => <p>loading...</p>,
  ssr: false,
});

const News = dynamic(() => import("./News"), {
  loading: () => <p>loading...</p>,
  ssr: false,
});

export default async function Home() {
  const response = await fetch(
    "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=20&minmagnitude=5&latitude=38.9&longitude=35.2&maxradius=10"
  );

  const data = await response.json();

  return (
    <>
      <Facts />
      <Donate />
      <Map data={data} />
      <News />
      <Footer />
    </>
  );
}
