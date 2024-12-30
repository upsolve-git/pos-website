export const isEmailValid: (email:string)=>{res:boolean, err:string} = (email)=>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if(!emailRegex.test(email)){
        return {res: false, err: 'Enter valid email'}
    }
    return {res: true, err: 'Is a valid email'}
}