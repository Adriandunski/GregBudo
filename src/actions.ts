"use server";
import nodemailer from 'nodemailer';

export async function sendFormule(prevState: any, formData: FormData) {

    const email = formData.get('email');
    const tel = formData.get('telefon');
    const imie = formData.get('imie');
    const pliki: File[] = formData.getAll("pliki") as File[]; // Pobiera pliki z FormData
    const attachments = await Promise.all(
        pliki.map(async (plik) => (
            {
                filename: plik.name
                , content: Buffer.from(await plik.arrayBuffer())
                , contentType: plik.type
            })));

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.API_KEY,
        },
    });

    const message = {
        from: "adriandunski27@gmail.com",
        to: "adriandunski27@gmail.com",
        subject: "Nowe wiadomość",
        text: `aaa`,
        attachments: attachments
    }

    const info = await transporter.sendMail(message);
    console.log(info);


    // Możesz np. zapisać pliki na dysku lub przesłać do chmury
    return {success: true, message: "Pliki przesłane!"};
}