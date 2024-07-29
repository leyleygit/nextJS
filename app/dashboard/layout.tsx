import SideNav from "@/app/dashboard/sidenav/page";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="">
        <SideNav />
      </div>
      {/* flex-grow p-6 md:overflow-y-auto md:p-12 */}
      <div className="flex flex-1 ">{children}</div>
    </div>
  );
}
