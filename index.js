const barOfNextRound = 4; //polfinal = 30, final = 10
const pauseTimeAtBottomTop = 500; 
function generateTabel() {
  const tabelaDisplay = document.getElementById("grid-container");
  var contestants = [
    {
      name: "Michal Gmaj",
      czas: ['2018-11-24T00:05:31.030Z', '2018-11-24T00:00:00.002Z'],
      suma: 0,
    },
    {
      name: "Damian Gmajowski",
      czas: ['2018-11-24T00:05:31.032Z', 0],
      suma: 0,
    },
    {
      name: "Kajetan Gmajek",
      czas: ['2018-11-24T00:05:31.032Z', 0],
      suma: 0,
    },
    {
      name: "Basia Gmajkowska",
      czas: ['2018-11-24T00:05:31.032Z', 0],
      suma: 0,
    },
    {
      name: "Darek Gmajujek",
      czas: ['2018-11-24T00:05:31.032Z', 0],
      suma: 0,
    },
    {
      name: "Marcin Najman",
      czas: ['2018-11-24T00:05:31.032Z', 0],
      suma: 0,
    },
    {
      name: "Tymek Nienajman",
      czas: ['2018-11-24T00:05:31.012Z', 0],
      suma: 0,
    },
    {
      name: "Adam Smasher",
      czas: ['2018-11-24T00:05:31.022Z', 0],
      suma: 0,
    },
  ];
  var maxTimeOfObject, minTimeOfObject, visitedMax = false, visitedMin = false;
  var timeSum = new Date(0, 0, 0, 0, 0, 0, 0);
  for (object of contestants) {
    maxTimeOfObject = maxTime(object.czas);
    minTimeOfObject = minTime(object.czas);
    visitedMax = false;
    visitedMin = false; 
    timeSum = 0;
    for (times of object.czas) {
      if(times != 0){
        timeSum += Date.parse(times);
        //   if ((Date.parse(times) != maxTimeOfObject || visitedMax == true) && (Date.parse(times) != minTimeOfObject || visitedMin == true))
        //     timeSum += Date.parse(times);
        // else{
        //   if(Date.parse(times) == maxTimeOfObject && visitedMax == false) visitedMax == false;
        //   else if(Date.parse(times) == minTimeOfObject && visitedMin == false) visitedMin == false;
        // }
      }
    }
    object.suma = timeSum;
  }

  sortByPropertyDesc(contestants, "suma");

  var tempMins, tempSecs, tempMilisecs, tempMilisecs2, tmpWhichRow = 1;

  for (const object of contestants) {
    timeSum = 0;
    var tempContainerCreator = document.createElement("div");
    tempContainerCreator.classList.add("row-container");
      var tempCreator = document.createElement("div");//imie
      tempCreator.classList.add("grid-item");
      tempCreator.innerHTML = object.name.split(" ")[0];
      tempContainerCreator.appendChild(tempCreator);

      tempCreator = document.createElement("div");//nazwisko
      tempCreator.classList.add("grid-item");
      tempCreator.innerHTML = object.name.split(" ")[1];
      tempContainerCreator.appendChild(tempCreator);

      for (times of object.czas) {//czasy
        tempCreator = document.createElement("div");
        tempCreator.classList.add("grid-item");
        if (times != 0) {
            tempMins = new Date(times).getMinutes();
            tempSecs = new Date(times).getSeconds();
            tempMilisecs = new Date(times).getMilliseconds();
            if(tempMins < 10)
                tempMins = "0" + new Date(times).getMinutes();
            if(tempSecs < 10)
                tempSecs = "0" + new Date(times).getSeconds();
            if(tempMilisecs < 100)
                tempMilisecs = "0" + new Date(times).getMilliseconds();
            if(tempMilisecs < 10)
                tempMilisecs = "00" + new Date(times).getMilliseconds();

          tempCreator.innerHTML = tempMins  + ":" + tempSecs + "." + tempMilisecs;
        } else tempCreator.innerHTML = "-";
        tempContainerCreator.appendChild(tempCreator);
      }

      tempCreator = document.createElement("div");//sumy czasow
      tempCreator.classList.add("grid-item");
        tempMins = new Date(object.suma).getMinutes();
        tempSecs = new Date(object.suma).getSeconds();
        tempMilisecs2 = new Date(object.suma);
        tempMilisecs = tempMilisecs2.getMilliseconds();
        if(tempMins < 10)
            tempMins = "0" + new Date(object.suma).getMinutes();
        if(tempSecs < 10)
            tempSecs = "0" + new Date(object.suma).getSeconds();
         if(tempMilisecs < 100)
             tempMilisecs = "0" + tempMilisecs2.getMilliseconds();
         if(tempMilisecs < 10)
             tempMilisecs = "00" + new Date(times).getMilliseconds();
        
      tempCreator.innerHTML = tempMins + ":" + tempSecs + "." + tempMilisecs;
      tempContainerCreator.appendChild(tempCreator);
      tabelaDisplay.appendChild(tempContainerCreator);
      if(tmpWhichRow == barOfNextRound){
        tempContainerCreator = document.createElement("div");
        tempContainerCreator.classList.add("bar-row-container");
        tempCreator = document.createElement("div");
        tempCreator.classList.add("grid-item");
        tempCreator.innerHTML = 'Próg';
        tempContainerCreator.appendChild(tempCreator);
        tabelaDisplay.appendChild(tempContainerCreator);
      }
      tmpWhichRow++;
    }
    //setTimeout(function() {scrollDown()}, pauseTimeAtBottomTop);
  }

function sortByPropertyDesc(array, prop) {
  return array.sort((a, b) => {
    if (a[prop] > b[prop]) {
      return 1;
    } else if (a[prop] < b[prop]) {
      return -1;
    } else {
      return 0;
    }
  });
}

function minTime(array){
  var result = 8640000000000000; 
  for(var i = 0; i < array.length; i++){
    if(Date.parse(array[i]) < result)
      result = Date.parse(array[i]);
  }
  return result; 
}
function maxTime(array){
  var result = -8640000000000000; 
  for(var i = 0; i < array.length; i++){
    if(Date.parse(array[i]) > result)
      result = Date.parse(array[i]);
  }
  return result; 
}

function scrollDown() {
  window.scrollBy({
      top: window.innerHeight, // Scroll down by the height of the viewport
      behavior: 'smooth', // Smooth scrolling
      duration: 2000 // Duration of smooth scrolling animation in milliseconds (2000ms = 2 seconds)
  });
  setTimeout(function() {scrollUp()}, pauseTimeAtBottomTop);
}

// Function to smoothly scroll up
function scrollUp() {
  window.scrollBy({
      top: -window.innerHeight, // Scroll up by the height of the viewport
      behavior: 'smooth', // Smooth scrolling
      duration: 2000 // Duration of smooth scrolling animation in milliseconds (2000ms = 2 seconds)
  });
  setTimeout(function() {scrollDown()}, pauseTimeAtBottomTop);
}
