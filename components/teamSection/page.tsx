import Image, { StaticImageData } from "next/image";
import React from "react";
import teamImage from "../../public/assets/icons/in-image.svg";

interface TeamMember {
  name: string;
  title?: string;
  role?: string;
  fields: string[];
  image: StaticImageData;
  contact?: {
    email?: string;
    phone?: string;
    address?: string;
    office?: string;
    tel?: string;
  };
}

const TeamSectionSecond: React.FC = () => {
  const coreMembers: TeamMember[] = [
    {
      name: "Dr. Javed Ahmed Malik",
      title: "Senior Advisor",
      role: "Policy Design Expert",
      fields: ["Public Policy", "Governance", "Economic Development"],
      image: teamImage,
    },
    {
      name: "Axif Sattar",
      title: "Technical Director",
      role: "Data Systems Specialist",
      fields: ["Data Analysis", "Monitoring & Evaluation", "Statistics"],
      image: teamImage,
    },
    {
      name: "Ambrene Shabir",
      title: "Program Manager",
      role: "Implementation Lead",
      fields: [
        "Project Management",
        "Capacity Building",
        "Stakeholder Engagement",
      ],
      image: teamImage,
    },
    {
      name: "Dodge Chakraborty",
      title: "Research Fellow",
      fields: ["Qualitative Research", "Case Studies", "Field Work"],
      image: teamImage,
    },
    {
      name: "Khan, Sergeant Sergeant",
      title: "Field Coordinator",
      fields: ["Logistics", "Community Engagement", "Operations"],
      image: teamImage,
    },
  ];

  const otherMembers: TeamMember[] = [
    {
      name: "Mohammed Rafiq",
      title: "Adobe",
      fields: ["Consulting", "Advisory"],
      contact: {
        email: "Jared@dodge-chamber.com",
      },
      image: teamImage,
    },
    {
      name: "Seizer Shafiq",
      title: "Fellow",
      fields: ["Research", "Analysis"],
      contact: {
        email: "Jared@seizer-shapshafiq.com",
      },
      image: teamImage,
    },
    {
      name: "Sana Qureshi",
      title: "Outreach Coordinator",
      fields: ["Partnerships", "Field Communication"],
      contact: {
        email: "sana.qureshi@example.com",
      },
      image: teamImage,
    },
    {
      name: "Bilal Hassan",
      title: "Technical Support",
      fields: ["Systems", "Infrastructure"],
      contact: {
        email: "bilal.hassan@example.com",
      },
      image: teamImage,
    },
    {
      name: "Ayesha Malik",
      title: "Policy Analyst",
      fields: ["Data Policy", "Governance"],
      contact: {
        email: "ayesha.malik@example.com",
      },
      image: teamImage,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-12 text-center">
        <h2 className="font-manrope text-3xl font-semibold text-[#192451] md:text-[48px]">
          The Team
        </h2>
        <p className="font-Inter mx-auto mt-4 max-w-xl text-[14px] font-normal text-[#192451] md:text-[16px]">
          Our depth of work is informed by range of experts in diverse fields to
          advise on narrow specific challenges in their respective areas.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="font-manrope mb-8 text-center text-3xl font-semibold text-[#192451] md:text-[48px]">
          CORE MEMBERS
        </h2>

        <div className="flex flex-wrap gap-1 gap-y-12 md:justify-center md:gap-x-10">
          {coreMembers.slice(0, 5)?.map((member, index) => (
            <div
              key={index}
              className="flex max-w-[calc(50%-2px)] flex-col items-start md:max-w-[380px]"
            >
              <div className="relative h-[200px] w-full overflow-hidden rounded-[8px] [clip-path:polygon(40px_0%,100%_0%,100%_100%,0%_100%,0%_40px)] md:h-[433px] md:w-[388px] md:rounded-xl md:[clip-path:polygon(100px_0%,100%_0%,100%_100%,0%_100%,0%_100px)]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover md:min-h-[330px]"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-manrope text-[14px] font-semibold text-[#262626] md:text-[24px] md:leading-normal">
                  {member.name}
                </h3>
                {member.title && (
                  <p className="text-[10px] font-normal text-[#262626] md:text-[16px] md:leading-[24px]">
                    {member.title}
                  </p>
                )}
                {member.role && (
                  <p className="font-manrope text-[10px] font-semibold text-[#262626] underline md:text-[16px]">
                    {member.role}
                  </p>
                )}
                <div className="mt-1 flex flex-wrap gap-2">
                  <p className="text-[9px] font-bold text-[#262626] md:text-[12px]">
                    Fields:
                  </p>{" "}
                  {member.fields.map((field, i) => (
                    <span
                      key={i}
                      className="rounded-[50px] bg-[#F5F5F5] px-2 py-1 text-[9px] text-[#262626] md:text-[12px]"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* OTHER MEMBERS */}
      <h2 className="font-manrope mb-8 text-center text-3xl font-semibold text-[#192451] md:text-[48px]">
        Fellow Members
      </h2>

      {/* First row: 3 cards */}
      <div className="flex flex-wrap gap-1 gap-y-12 md:justify-center md:gap-x-10">
        {otherMembers.slice(0, 5)?.map((member, index) => (
          <div
            key={index}
            className="flex max-w-[calc(50%-2px)] flex-col items-start md:max-w-[380px]"
          >
            <div className="relative h-[200px] w-full overflow-hidden rounded-[8px] [clip-path:polygon(40px_0%,100%_0%,100%_100%,0%_100%,0%_40px)] md:h-[433px] md:w-[388px] md:rounded-xl md:[clip-path:polygon(100px_0%,100%_0%,100%_100%,0%_100%,0%_100px)]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover md:min-h-[330px]"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-manrope text-[14px] font-semibold text-[#262626] md:text-[24px] md:leading-normal">
                {member.name}
              </h3>
              {member.title && (
                <p className="text-[10px] font-normal text-[#262626] md:text-[16px] md:leading-[24px]">
                  {member.title}
                </p>
              )}
              {member.role && (
                <p className="font-manrope text-[10px] font-semibold text-[#262626] underline md:text-[16px]">
                  {member.role}
                </p>
              )}
              <div className="mt-1 flex flex-wrap gap-2">
                <p className="text-[9px] font-bold text-[#262626] md:text-[12px]">
                  Fields:
                </p>{" "}
                {member.fields.map((field, i) => (
                  <span
                    key={i}
                    className="rounded-[50px] bg-[#F5F5F5] px-2 py-1 text-[9px] text-[#262626] md:text-[12px]"
                  >
                    {field}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSectionSecond;
