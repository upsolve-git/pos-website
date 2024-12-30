import Navbar from "../../ui/organisms/Navbar/BigNavbar";
import { useAdminPage } from "../../utils/hooks/useAdminPage";
import Menu from "../../ui/organisms/Admin/Menu";
import AddProducts from "../../ui/sections/AdminSection/AddProductsSection";
import AddCategory from "../../ui/sections/AdminSection/AddCategorySection";
import ProductPreviewListAdmin from "../../ui/organisms/ProductPreviewList/ProductPreviewListAdmin";
import UserList from "../../ui/organisms/UsersList/UsersList";
import { useEffect, useState } from "react";
import { getAdminAuth } from "../../services/login";
import Orders from "../../ui/sections/AdminSection/Orders";

interface AdminPageProps{}

const AdminPage: React.FC<AdminPageProps> = ()=>{

    let [adminAuth, setAdminAuth] = useState<boolean>(false); 

    useEffect(() => {
        const getAuth = async() => {
            await getAdminAuth()
        .then(res => {
            setAdminAuth(true)
        })
        .catch(err => {
            setAdminAuth(false)
        })
        } 
        getAuth()
    })

    let {
        menuItems,
        selectedMenuItem,
        handleSelectedMenuItemChange,
        category,
        handleCategoryChange,
        addCategoryHandler,
        name,
        productType,
        price,
        description,
        discountedPrice,
        handleDescriptionChange,
        handleDiscountedPriceChange,
        handleNameChange,
        handlePriceChange,
        handleProductTypeChange,
        addProductHandler,
        categories,
        categoryName,
        handleCategoryNameChange,
        handleFileChange,
        addProductsError,
        products,
        users,
        addBestSellerhandler,
        addNewSellerhandler,
        colors,
        handleAddColor,
        handleDiscountedBusinessPriceChange,
        discountedBusinessPrice
    } = useAdminPage()
    if(!adminAuth) {
            return <div>NOT AUTHORIZED</div>
    }
    return (
        <div className="flex flex-col h-screen">
            {/* <Navbar /> */}
            <div className="flex flex-grow">
                <Menu
                menuItems={menuItems}
                selectedMenuItem={selectedMenuItem}
                onClick={handleSelectedMenuItemChange}
                />

                <div className="flex-1 bg-secondary p-8">
                    <h2 className="text-lg text-center font-bold">{selectedMenuItem}</h2>
                    {selectedMenuItem === "Add Category" ? 
                    <AddCategory
                    category={categoryName}
                    setCategory={handleCategoryNameChange}
                    addCategory={addCategoryHandler}
                    success={false}
                    error={false}
                    />
                    : selectedMenuItem === "Add Products" ? 
                    <AddProducts
                    prodCostBusiness={discountedBusinessPrice}
                    setProdCostBusiness={handleDiscountedBusinessPriceChange}
                    colors={colors}
                    setColors={handleAddColor}
                    categories={categories}
                    prodName={name}
                    prodCategory={category}
                    prodDescription={description}
                    prodType={productType}
                    prodCost={price}
                    prodDiscountPercentage={discountedPrice}
                    setProdCategory={handleCategoryChange}
                    setProdCost={handlePriceChange}
                    setProdDescription={handleDescriptionChange}
                    setProdDiscountPercentage={handleDiscountedPriceChange}
                    setProdName={handleNameChange}
                    setProdType={handleProductTypeChange}
                    setFile={handleFileChange}
                    addProduct={addProductHandler}
                    error={addProductsError}
                    />
                    : selectedMenuItem === "Add Best Selling products" ? 
                    <ProductPreviewListAdmin products={products} onClick={addBestSellerhandler} />
                    : selectedMenuItem === "Add New Products" ? 
                    <ProductPreviewListAdmin products={products} onClick={addNewSellerhandler} />
                    : selectedMenuItem === "Users" ? 
                    <UserList users={users}/>
                    : selectedMenuItem === "Orders" ? 
                    <Orders/>
                    :<div></div>}
                </div>
            </div>
        </div>
    )
    
    
}

export default AdminPage