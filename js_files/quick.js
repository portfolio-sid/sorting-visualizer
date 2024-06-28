async function partition(A, l, h){
    console.log("partition"); 
    let i= l-1;
    let j;
    for(j= l; j<=h-1; j++){
        if(parseInt(A[j].style.height)<parseInt(A[h].style.height)){
            i++;

            await time_gap();
            swap(A[i], A[j]);
        }
    }
    i++;
    
    await time_gap();
    swap(A[i], A[h]);
    
    
    return i; 
}

async function quickSort(A, l, h){
    console.log("quick sort called");
    if(l<h){
        let j= await partition(A,l,h);
        await quickSort(A,l,j-1);
        await quickSort(A,j+1,h);
    }
}