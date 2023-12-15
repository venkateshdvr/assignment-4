var names=new Array();
names=["Yakoov","yash","Venkat","Yawar","yama","Yuva","jithin","subbu","ram","tharun","vikranth","Yasir","Yuvi"];
for(var i=0;i<names.length;i++){
    if(names[i].charAt(0)=="Y"||names[i].charAt(0)=="y"){
        console.log("Goodbye "+ names[i]);
    }
    else{
        console.log("Hello "+ names[i]);
    }
}