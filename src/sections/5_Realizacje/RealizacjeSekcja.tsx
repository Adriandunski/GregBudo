import ContainerWeb from "@/components/ContainerWeb";
import Topic from "@/components/Topic/Topic";
import KafelekRealizacje from "@/sections/5_Realizacje/KafelekRealizacje";
import {getListRealizacje} from "@/utils/repoDataConnect";

export default async function RealizacjeSekcja() {
    
    const realizacjeData = await getListRealizacje();


    return (
        <section className={'flex flex-col relative'}>
            <div className={'bg-orangeLight'}>
                <ContainerWeb idStr={'realizacje'} className={''}>
                    <div className={'flex flex-row justify-end items-center'}>
                        <Topic name={'Realizacje'}/>
                    </div>

                    <div className={'flex flex-row gap-x-5 gap-y-10 flex-wrap justify-center'}>
                        {realizacjeData.realizacjas.map((value, index) => <KafelekRealizacje key={index} realizacja={value}/>)}
                    </div>
                </ContainerWeb>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 224">
                <path fill="#F8F4E7" fillOpacity="1"
                      d="M0,224L26.7,197.3C53.3,171,107,117,160,106.7C213.3,96,267,128,320,154.7C373.3,181,427,203,480,208C533.3,213,587,203,640,176C693.3,149,747,107,800,122.7C853.3,139,907,213,960,218.7C1013.3,224,1067,160,1120,149.3C1173.3,139,1227,181,1280,181.3C1333.3,181,1387,139,1413,117.3L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
            </svg>
        </section>
    );
}