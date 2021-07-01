document.addEventListener('DOMContentLoaded',() => {

    

    const cardArray =[
        {
            name : 'cap',
            img : '../assets/images/cap.png'
        },
        {
            name : 'cap',
            img : '../assets/images/cap.png'
        },
        {
            name : 'dr.strange',
            img : '../assets/images/dr.strange.png'
        },
        {
            name : 'dr.strange',
            img : '../assets/images/dr.strange.png'
        },
        {
            name : 'ironman',
            img : '../assets/images/ironman.jpg'
        },
        {
            name : 'ironman',
            img : '../assets/images/ironman.jpg'
        },
        {
            name : 'spiderman',
            img : '../assets/images/spiderman.jpg'
        },
        {
            name : 'spiderman',
            img : '../assets/images/spiderman.jpg'
        },
        {
            name : 'scarletwitch',
            img : '../assets/images/scarletwitch.png'
        },
        {
            name : 'scarletwitch',
            img : '../assets/images/scarletwitch.png'
        },
        {
            name : 'thor',
            img : '../assets/images/Thor.png'
        },
        {
            name : 'thor',
            img : '../assets/images/Thor.png'
        },
    ]

cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultsDisplay = document.querySelector('#results')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function createBoard(){
        for(let i = 0; i< cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src','../assets/images/marvel.jpeg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)

        }
    }

    function checkForMatch(){
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

    if(optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', '../assets/images/marvel.jpeg')
    cards[optionTwoId].setAttribute('src', '../assets/images/marvel.jpeg')
    alert('You found the superhero')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found the superhero.')
    cards[optionOneId].setAttribute('src', '../assets/images/white.jpg')
    cards[optionTwoId].setAttribute('src', '../assets/images/white.jpg')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
    } else {
    cards[optionOneId].setAttribute('src', '../assets/images/marvel.jpeg')
    cards[optionTwoId].setAttribute('src', '../assets/images/marvel.jpeg')
    alert('Sorry, superheros are busy with Nick Fury:/ try calling again.')
    }

        cardsChosen =[]
        cardsChosenId =[]
        resultsDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardsArray.length/2){
            resultDisplay.textContent = 'Congratulations! Now the superheros are on your team. Go save the world'
        }

    }

    function flipCard(){
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
        if(cardsChosen.length == 2){
            setTimeout(checkForMatch,500)
        }
    }

    createBoard()
});