var a=[20,10,40,25,20,10,23,80,80];
document.write("Given array is"+" "+[20,10,40,25,20,10,23,80,80]+"<br>");
var b=[];
a.sort();
let temporary;
for(let i=0;i<a.length;i++){
	if(a[i]!==temporary){
		b.push(a[i]);
		temporary=a[i];
	}
}
document.write(b);