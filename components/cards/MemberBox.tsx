import Image from "next/image";
import { BACKEND_URL } from "@/config/config";
import { TeamMember } from "@/types/team";

type MemberBoxProps = {
    member: TeamMember
}

const MemberBox: React.FC<MemberBoxProps> = ({ member }) => {
    return (
        <>
            <div className="relative h-[200px] w-full overflow-hidden rounded-[8px] [clip-path:polygon(40px_0%,100%_0%,100%_100%,0%_100%,0%_40px)] md:h-[433px] md:w-[388px] md:rounded-xl md:[clip-path:polygon(100px_0%,100%_0%,100%_100%,0%_100%,0%_100px)]">
                <Image
                    src={BACKEND_URL + '/' + member.photo_url}
                    alt={member.name}
                    fill
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="mt-4">
                <h3 className="font-manrope text-[14px] font-semibold text-[#262626] md:text-[24px] md:leading-normal">
                    {member.prefix + '.'} {member.name}	
                </h3>
                {member.designation && (
                    <p className="text-[10px] font-normal text-[#262626] md:text-[16px] md:leading-[24px]">
                        {member.designation}
                    </p>
                )}
                {member.expertise && (
                    <p className="font-manrope text-[10px] font-semibold text-[#262626] underline md:text-[16px]">
                        {member.expertise}
                    </p>
                )} 
                {member.fields.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-2">
                        <p className="text-[9px] font-bold text-[#262626] md:text-[12px]">
                            Fields:
                        </p>
                        {member.fields.map((field, i) => (
                            <span
                                key={i}
                                className="rounded-[50px] bg-[#F5F5F5] px-2 py-1 text-[9px] text-[#262626] md:text-[12px]"
                            >
                                {field.name}
                            </span>
                        ))}  
                    </div>
                )}
            </div>
        </>
    )
}

export default MemberBox;