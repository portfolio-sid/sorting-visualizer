async function Merge(A, l, mid, h){
    console.log("merging");
    let i, j, k;
    let B= [];
    i= l, j=mid+1, k=l;
    while(i<=mid && j<=h){
        if(parseInt(A[i].style.height)<parseInt(A[j].style.height))
            B[k++]= A[i++].style.height;
        else
            B[k++]= A[j++].style.height;
    }
    while(i<=mid)
        B[k++]= A[i++].style.height;
    while(j<=h)
        B[k++]= A[j++].style.height;
        
    for(i=l; i<=h; i++){
        await time_gap();
        A[i].style.height= B[i];
    }
}



async function mergeSort(A, l, h){
    console.log("merge sort called");
    let mid;
    if(l<h){
        mid= Math.floor((l+h)/2);
        await mergeSort(A, l, mid);
        await mergeSort(A, mid+1, h);
        await Merge(A, l, mid, h);
    }
}
