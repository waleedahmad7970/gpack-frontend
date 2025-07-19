import Link from "next/link";
import { SocialMedia, SocialMediaItem } from "@/types/social";
import {
  	FaFacebookF,
  	FaInstagram,
  	FaXTwitter,
  	FaLinkedinIn,
  	FaYoutube,
} from "react-icons/fa6";

type RightColumnProps = {
    socialMedia: SocialMedia[]
}

function showIcon(item: SocialMediaItem, index: number)
{
    switch(item.platform) {
        case 'facebook':
            return (
                <a 
                    href={item.url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebookF className="cursor-pointer hover:text-blue-500" />
                </a>
            );
        case 'twitter':
            return (
                <a 
                    href={item.url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaXTwitter className="cursor-pointer hover:text-black" />
                </a>
            )
        case 'linkedin':
            return (
                <a 
                    href={item.url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
                </a>
            )
        case 'youtube':
            return (
                <a 
                    href={item.url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaYoutube className="cursor-pointer hover:text-red-600" />
                </a>
            )
        case 'instagram':
            return (
                <a 
                    href={item.url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram className="cursor-pointer hover:text-pink-600" />
                </a>
            )
        default:
            return (
                <a 
                    href={item.url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram className="cursor-pointer hover:text-pink-600" />
                </a>
            )
    }
}

const RightColumn: React.FC<RightColumnProps> = ({ socialMedia }) => {
    return (
        <>
            <div className="flex w-full flex-col justify-between gap-7 space-y-6 text-sm font-medium md:flex-row md:space-y-0 lg:max-w-[450px] lg:items-start">
                <ul className="space-y-2 text-start">
                    <li className="text-[16px] leading-[24px] font-medium text-[#192451]">
                        <Link href="/about" className="hover:underline">
                            About Us
                        </Link>
                    </li>
                    <li className="text-[16px] leading-[24px] font-medium text-[#192451]">
                        <Link href="/whyUs" className="hover:underline">
                            What We Do
                        </Link>
                    </li>
                    <li className="text-[16px] leading-[24px] font-medium text-[#192451]">
                        <Link href="/publication" className="hover:underline">
                            Insights & Publications
                        </Link>
                    </li>
                    <li className="text-[16px] leading-[24px] font-medium text-[#192451]">
                        <Link href="/approach" className="hover:underline">
                            Themes
                        </Link>
                    </li>
                    <li className="text-[16px] leading-[24px] font-medium text-[#192451]">
                        <Link href="/contact" className="hover:underline">
                            Contact Us
                        </Link>
                    </li>
                </ul>

                {/* Hide duplicate social icons on mobile (already shown in left column) */}
                <div className="flex justify-start space-x-4 text-lg lg:justify-end">
                    {socialMedia
                        ?.filter((item): item is SocialMediaItem => !!item && !!item.url)
                        .map((item, index) => showIcon(item, index)
                    )}
                </div>
            </div>   
        </>
    );
};

export default RightColumn;