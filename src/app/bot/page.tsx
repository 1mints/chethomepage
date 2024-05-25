import Image from "next/image";
import Navigation from "@/app/components/navigation/navigation.component";
import {Presentation} from "@/app/components/chat/presentation.component";

// temp:


export default function Chet() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-chetgpt-dark-bg">
             <Navigation/>
            <Presentation/>
        </main>
    );
}