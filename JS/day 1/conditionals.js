//if
//if else
//nested if else (eg:picknick)
//switch


//sg = 32 && 1032 && "19TU1A0508" ;//last one is asssigned
//sg = 32 || 1032 || "19TU1A0508" ;//first one is assigned

sg = [32, 1032, "19TU1A0508"]
console.log(typeof sg);
console.log(sg);
// if(true);

if(sg[0]==32)
{
    console.log("went to school");
    if(sg[1 ]==1032){
        console.log("went to intermediate");
        if(sg[2]=="19TU1A0508")
            console.log("went to b.tech");
    }

}else{
    console.log("NO");
}

for(i=0;i<50;i++)
{
    if(i%2!=0){
        continue
    }
    console.log(i);
}