let arr=[];
let x; 
function array_num(){
    for(let i=0; i<x; i++){
        arr.push(Math.floor(Math.random() * 200) + 1);
    }
}

function create_bars(){
    delete_bars();
    arr= [];
    x= document.getElementById("size").value;
    array_num();
    console.log(arr);
    for(let i=0; i<x; i++){
        var bar= document.createElement("div");
        bar.className= "bar";
        bar.style.height= `${arr[i]*2}px`;
        document.querySelector("#bars").appendChild(bar);

    }
}

function swap(a, b){
    console.log("Swaping");
    let temp= a.style.height;
    a.style.height= b.style.height;
    b.style.height= temp;
}

function delete_bars(){
    let b= document.querySelector("#bars");
    b.innerHTML= '';
}

function time_gap(){
    let timeout= document.querySelector("#speed").value;
    timeout= 300*timeout;
    return new Promise(resolve => {
        setTimeout(() => { resolve(' ')
            
        }, timeout);
    })
}

function enableBttns(){
    document.querySelector("#bubble").disabled= false;
    document.querySelector("#selection").disabled= false;
    document.querySelector("#insertion").disabled= false;
    document.querySelector("#quick").disabled= false;
    document.querySelector("#merge").disabled= false;
    document.querySelector("#size").disabled= false;
    document.querySelector("#newarr").disabled= false;
}

function disableBttns(){
    document.querySelector("#bubble").disabled= true;
    document.querySelector("#selection").disabled= true;
    document.querySelector("#insertion").disabled= true;
    document.querySelector("#quick").disabled= true;
    document.querySelector("#merge").disabled= true;
    document.querySelector("#size").disabled= true;
    document.querySelector("#newarr").disabled= true;
}

function color_green(){
    let a= document.querySelectorAll(".bar");
    for(var i=0; i<a.length; i++){
        a[i].style.background= "green";
    }
}