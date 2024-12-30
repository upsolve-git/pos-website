export const getDaysGap: (oldDate: Date, newDate:Date)=>number = (oldDate, newDate)=>{
    let utc1 = Date.UTC(oldDate.getFullYear(), oldDate.getMonth(), oldDate.getDate());
    let utc2 = Date.UTC(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());

    let timeDiff = Math.abs(utc2 - utc1);

    let daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return daysDiff
}

export const getToday: ()=>Date = ()=>{
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    
    return new Date(year,month,day)
}