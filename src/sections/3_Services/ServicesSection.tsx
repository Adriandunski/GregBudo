import ContainerWeb from "@/components/ContainerWeb";
import Topic from "@/components/Topic/Topic";

export default function ServicesSection() {
    return(
        <section className={'flex flex-col relative -z-10'}>
            <div className={'-top-40 absolute w-full h-40 bg-orangeLight -z-10'}></div>
            <ContainerWeb idStr={'WhyUs'} className={'bg-orangeLight'}>
                <div className={'flex flex-row justify-start items-center'}>
                    <Topic name={'Usługi'}/>
                </div>
                <div className={'flex flex-col'}>
                    <div className={'flex flex-row gap-7'}>
                        <div className={'flex flex-col basis-1/3'}>
                            <div>Ikona</div>
                            <div>Malowanie i tapetowanie ścian</div>
                            <div>Oferujemy profesjonalne malowanie oraz tapetowanie ścian, gwarantując równą powierzchnię i trwałe wykończenie. Dobieramy kolory i materiały zgodnie z preferencjami klienta.</div>
                        </div>
                    </div>
                </div>
            </ContainerWeb>
        </section>
    )
}