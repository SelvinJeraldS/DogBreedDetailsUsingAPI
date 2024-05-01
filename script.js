function elements(tag,classname,id,text){
    const tags=document.createElement(tag);
    tags.classList=classname,
    tags.id=id,
    tags.innerText=text;
    return tags;

}


const getDetailsButton = document.getElementById("getDetails");

getDetailsButton.addEventListener("click",()=>{
    const breedInput=document.getElementById("breedname").value.toLowerCase();
   const res=fetch(`https://dog.ceo/api/breed/${breedInput}/images/random`)
.then((data)=> data.json())
.then((result)=>{
    const dogImgDiv = document.getElementById("dog-img");
    const img = document.createElement("img");
    img.src= result.message;
    img.classList.add("img-fluid");
    dogImgDiv.innerHTML="";
    dogImgDiv.appendChild(img);
})
.catch((error)=> console.error("Error fectching Data",error));



})

