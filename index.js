function generateTabel() {
    const tabelaDisplay = document.getElementById('grid-container');
    var contestants = [
        {
            name: "Michal Gmaj",
            czas1: new Date(2018, 11, 24, 10, 33, 30, 0)
        },
        {
            name: "Marcin Najman",
            czas1: new Date(2018, 11, 24, 11, 33, 30, 0)
        },
        {
            name: "Marcin Nienajman",
            czas1: new Date(2018, 11, 24, 20, 33, 30, 0)
        },
        {
            name: "Adam Smasher",
            czas1: new Date(2018, 11, 24, 12, 33, 30, 0)
        }
    ]

    for (const object of contestants){
        for(var i = 0; i < 5; i++){
            const tempCreator = document.createElement('div');
            tempCreator.classList.add('grid-item'); 
            if(i == 0)
                tempCreator.innerHTML = object.name.split(' ')[0];
            else if(i == 1)
                tempCreator.innerHTML = object.name.split(' ')[1];
            else if(i == 2)
                tempCreator.innerHTML = object.czas1.getHours() + ":" + object.czas1.getMinutes();

            tabelaDisplay.appendChild(tempCreator);
        }
    }
}
// jeszcze trzeba dodac custom liczbe czasow wsn przeszukiwanie tablicy od czas1 i sumowanie z sortem 