var carFleet = function(target, position, speed) {    
    var array = position.map((pos, index) => {
        return {
            position: pos,
            time: (target - pos) / speed[index]
        };
    }).sort((a, b) => {
        return a.position - b.position;
    });
     
    var i = array.length - 1;
    var j = i - 1;
    var count = 1;
    while(j >= 0) {
        if(array[j].time > array[i].time) {
            i = j;
            count++;
        }
        j--;
    }
    return count;
 };