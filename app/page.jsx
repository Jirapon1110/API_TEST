import TopicsList from "@/components/TopicsList";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <TopicsList />
      <div className="p-4 bg-Used-grey my-3 flex gap-5 rounded-2xl justify-center">
        <Link
          className="p-2 text-Used-light_grey hover:text-Used-white font-Inter font-bold text-3xl"
          href={"/addTopic"}
        >
          Add Topic
        </Link>
      </div>
    </>
  );
}
