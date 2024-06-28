async function insertionSort(){
    console.log("insertion sort called");
    const a= document.querySelectorAll(".bar");
    let i, j, k, x;
    const n= a.length;
    a[0].style.background= "green";
    for(i=1; i<n; i++){
        j= i-1;
        x= a[i].style.height;

        a[i].style.background= "red";

        await time_gap();

        while((j>-1) && parseInt(a[j].style.height)>parseInt(x)){
            a[j].style.background= "red";
            a[j+1].style.height= a[j].style.height;
            j--;

            await time_gap();

            for(k= i; k>=0; k--)
                a[k].style.background= "green";

        }
        a[j+1].style.height= x;
        a[i].style.background= "green";
    }
}