function calculateMode(list){
    const listCount = {};
   
    list.map(function (elemento) {
        if (listCount[elemento]) {
        listCount[elemento] += 1;
        } else {
        listCount[elemento] = 1;
        }
    });

    const listArray = Object.entries(listCount).sort(
        function (accumulatedValue, newElement){
            return accumulatedValue[1] - newElement[1];
        }
    );

    const mode = listArray[listArray.length - 1];
    return mode;
}