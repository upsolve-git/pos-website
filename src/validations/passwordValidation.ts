export const isPasswordValid: (password: string)=>string[] = (password)=>{
    let errors = []

    if (password.length < 8) {
        errors.push('Minimum 8 characters required.');
    }
    if (!/[A-Z]/.test(password)) {
        errors.push('At least one uppercase letter required.');
    }
    if (!/[a-z]/.test(password)) {
        errors.push('At least one lowercase letter required.');
    }
    if (!/[0-9]/.test(password)) {
        errors.push('At least one digit required.');
    }
    
    return  errors;
}