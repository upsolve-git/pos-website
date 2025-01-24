import { useAdminPage } from "../../utils/hooks/useAdminPage";
import Menu from "../../ui/organisms/Admin/Menu";
import { AddSalonSection } from "../../ui/sections/Admin/AddSalonSection";
import SalonsTable from "../../ui/sections/Admin/SalonsTable";
import { dumsalons } from "../../constants/dumySalons";

interface AdminPageProps{}

const AdminPage: React.FC<AdminPageProps> = ()=>{

    // let [adminAuth, setAdminAuth] = useState<boolean>(false); 

    // useEffect(() => {
    //     const getAuth = async() => {
    //         await getAdminAuth()
    //     .then(res => {
    //         setAdminAuth(true)
    //     })
    //     .catch(err => {
    //         setAdminAuth(false)
    //     })
    //     } 
    //     getAuth()
    // })

    let {
        menuItems,
        selectedMenuItem,
        handleSelectedMenuItemChange
    } = useAdminPage()
    // if(!adminAuth) {
    //         return <div>NOT AUTHORIZED</div>
    // }
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