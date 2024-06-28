async function bubbleSort(){
    console.log("bubble sort called");
    let a= document.querySelectorAll(".bar");
    let i, j;
    let n= a.length;
    for(i=0; i<n-1; i++){
        for(j=0; j<n-1-i; j++){
            //comparison color
            a[j].style.background= "red";
            a[j+1].style.background= "red";

            if(parseInt(a[j].style.height) > parseInt(a[j+1].style.height)){
                await time_gap();
                swap(a[j], a[j+1]);
                // swap colors
                a[j].style.background= "blue";
                a[j+1].style.background= "blue";
            }
            // to show the swap colours
            await time_gap();
            //temporary positions found
            a[j].style.background= "yellow";
            a[j+1].style.background= "yellow";

            
        }
        //suitable position found
        a[n-i-1].style.background= "green";
    }
    //last remaining is at suitable position
    a[0].style.background= "green";
}