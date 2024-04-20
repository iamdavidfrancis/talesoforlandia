import { PropsWithChildren } from "react";
import Header from "./components/header";

export default function SubLayout({children}: PropsWithChildren) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}