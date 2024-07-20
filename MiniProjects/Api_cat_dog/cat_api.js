let btn =document.querySelector("button");
btn.addEventListener("click", async () => {
    let res = await getFacts();
    //console.log(res);
    let pa = document.querySelector("#para");
    pa.innerText = res;
    let link = await getImage();
    let img = document.querySelector("#dog");
    img.setAttribute("src",link);
});

let url = "https://catfact.ninja/fact";
let url2= "https://dog.ceo/api/breeds/image/random";

async function getFacts(){
    try{
        let result = await axios.get(url);
        return result.data.fact;
    } catch(e){
        console.log(e);
    }
}

async function getImage(){
    try{
        let link = await axios.get(url2);
        return link.data.message;
    } catch(e){
        console.log(e);
    }
}