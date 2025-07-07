import type {Metadata} from "next";
import "./globals.css";
import MainHeader from "@/components/Header/MainHeader";
import PopupContextCenter from "@/components/PopupContextCenter";
import PopupButtomContext from "@/components/PopupButtomContext";
import MainFooter from "@/components/Footer/MainFooter";

export const metadata: Metadata = {
    title: "GregBudo firma remontowo-budowlana",
    description: "Działamy na rynku remontowo-budowlanym od lat, realizując projekty dla klientów indywidualnych i firm. Niezależnie od tego, czy potrzebujesz drobnego remontu, czy kompleksowej budowy – możesz na nas liczyć!",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="pl">
        <body
            className={`relative`}
        >
        <PopupContextCenter>
            <PopupButtomContext>
                <MainHeader></MainHeader>
                {children}
                <MainFooter/>
            </PopupButtomContext>
        </PopupContextCenter>
        </body>
        </html>
    );
}
