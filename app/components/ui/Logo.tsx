import Image from "next/image";
import vito from "@assets/images/logoW.png";

export default function Logo() {
    return (
        <Image src={vito} width={50} height={50} alt='vito'/>
    );
}