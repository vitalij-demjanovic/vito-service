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
        <div>
            <Logo/>
            <nav>
                {
                    links.map((link, index) =>
                    <Link key={index} href={link.link} className='flex items-center'>
                        <Image src={link.icon} width={40} height={40} alt='nav'/>
                        <span className='ml-3.5'>{link.label}</span>
                    </Link>
                    )
                }
            </nav>
        </div>
    );
}