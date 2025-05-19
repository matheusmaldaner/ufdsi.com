import { Metadata } from "next";
import News from "@/components/News";
import ScrollUp from "@/components/Common/ScrollUp";

export const metadata: Metadata = {
  title: "News & Achievements | UF DSI",
  description: "Stay updated with the latest developments and achievements from the UF Data Science and Informatics student organization",
};

const NewsPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px]">
        <div className="container">
          <div className="border-b border-gray-200 pb-16 dark:border-gray-700">
            <News />
          </div>
        </div>
      </section>
      <ScrollUp />
    </>
  );
};

export default NewsPage; 