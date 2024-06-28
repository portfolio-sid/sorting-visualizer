async function selectionSort(){
    console.log("selection sort called");
    const a= document.querySelectorAll(".bar");
    let i, j, k;
    const n= a.length;
    for(i=0; i<n-1; i++){
        k= i;
        //comparison color
        a[k].style.background= "red";
        for(j=i+1; j<n; j++){
            //comparison color
            a[j].style.background= "red";

            if(parseInt(a[j].style.height)<parseInt(a[k].style.height)){
                k= j;
            }
            // back to normal
            a[k].style.background= "yellow";
            a[j].style.background= "yellow";
        }
        a[k].style.background= "red";
        await time_gap();
        swap(a[i], a[k]);
        // color to show swap
        a[i].style.background= "blue";
        a[k].style.background= "blue";
        await time_gap();
        
        //correct position found
        a[i].style.background= "green";
    }
    //correct position found (last element)
    a[i].style.background= "green";
    
}