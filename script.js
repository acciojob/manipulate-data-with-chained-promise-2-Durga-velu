//your JS code here. If required.

const arr=[1, 2, 3, 4]

let myPromise= new Promise((resolve, reject)=>{

   setTimeout(()=>{
	   const fiteredArray=arr.filter((array)=>{array%2===0;});
	   resolve(fiteredArray)
   },1000);

	
})
let myPromise2= new Promise((resolve, reject)=>{
   setTimeout(()=>{
	const multi=   arr.filter((array)=> array%2===0).map((num)=>num*2);
	   resolve(multi)
   },2000);
});

myPromise.then((ans)=>{
	document.getElementById("output").innerText = ans.join(", ");
	return myPromise2;
	
}).then((res)=>{
	document.getElementById("output").innerText +=
		`\n${res.join(", ")}`;
});



