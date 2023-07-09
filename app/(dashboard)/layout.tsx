import Sidebar from "@/app/components/Sidebar";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
        <div className='flex'>
            <Sidebar/>
            {children}
        </div>
    );
}
