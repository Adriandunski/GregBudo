import Link from "next/link";
import Image from "next/image";

export default function MainFooter() {
    return (
        <div className={'flex flex-col text-white'}>
            <div className={'flex flex-col-reverse px-10 py-16 lg:flex-row bg-neutral-800 gap-3 lg:gap-10'}>
                <div className={'flex flex-col items-end basis-2/6 lg:basis-1/6 gap-4'}>
                    <Image src={'/logoWeb.png'} alt={'Logo Gregbudo'} width={150} height={150}/>
                    <div className={'flex flex-row gap-3'}>
                        <Image src={'/icons/logo-google.svg'} alt={'Kontakt google'} width={30} height={30}/>
                        <Image src={'/icons/logo-facebook.svg'} alt={'Kontakt facebook'} width={30} height={30}/>
                        <Image src={'/icons/mail.svg'} alt={'Kontakt google'} width={30} height={30}/>
                        <Image src={'/icons/call.svg'} alt={'Kontakt google'} width={30} height={30}/>
                    </div>
                </div>
                <div className={'flex lg:basis-5/6 justify-around lg:justify-start'}>
                    <div className={'mx-7 md:m-0 flex flex-row justify-between md:justify-around flex-wrap w-full   gap-10 md:gap-3 lg:gap-5'}>
                        <div className={'flex flex-col gap-3'}>
                            <L_5 href={''}>Usługi</L_5>
                            <div className={'flex flex-col'}>
                                <P_5>Remonty kuchni</P_5>
                                <P_5>Remonty łazienke</P_5>
                                <P_5>Hydraulika</P_5>
                                <P_5>Elektryka</P_5>
                                <P_5>Domku letniwsko</P_5>
                                <P_5>Remonty kuchni</P_5>
                            </div>
                        </div>
                        <div className={'flex flex-col gap-3'}>
                            <L_5 href={''}>Realizacje</L_5>
                            <div className={'flex flex-col'}>
                                <P_5>Kuchnie</P_5>
                                <P_5>Łazienki</P_5>
                                <P_5>Zadaszenia</P_5>
                                <P_5>Domki letniskowe</P_5>
                            </div>
                        </div>
                        <div className={'flex flex-col gap-3'}>
                            <L_5 href={''}>Godziny otwarcia</L_5>
                            <div className={'flex flex-col'}>
                                <div className={'flex flex-row justify-between'}>
                                    <S_5>Pon-Pt</S_5>
                                    <S_5>8:00 - 18:00</S_5>
                                </div>
                                <div className={'flex flex-row justify-between'}>
                                    <S_5>Sob</S_5>
                                    <S_5>8:00 - 16:00</S_5>
                                </div>
                                <div className={'flex flex-row justify-between'}>
                                    <S_5>Ndz</S_5>
                                    <S_5>Nieczynne</S_5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div*/}
            {/*    className={'bg-orangeMain -z-10 -mt-5 flex flex-row justify-center gap-10 px-3 pb-3 pt-8 text-white font-AdventPro text-lg font-medium'}>*/}
            {/*    <ButtonStopkaDol nazwa={'Strona główna'} href={''}/>*/}
            {/*    <ButtonStopkaDol nazwa={'O nas'} href={''}/>*/}
            {/*    <ButtonStopkaDol nazwa={'Usługi'} href={''}/>*/}
            {/*    <ButtonStopkaDol nazwa={'Opinie'} href={''}/>*/}
            {/*    <ButtonStopkaDol nazwa={'Realizacje'} href={''}/>*/}
            {/*</div>*/}
        </div>
    );
}

function ButtonStopkaDol({nazwa, href}: { nazwa: string, href: string }) {
    return (
        <Link href={href}>{nazwa}</Link>
    );
}

function L_5({children, href}: { children: string, href: string }) {
    return (
        <Link href={href} className={'font-AdventPro font-medium text-2xl'}>
            {children}
        </Link>
    );
}

function P_5({children}: { children: string }) {
    return (
        <p className={'font-AdventPro text-lg'}>
            {children}
        </p>
    );
}

function S_5({children}: { children: string }) {
    return (
        <span className={'font-AdventPro text-lg'}>
            {children}
        </span>
    );
}