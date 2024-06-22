import AdminSignin from "../../components/AdminSignin"


export default function page() {
    

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen gap-4">

            <h1 className="text-white text-[32px] font-bold">Admin Login</h1>
            
            <AdminSignin/>
        </div>
    )
}