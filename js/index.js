let productName = document.getElementById("productName")
let productCategory = document.getElementById("productCategory")
let productPrice = document.getElementById("productPrice") 
let productDescription = document.getElementById("productDescription")
let tableBody=document.getElementById("tableBody")
let searchProduct=document.getElementById("searchProduct")
let btnAdd=document.getElementById("btnAdd")


let productList;
if(localStorage.getItem("list")==null){
    "useStrict"
     productList=[]
}else{
    productList=JSON.parse(localStorage.getItem("list"))
    display(productList)
}

function addProduct(){
    if(isAdd==false){
        afterUpdate()
    }else{
        let obj={
            pName:productName.value,
            pCategory:productCategory.value,
            pPrice:productPrice.value,
            pDescription:productDescription.value,
        }
        
        productList.push(obj)
    }
    
    emptyInput()
    display(productList)
    regex()
    localStorage.setItem("list",JSON.stringify(productList))
}

function emptyInput(){
        productName.value=""
        productCategory.value=""
        productPrice.value=""
        productDescription.value=""
}

function display(term){
    let paper=""
    for(let i=0;i<term.length;i++){
        paper+=` <tr>
        <td>${i+1}</td>
        <td>${term[i].pName}</td>
        <td>${term[i].pCategory}</td>
        <td>${term[i].pPrice}</td>
        <td>${term[i].pDescription}</td>
        <td><button class="btn btn-primary" onclick="update(${i})"><i class="fa-solid fa-pen"></i></button></td>
        <td><button class="btn btn-danger" onclick="delet(${i})"><i class="fa-solid fa-trash"></i></button></td>
    </tr>`
    }
    tableBody.innerHTML=paper
}

function delet(index){
    productList.splice(index,1)
    display(productList)
    localStorage.setItem("list",JSON.stringify(productList))
}

function search(parameter){
    let searchList=[];
    for(let i=0;i<productList.length;i++){
        if(productList[i].pName.includes(parameter)){
            searchList.push(productList[i]);
            console.log(searchList);
        }
    }
    display(searchList)
}

let isAdd=true

let currentindex;

function update(index){
    currentindex=index
    productName.value=productList[index].pName
    productCategory.value=productList[index].pCategory
    productPrice.value=productList[index].pPrice
    productDescription.value=productList[index].pDescription
    btnAdd.innerHTML="Update Product"
    isAdd=false
}

function afterUpdate(){
    productList[currentindex].pName=productName.value
    productList[currentindex].pCategory=productCategory.value
    productList[currentindex].pPrice=productPrice.value
    productList[currentindex].pDescription=productDescription.value
    btnAdd.innerHTML="Add Product"
    isAdd=true
}

function regex(){
    let rege=/^[A-z][a-z]{5,10}$/
    let rege2=/^[A-z]{0-10}$/
    let rege3=/^[0-9]{3}egp$/
    let rege4=/^[A-z]/
    return(rege.test(productName.value),rege2.test(productCategory.value),rege3.test(productPrice.value),rege4.test(productDescription.value))
}



