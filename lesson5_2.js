const names=["Alice","Bob","Tiff","Bruce","Alice"];
const obj=names.reduce((prev,cur)=>{
    for (const ch of cur) {
        if(!prev[ch])
            prev[ch]=0
        prev[ch]++
    }
    return prev;
},{})