import appFireBase from "@/utils/firebase";
import { executeQuery } from "firebase/data-connect";
import {
    getRealizacjaRef,
    ListOpinieData,
    listOpinieRef,
    ListRealizacjeData,
    listRealizacjeRef
} from "@firebasegen/default-connector";

export async function getOpinions(): Promise<ListOpinieData> {
    const app = appFireBase;
    const ref = listOpinieRef();
    const {data} = await executeQuery(ref);

    return data;
}

export async function getListRealizacje(): Promise<ListRealizacjeData> {
    const app = appFireBase;
    const ref = listRealizacjeRef();
    const {data} = await executeQuery(ref);

    return data;
}

export async function getRealizacja(typ: string) {
    const app = appFireBase;
    const ref = getRealizacjaRef({typ: typ});
    const {data} = await executeQuery(ref);

    return data.realizacjas[0];
}