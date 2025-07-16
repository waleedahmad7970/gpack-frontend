import React from "react";
// import teamImage from "../../public/assets/icons/in-image.svg";
import { TeamMember } from "@/types/team";
import MemberBox from "../cards/MemberBox";

type TeamMemberListProps = {
    coreMembers: TeamMember[];
    fellowMembers: TeamMember[];
};

const TeamSection2: React.FC<TeamMemberListProps> = ({ coreMembers, fellowMembers }) => {
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
                    {coreMembers.map((member, index) => (
                        <div key={index}>
                            <MemberBox
                                member={member} 
                            />
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
                {fellowMembers.map((member, index) => (
                    <div key={index}>
                        <MemberBox
                            member={member} 
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection2;
