import Link from "next/link";

const BottomBar = () => {
    return (
        <div className="container mx-auto flex flex-col-reverse items-center justify-between px-4 py-4 text-[16px] leading-[24px] font-normal text-[#192451] md:flex-row">
            <span className="mt-3 md:mt-0">
                © 2025 GPAC. All rights reserved.
            </span>
            <div className="mt-2 flex flex-wrap justify-center gap-4 md:mt-0 md:justify-end">
                <Link href="#" className="underline hover:underline">
                    Privacy Policy
                </Link>
                <Link href="#" className="underline hover:underline">
                    Terms of Use
                </Link>
                <Link href="#" className="underline hover:underline">
                    Cookie Settings
                </Link>
            </div>
        </div>
    );
};

export default BottomBar;