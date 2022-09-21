let no=7;
let count=0;
for(let i=1;i<=no;i++){
	if(no%i==0){
		count++;
	}
}
if(count==2){
	console.log("Prime");
}else{
	console.log("Not a Prime");
}
