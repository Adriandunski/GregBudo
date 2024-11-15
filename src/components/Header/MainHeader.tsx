import Navigation from "@/components/Header/Navigation";
import Image from "next/image";

export default function MainHeader() {

    return(
        <header className={'sticky top-0 bg-greenMain z-50'}>
            <div className={'flex flex-row justify-between py-2 px-5'}>
                <div className={'flex flex-row items-center justify-center shrink-0'}>
                    <Image src={'/logoWeb.png'} alt={'logo GregBudo'} width={150} height={150} objectFit={'contain'}/>
                </div>
                <Navigation></Navigation>
            </div>
        </header>
    );
}