import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import Head from "next/head";

const MainLayout = async ({
    children
}: {
        children: React.ReactNode;
}) => {
    return ( 
        <>
            <Head>
                <meta
                name="viewport"
                content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
                />
            </Head>
            <div className="h-full">
                <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
                    <NavigationSidebar />
                </div>
                <main className="md:pl-[72px] h-full">
                    {children}
                    </main>
            </div>
        </>
        
     );
}
 
export default MainLayout;