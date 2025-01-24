import { useState, useEffect } from "react";
import { Category } from "../../interfaces/Category";
import { addCategoryReq, getCategoryReq } from "../../services/category";
import { addBestSellerReq, addNewSellerReq, addProductsReq, getProductsReq } from "../../services/product";
import { Product } from "../../interfaces/Product";
import { User } from "../../interfaces/User";
import { deleteFromUsersCartReq, getUsersCartReq, getUsersReq, updateUsersCartReq } from "../../services/login";
import { Cart } from "../../interfaces/Cart";
import { Color } from "../../interfaces/Color";


export const useAdminPage = ()=>{
    const menuItems = ["Add Salon", "Show Salons"];
    let [selectedMenuItem, setSelectedMenuItem] = useState<string>('') 
    let [category, setCategory] = useState<Category>({category_id:1, category_name:""})
    let [name, setName] = useState<string>('')
    let [description, setDescription] = useState<string>('')
    let [productType, setProductType] = useState<string>('')
    let [categoryName, setCategoryName] = useState<string>('')  
    let [price, setPrice] = useState<number>(1)
    let [discountedPrice, setDiscountedPrice] = useState<number>(1)
    let [discountedBusinessPrice, setDiscountedBusinessPrice] = useState<number>(1)

    let [categories, setCategories] = useState<Category[]>([]);
    let [files, setFiles] = useState<File[]>([])
    let [addProductsError, setAddProductsError]  = useState<string>('')
    let [products, setproducts] = useState<Product[]>([])
    let [users, setUsers] = useState<User[]>([])
    const [colors, setColors] = useState<Color[]>([]);


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (selectedFiles) {
            setFiles(prevFiles => [...prevFiles, ...Array.from(selectedFiles)]);
        }
    }

    const handleSelectedMenuItemChange = (item : string)=>{
        setSelectedMenuItem(item)
    }

    const handleAddColor = (colorObj: Color) => {
        setColors((prevColors) => [...prevColors, colorObj]);
      };

    const handleCategoryChange = ((category: Category )=>{
        setCategory(category)
    }) 

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value)
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setDescription(e.target.value)
    }

    const handleProductTypeChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setProductType(e.target.value)
    } 

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setPrice(Number(e.target.value))
    }

    const handleDiscountedPriceChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setDiscountedPrice(Number(e.target.value))
    }

    const handleDiscountedBusinessPriceChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setDiscountedBusinessPrice(Number(e.target.value))
    }

    const handleCategoryNameChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setCategoryName(e.target.value)
    } 

    const addCategoryHandler = async() => {
        await addCategoryReq(categoryName)
        .then(res => {
            console.log("Category updated")
        }).catch(err => {
            console.log(err)
        })
    } 

    const addProductHandler = async () => {
            console.log(name)
            console.log(files)
            console.log(productType)
            console.log(price)
            console.log(description)
            console.log(discountedPrice)
            console.log(category)
            console.log(colors)
        
            const newColors = category.category_name!== "Nail Polish" ? [{color_name:"NA", shade_name:"NA", code:"NA", color_id:0}] : colors;
            await addProductsReq({
                name: name,
                images: files!,
                type: productType,
                description: description,
                cost: price,
                discounted_price: discountedPrice,
                categoryId: [category.category_id],
                colors : newColors,
                discounted_business_price : discountedBusinessPrice
            })
            .then(res => {
                console.log("added product")
                setAddProductsError('false')
            }).catch (err => {
                setAddProductsError('Error occured')
                console.log("error in adding product : ", err)
            })
    };

    const getCategories = async() => {
        await getCategoryReq()
        .then( res => {
            setCategories(res.data)
        }
        ).catch (err => {
            console.log(err)
        })
    } 

    const getProducts = async() => {
        await getProductsReq()
        .then( res => {
            setproducts(res.data)
        }).catch (err => {
            console.log(err)
        })
    }



    const addBestSellerhandler = async(product_id : number) => {
        await addBestSellerReq(product_id)
        .then(res => {
            console.log("added best seller succesfully")

        }).catch(err => {
            console.log(err)
        }) 
    }

    const addNewSellerhandler = async(product_id : number) => {
        await addNewSellerReq(product_id)
        .then(res => {
            console.log("added new seller succesfully")
        }).catch(err => {
            console.log(err)
        }) 
    } 

    const getUsers = async() => {
        await getUsersReq()
        .then(res => {
            console.log(res.data)
            res.data.map((user: User) => (console.log("country id", user.country_code)))
            const formattedUsers = res.data.map((user: User) => ({
                email: user.email || '', 
                account_type: user.account_type || '',
                first_name: user.first_name || '',
                last_name: user.last_name || '',
                country_code: user.country_code || '',
                phone: user.phone || ''
            }));
            setUsers(formattedUsers);
        }).catch(err => {
            console.log(err)
        }) 
    } 
    
    return {menuItems, products, users,
        selectedMenuItem, handleSelectedMenuItemChange, handleFileChange, addProductsError, handleDiscountedBusinessPriceChange,
        category, handleCategoryChange, addCategoryHandler, categoryName, handleCategoryNameChange, discountedBusinessPrice,
        name, handleNameChange, description, handleDescriptionChange, productType, handleProductTypeChange, colors, handleAddColor,
        price, handlePriceChange, discountedPrice, handleDiscountedPriceChange, addProductHandler, categories, addBestSellerhandler, addNewSellerhandler
    }

}