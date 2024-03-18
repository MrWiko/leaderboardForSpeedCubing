function generateTabel() {
    const tabelaDisplay = document.getElementById('grid-container');
    var contestants = [
        {
            name: "Michal Gmaj",
            czas1: [new Date(2018, 11, 24, 10, 2, 30, 0), 0,0]
        },
        {
            name: "Marcin Najman",
            czas1: [new Date(2018, 11, 24, 11, 3, 30, 0), 0,0]
        },
        {
            name: "Marcin Nienajman",
            czas1: [new Date(2018, 11, 24, 20, 4, 30, 0), 0,0]
        },
        {
            name: "Adam Smasher",
            czas1: [new Date(2018, 11, 24, 12, 5, 30, 0), 0, 0]
        }
    ]

    var timeSum = new Date(0, 0, 0, 0, 0, 0, 0);

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
                        timeSum += Date.parse(times);
                    }
                    else    
                        tempCreator.innerHTML = '-'; 
                    tabelaDisplay.appendChild(tempCreator);
                }
                const tempCreator = document.createElement('div');
                tempCreator.classList.add('grid-item'); 
                tempCreator.innerHTML = new Date(timeSum).getMinutes(); 
                tabelaDisplay.appendChild(tempCreator);
            }

        }
    }
}
// jeszcze trzeba dodac custom liczbe czasow wsn przeszukiwanie tablicy od czas1 i sumowanie z sortem 