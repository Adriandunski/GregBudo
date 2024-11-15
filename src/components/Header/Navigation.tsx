import Link from "next/link";
import ContainerButtonNormal from "@/components/ContainerButtonNormal";
import ContainerButtonAkcent from "@/components/ContainerButtonAkcent";

export default function Navigation() {

    return(
        <nav className={'flex flex-row items-center justify-center gap-8'}>
            <ContainerButtonNormal>
                <Link href={'/'}>Strona Glówna</Link>
            </ContainerButtonNormal>

            <ContainerButtonNormal>
                <Link href={'/'}>Usługi</Link>
            </ContainerButtonNormal>

            <ContainerButtonNormal>
                <Link href={'/'}>O nas</Link>
            </ContainerButtonNormal>

            <ContainerButtonNormal>
                <Link href={'/'}>Opinie</Link>
            </ContainerButtonNormal>

            <ContainerButtonNormal>
                <Link href={'/'}>Realizacje</Link>
            </ContainerButtonNormal>

            <ContainerButtonAkcent>
                <Link href={'/'}>Kontakt</Link>
            </ContainerButtonAkcent>
        </nav>
    );
}