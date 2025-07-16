import React from "react";
// import { team } from "@/static/static-elements";
import { TeamMember } from "@/types/team";
import MemberBox from "../cards/MemberBox";

type TeamMemberListProps = {
  	members: TeamMember[];
};

const TeamSection: React.FC<TeamMemberListProps> = ({ members = [] }) => {
  	return (
    	<section className="mx-auto max-w-7xl px-[10px] py-16 md:px-4">
      		<div className="mb-12 text-center">
        		<h2 className="font-manrope text-3xl font-semibold text-[#192451] md:text-[48px]">
          			The Team
        		</h2>
				<p className="font-Inter mx-auto mt-4 max-w-xl text-[14px] font-normal text-[#192451] md:text-[16px]">
					Our depth of work is informed by range of experts in diverse fields to
					advise on narrow specific challenges in their respective areas.
				</p>
      		</div>

      		<div className="flex flex-wrap gap-1 gap-y-12 md:justify-center md:gap-x-10">
				{members.length > 0 && (
					<>
						{members.map((member, index) => (
							<div key={index}>
								<MemberBox
									member={member} 
								/>
							</div>
						))}
					</>
				)}
      		</div>
    	</section>
  	);
};

export default TeamSection;
