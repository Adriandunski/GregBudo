import {storage} from "@/utils/firebase";
import {getDownloadURL, listAll, ref} from "@firebase/storage";

export async function getImage(imageUrl: string) {

    const imageRef = ref(storage, imageUrl);

    const url = await getDownloadURL(imageRef);

    return url;
}

export async function getListOfFolder(folderPath: string) {
    const imageRef = ref(storage, folderPath);

    const data = await listAll(imageRef);

    const folders = data.prefixes.map((prefix) => prefix.fullPath);

    return folders.length;
}