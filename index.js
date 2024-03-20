const barOfNextRound = 4; 

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

function generateTabel() {
  const tabelaDisplay = document.getElementById("grid-container");
  var contestants = [
    {
      name: "Michal Gmaj",
      czas1: ['2018-11-24T00:05:31.032Z', '2018-11-24T00:05:31.032Z'],
      suma: 0,
    },
    {
      name: "Damian Gmajowski",
      czas1: ['2018-11-24T00:05:31.032Z', 0],
      suma: 0,
    },
    {
      name: "Kajetan Gmajek",
      czas1: ['2018-11-24T00:05:31.032Z', 0],
      suma: 0,
    },
    {
      name: "Basia Gmajkowska",
      czas1: ['2018-11-24T00:05:31.032Z', 0],
      suma: 0,
    },
    {
      name: "Darek Gmajujek",
      czas1: ['2018-11-24T00:05:31.032Z', 0], // dziala dla takiego formatu
      suma: 0,
    },
    {
      name: "Marcin Najman",
      czas1: ['2018-11-24T00:05:31.032Z', 0],
      suma: 0,
    },
    {
      name: "Tymek Nienajman",
      czas1: ['2018-11-24T00:05:31.012Z', 0],
      suma: 0,
    },
    {
      name: "Adam Smasher",
      czas1: ['2018-11-24T00:05:31.022Z', 0],
      suma: 0,
    },
  ];
  //przed wpisywaniem do DOMa musi być sortowanie tej tablicy na podstawie sumy czasow(najlepiej w milisekundach bo potem mozna szybko zamienic)
  var timeSum = new Date(0, 0, 0, 0, 0, 0, 0);
  for (object of contestants) {
    timeSum = 0;
    for (times of object.czas1) {
      if (times != 0) timeSum += Date.parse(times);
    }
    object.suma = timeSum; // mozliwe ze trzeba uzywac getTime() zeby dostac milisekundy
  }

  sortByPropertyDesc(contestants, "suma");

  var tempMins, tempSecs, tempMilisecs, tmpWhichRow = 1;

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

      for (times of object.czas1) {//czasy
        tempCreator = document.createElement("div");
        tempCreator.classList.add("grid-item");
        if (times != 0) {
            tempMins = new Date(times).getMinutes();
            tempSecs = new Date(times).getSeconds();
            tempMilisecs = new Date(times).getMilliseconds();
            if(tempMins < 10)
                tempMins = "0" + new Date(times).getMinutes()
            if(tempSecs < 10)
                tempSecs = "0" + new Date(times).getSeconds()

          tempCreator.innerHTML = tempMins  + ":" + tempSecs + "." + tempMilisecs;
        } else tempCreator.innerHTML = "-";
        tempContainerCreator.appendChild(tempCreator);
      }

      tempCreator = document.createElement("div");//sumy czasow
      tempCreator.classList.add("grid-item");
        tempMins = new Date(object.suma).getMinutes();
        tempSecs = new Date(object.suma).getSeconds();
        tempMilisecs = new Date(object.suma).getMilliseconds();
        if(tempMins < 10)
            tempMins = "0" + new Date(object.suma).getMinutes()
        if(tempSecs < 10)
            tempSecs = "0" + new Date(object.suma).getSeconds()
        
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
// jeszcze trzeba dodac custom liczbe czasow wsn przeszukiwanie tablicy od czas1 i sumowanie z sortem
/*const unixTimeZero = Date.parse('2024-04-19T00:05:31.022Z'); dzialajace displaying milliseconds
const javaScriptRelease = Date.parse('04 Dec 1995 00:12:00.02 GMT');
const d = new Date(unixTimeZero).getMilliseconds();

console.log(d);
// Expected output: 22

console.log(javaScriptRelease);
// Expected output: 818035920000*/