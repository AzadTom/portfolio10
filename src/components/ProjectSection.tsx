import { Container, H1, Layout, P, Section } from "./utility/Utility";
import { projectDataList } from "./utility/constant";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ProjectSection = () => {
  return (
    <Layout>
      <Container className="mt-20">
        <H1>
          <span className="text-color3">Projects</span> Across My Journey
        </H1>
        <P className="text-color1 font-sans mt-5">
          Projects that reflect my growth, process, and approach to solving
          design problems.
        </P>
      </Container>
      <Section className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projectDataList.map((item, index) => (
          <ProjectItem key={item.id} {...item} position={index + 1} />
        ))}
      </Section>
    </Layout>
  );
};

export default ProjectSection;

type TProjectDataList = {
  id: string;
  heading: string;
  subheading: string;
  link: string;
  imgUrl: string;
  date?: string;
};

const ProjectItem = (props: TProjectDataList & { position: number }) => {
  const { heading, subheading, imgUrl, date, link, position } = props;

  return (
    <Container className={cn("mt-12")}>
      <div className="flex justify-between items-center">
        <H1>{heading}</H1>
        <Link
          href={link}
          className="hidden sm:flex items-center gap-1 border border-[#3D3D3D] bg-[#EEEEEE] rounded-[8px] font-sans px-2 py-1 text-sm  whitespace-nowrap"
        >
          View Case-Study <ArrowUpRight />
        </Link>
      </div>
      <P className="text-color1 font-sans mt-5">{subheading}</P>
      {date && <p className="text-color3 text-sm">{date}</p>}
      <div className="flex justify-end sm:hidden">
        <Link
          href={link}
          className="flex items-center gap-1 border border-[#3D3D3D] bg-[#EEEEEE] rounded-[8px] font-sans px-2 py-1 text-sm  whitespace-nowrap"
        >
          View Case-Study <ArrowUpRight />
        </Link>
      </div>
      <Container className="relative aspect-video w-full mt-5">
        <Image
          src={imgUrl}
          alt="Project preview"
          fill
          sizes="100vw"
          className=""
        />
      </Container>
    </Container>
  );
};
