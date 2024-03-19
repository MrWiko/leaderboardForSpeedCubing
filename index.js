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
    {//Date(year, month, day, hour, minute, seconds, miliseconds)
      name: "Michal Gmaj",
      czas1: [new Date(2018, 11, 24, 10, 2, 30, 0), 0, 0],
      suma: 0,
    },
    {
      name: "Marcin Najman",
      czas1: [new Date(2018, 11, 24, 10, 3, 30, 0), 0, 0],
      suma: 0,
    },
    {
      name: "Marcin Nienajman",
      czas1: [new Date(2018, 11, 24, 10, 1, 3, 0), 0, 0],
      suma: 0,
    },
    {
      name: "Adam Smasher",
      czas1: [new Date(2018, 11, 24, 10, 5, 30, 0), 0, 0],
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
    object.suma = timeSum;
  }

  sortByPropertyDesc(contestants, "suma");

  var tempMins, tempSecs, tempMilisecs;

  for (const object of contestants) {
    timeSum = 0;
    const tempContainerCreator = document.createElement("div");
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
            tempMins = times.getMinutes();
            tempSecs = times.getSeconds();
            tempMilisecs = times.getMilliseconds();
            if(tempMins < 10)
                tempMins = "0" + times.getMinutes()
            if(tempSecs < 10)
                tempSecs = "0" + times.getSeconds()

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
    }
  }

// jeszcze trzeba dodac custom liczbe czasow wsn przeszukiwanie tablicy od czas1 i sumowanie z sortem
