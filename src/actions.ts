"use server";
import nodemailer from 'nodemailer';

export async function sendFormule(prevState: any, formData: FormData) {

    console.log(process.env.EMAIL)
    // const transporter = nodemailer.createTransport({
    //     host: "smtp.gmail.com",
    //     port: 465,
    //     auth: {
    //         user: process.env.EMAIL,
    //         pass: process.env.API_KEY,
    //     },
    // });
    //
    // transporter.verify(function (error, success) {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log("Server is ready to take our messages");
    //     }
    // });

    // Obsługa przesyłania plików (np. zapis na dysku lub przesłanie do chmury)
    const email = formData.getAll("pliki"); // Pobiera pliki z FormData
    console.log("Email:", email);

    // Możesz np. zapisać pliki na dysku lub przesłać do chmury
    return { success: true, message: "Pliki przesłane!" };
}