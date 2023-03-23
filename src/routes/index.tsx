import { Title } from "solid-start";
import Timeline from "~/components/Timeline";

export default function Home() {
  return (
    <main>
      <Title>TIMEline</Title>
      <h1>TimeLine</h1>
      {/* <RemainList />
      <Movie />
      <Scoreboard />
      <MovieTimeline /> */}
      <Timeline />
    </main>
  );
}
