//new array button
document.getElementById("newarr").addEventListener("click", create_bars);

//bubble sort button
document.getElementById("bubble").addEventListener("click", async function(){
    disableBttns();
    await bubbleSort();
    enableBttns();
});

//selection sort button
document.getElementById("selection").addEventListener("click", async function(){
    disableBttns();
    await selectionSort();
    enableBttns();
});

//insertion sort button
document.getElementById("insertion").addEventListener("click", async function(){
    disableBttns();
    await insertionSort();
    enableBttns();
});

//quick sort button
document.getElementById("quick").addEventListener("click", async function(){
    let a= document.querySelectorAll(".bar");
    disableBttns();
    await quickSort(a, 0, a.length-1);
    color_green();
    enableBttns();
});

//merge sort button
document.getElementById("merge").addEventListener("click", async function(){
    let a= document.querySelectorAll(".bar");
    disableBttns();
    await mergeSort(a, 0, a.length-1);
    color_green();
    enableBttns();
});


