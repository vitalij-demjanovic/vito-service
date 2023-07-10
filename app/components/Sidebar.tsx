import HomeIcon from "@assets/images/home.svg";
import WarehouseIcon from "@assets/images/warehouse-solid.svg";
import Logo from "@/app/components/ui/Logo";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {

    const links = [
        { label: "Prehľad", link: "/home", icon: HomeIcon },
        { label: "Sklad", link: "/warehouse", icon: WarehouseIcon },
    ];

    return (
        <div className='bg-third h-screen rounded-r-xl p-5 group transition duration-3000 ease-out hover:ease-in'>
            <div className='mb-20 flex justify-center'>
                <Logo/>
            </div>
            <nav>
                {
                    links.map((link, index) =>
                    <Link key={index} href={link.link} className='flex justify-center items-center mb-10 cursor-pointer'>
                        <Image src={link.icon} width={40} height={40} alt='nav'/>
                        <span className='group-hover:ml-3.5 inline-block w-0 whitespace-nowrap overflow-hidden text-clip group-hover:w-full' >{link.label}</span>
                    </Link>
                    )
                }
            </nav>
        </div>
    );
}