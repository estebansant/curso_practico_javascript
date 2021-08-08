function calculateAverage(list){
    const addList = list.reduce(
        function (accumulatedValue = 0, newElement){
            return accumulatedValue + newElement;
        }
    );

    const listAverage = addList / list.length;
    return listAverage;
}

function calculateMedian(list){

    const orderList= list.sort(function(a, b) {
        return a - b;
    });

    const listMiddle = parseInt(orderList.length / 2);
    function itsPair(number){
        if (number % 2 === 0){
            return true;
        } else{
            return false;
        }
    }
    
    let median;
    
    if(itsPair(orderList.length)){
        const element1 = list[listMiddle -1];
        const element2 = list[listMiddle];
    
        const average1And2 = calculateAverage([
            element1,
            element2,
        ]);   
        median = average1And2; 
    } else{
        median = list[listMiddle];
    }
    return median;
}
