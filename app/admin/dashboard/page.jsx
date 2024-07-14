
import { redirect } from "next/navigation";
import { checkRole } from "../../utils/roles";
import { SearchUsers } from "./_search-users";
import { clerkClient } from "@clerk/nextjs/server";
import { setRole } from "./_actions";
import LandingHeader from "../../_components/LandingHeader";
import Chart from '../../_components/BarChart'
import Article from '../../_components/Article';
import OrderCard from '../../_components/OrderCard'


export default async function AdminDashboard(params) {
  
  if (!checkRole("admin")) {
    redirect("/");
  }

  const query = params.searchParams.search;

  const users = query ? (await clerkClient().users.getUserList({ query })).data : [];

  return (
    <>
    <LandingHeader />
    
    <div className="m-4 md:m-20 mt-16 md:mt-32">
      <h1 className="font-bold text-3xl">Admin Dashboard</h1>

      <div className="flex justify-evenly">
        <div className="flex flex-col">
          <Article/>
          <Chart/>
        </div>

        <div className="rounded-lg w-1/3 p-6 bg-gray-100 mt-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <OrderCard/>
        </div>
      </div>
    </div>
  </>
  );
}
