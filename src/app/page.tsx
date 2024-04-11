import Image from "next/image";
import styles from "./page.module.css";
import Service from "../app/components/Main/service";
import Soga from "../app/components/Main/soga";
import Soga2 from "../app/components/Main/soga2";
import Soga3 from "../app/components/Main/soga3";
import YoutubeVideo from "../app/components/Main/youtube";

export default function Home() {
  return (
    <div>
      <Service />
      <Soga />
      <Soga2 />
      <Soga3 />
      <YoutubeVideo videoId="0d8RS7xSXA0"></YoutubeVideo>
    </div>
  );
}
