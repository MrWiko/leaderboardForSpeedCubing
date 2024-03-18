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
    const tabelaDisplay = document.getElementById('grid-container');
    var contestants = [
        {
            name: "Michal Gmaj",
            czas1: [new Date(2018, 11, 24, 10, 2, 30, 0), 0,0],
            suma: 0
        },
        {
            name: "Marcin Najman",
            czas1: [new Date(2018, 11, 24, 10, 3, 30, 0), 0,0],
            suma: 0
        },
        {
            name: "Marcin Nienajman",
            czas1: [new Date(2018, 11, 24, 10, 1, 30, 0), 0,0],
            suma: 0
        },
        {
            name: "Adam Smasher",
            czas1: [new Date(2018, 11, 24, 10, 5, 30, 0), 0, 0],
            suma: 0
        }
    ]
    //przed wpisywaniem do DOMa musi być sortowanie tej tablicy na podstawie sumy czasow(najlepiej w milisekundach bo potem mozna szybko zamienic)
    var timeSum = new Date(0, 0, 0, 0, 0, 0, 0);
    for(object of contestants){
        timeSum = 0; 
        for(times of object.czas1){
            if(times != 0)
                timeSum += Date.parse(times);
        }
        object.suma = timeSum;
    }

    sortByPropertyDesc(contestants, 'suma');

    for (const object of contestants){
        timeSum = 0;
        for(var i = 0; i < 4; i++){
            if(i == 0){
                const tempCreator = document.createElement('div');
                tempCreator.classList.add('grid-item'); 
                tempCreator.innerHTML = object.name.split(' ')[0];
                tabelaDisplay.appendChild(tempCreator);
            }
            else if(i == 1){
                const tempCreator = document.createElement('div');
                tempCreator.classList.add('grid-item'); 
                tempCreator.innerHTML = object.name.split(' ')[1];
                tabelaDisplay.appendChild(tempCreator);
            }
            else if(i == 2){
                for(times of object.czas1){
                    const tempCreator = document.createElement('div');
                    tempCreator.classList.add('grid-item'); 
                    if(times != 0){
                        tempCreator.innerHTML = times.getMinutes(); 
                    }
                    else    
                        tempCreator.innerHTML = '-'; 
                    tabelaDisplay.appendChild(tempCreator);
                }
                const tempCreator = document.createElement('div');
                tempCreator.classList.add('grid-item'); 
                tempCreator.innerHTML = new Date(object.suma).getMinutes(); 
                tabelaDisplay.appendChild(tempCreator);
            }

        }
    }
}
// jeszcze trzeba dodac custom liczbe czasow wsn przeszukiwanie tablicy od czas1 i sumowanie z sortem 