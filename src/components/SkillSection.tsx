'use client';
import WorkflowScrollbarSwiper from "./WorkflowScrollbarSwiper";
import { skillGroups, workflowCards } from "./utility/constant";
import { Container, H1, H2, Layout, P, Section } from "./utility/Utility";

type SkillChipProps = {
  label: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};

const SkillChip = ({ label, Icon }: SkillChipProps) => {
  return (
    <span className="inline-flex font-open-sans items-center gap-2 rounded-full bg-[#DFF0FF] px-3 py-1.5 text-sm text-[#183759] shadow-[0_1px_0_rgba(15,23,42,0.04)]">
      <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
      <span>{label}</span>
    </span>
  );
};

const SkillSection = () => {
  return (
    <Layout>
      <Container>
        <H1 className="text-color2">
          What I Bring to the Table :
          <span className="text-color3">Skills & Expertise</span>
        </H1>
        <P className="mt-5 max-w-3xl font-open-sans text-color1">
          4 years of designing digital products across generative-AI,
          healthcare, enterprise SaaS, & consumer platforms-combining research,
          systems thinking, design execution, and AI tools to create products
          that are useful, scalable, and easy to adopt.
        </P>
      </Container>

      <Section>
        <Container className="mt-10 space-y-10">
          {skillGroups.map((group) => (
            <Container
              key={group.title}
              className="border-t border-slate-200 pt-8"
            >
              <Container className="grid min-w-0 gap-6 lg:grid-cols-[220px_1fr] lg:gap-10">
                <H2 className="text-base font-medium uppercase tracking-[0.18em] text-color2 font-open-sans">
                  {group.title}
                </H2>
                <Container className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <SkillChip key={item.label} {...item} />
                  ))}
                </Container>
              </Container>
            </Container>
          ))}
        </Container>
      </Section>

      <Section>
        <Container className="mt-12 space-y-8">
          <Container className="border-t border-slate-200 pt-8">
              <Container className="grid min-w-0 gap-6 lg:grid-cols-[220px_1fr] lg:gap-10">
              <H2 className="font-open-sans text-base font-medium uppercase tracking-[0.18em] text-color2">
                AI IN MY WORKFLOW
              </H2>

              <Container className="hidden gap-4 md:grid md:grid-cols-2 xl:grid-cols-5">
                {workflowCards.map(({ title, Icon, bullets }) => (
                  <Container
                    key={title}
                    className="min-h-[15rem] rounded-[1.4rem] bg-[#FBE7F2] p-4 text-[#EC407A] shadow-[0_1px_0_rgba(15,23,42,0.04)]"
                  >
                    <div className="flex items-center gap-2 font-open-sans text-base font-medium">
                      <Icon className="h-5 w-5 shrink-0" strokeWidth={2} />
                      <span>{title}</span>
                    </div>

                    <ul className="mt-4 space-y-2 pl-1 font-open-sans text-sm leading-6">
                      {bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#EC407A]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </Container>
                ))}
              </Container>

              <WorkflowScrollbarSwiper cards={workflowCards} />
            </Container>
          </Container>
        </Container>
      </Section>
    </Layout>
  );
};

export default SkillSection;
