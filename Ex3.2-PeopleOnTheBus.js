let number = function(busStops){
  let peopleIn = 0;
  let peopleOut = 0;
    for (let i=0; i<busStops.length; i++) {
        peopleIn += busStops[i][0];
        peopleOut += busStops[i][1];
  }
  return peopleIn - peopleOut;
}



console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))