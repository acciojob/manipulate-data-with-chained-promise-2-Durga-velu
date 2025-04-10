//your JS code here. If required.


let arr[1,2,3,4]

let myPromise= new promise((resolve, reject)=>{

   setTimeout((resolve)=>{
	   arr.filter((array)=>{array%2==0;});
   },1000);

	
})
let myPromise2= new promise((resolve, reject)=>{
let multi=[]
   setTimeout((resolve)=>{
	   arr.filter((array)=>{
		   if(array%2==0){
			 return  multi.push(array*2)
		   }
		   return multi
	   });
   },2000);

	
})

myPromise.then((ans)=>{
	document.getElementById("input").innerText=ans;
	return myPromise2();
	
}).then((res)=>{
	document.getElementById("input").innerText=res;
})



