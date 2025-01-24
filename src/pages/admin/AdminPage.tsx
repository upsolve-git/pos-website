import { useAdminPage } from "../../utils/hooks/useAdminPage";
import Menu from "../../ui/organisms/Admin/Menu";
import { AddSalonSection } from "../../ui/sections/Admin/AddSalonSection";
import SalonsTable from "../../ui/sections/Admin/SalonsTable";
import { dumsalons } from "../../constants/dumySalons";
import { useEffect, useState } from "react";
import { getAdminAuth } from "../../services/login";
import axios from "axios";
import { base_url } from "../../constants/routes";
import { useNavigate } from "react-router-dom";
interface AdminPageProps{}

const AdminPage: React.FC<AdminPageProps> = ()=>{
    const navigate = useNavigate();

    let [adminAuth, setAdminAuth] = useState<boolean>(false); 

    useEffect(() => {

        
        const getAuth = async() => {
            try {
                const authResponse = await axios.get(
                  base_url+"api/auth/isAdmin",
                  { withCredentials: true }
                );
                console.log(authResponse.data.role)
                const role = authResponse.data.role;
                if(role!=="admin") {
                // alert("You need to log in to book an appointment.");
                navigate("/auth/admin");
                setAdminAuth(false)
                return;
                }
                setAdminAuth(true)
              } catch (err: any) {
                // alert("You need to log in to book an appointment.");
                navigate("/auth/admin");
                setAdminAuth(false)
                return;
              }
        } 
        getAuth()
    })

    let {
        menuItems,
        selectedMenuItem,
        handleSelectedMenuItemChange
    } = useAdminPage()
    if(!adminAuth) {
            return <div>NOT AUTHORIZED</div>
    }
    return (
        <div className="flex flex-col h-screen">
            {/* <Navbar /> */}
            <div className="tablet:flex tablet:flex-grow">
                <Menu
                menuItems={menuItems}
                selectedMenuItem={selectedMenuItem}
                onClick={handleSelectedMenuItemChange}
                />

                <div className="flex-1 bg-secondary p-8">
                    <h2 className="text-lg text-center font-bold">{selectedMenuItem}</h2>
                    {
                        selectedMenuItem === "Show Salons" ? 
                        <SalonsTable 
                        salons={dumsalons}
                        />
                        : selectedMenuItem === "Add Salon" ? 
                        <AddSalonSection />
                        :<div></div>
                    }
                </div>
            </div>
        </div>
    )
    
    
}

export default AdminPage