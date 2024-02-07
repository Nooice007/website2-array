const products = [{
            "title": "Nike",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
            "color": "#deaf01"
        },{
            "title": "Independent",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "https://images.pexels.com/photos/5657417/pexels-photo-5657417.jpeg",
            "color": "#554a33"
        },{
            "title": "Independent",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "https://images.pexels.com/photos/5657417/pexels-photo-5657417.jpeg",
            "color": "#554a33"
        },{
            "title": "Michael Kors",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
            "color": "#01322f"
        },{
            "title": "Independent",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "https://images.pexels.com/photos/5657417/pexels-photo-5657417.jpeg",
            "color": "#554a33"
        },{
            "title": "Nike",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
            "color": "#deaf01"
        },{
            "title": "Champion",
            "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
            "color":"#ff0000"
        }]


   // cardInfo4 = 
   // if(index === 3) return { title, text, image, color }
//console.log({ cardInfo4 })

//function bla(text) {
//    console.log(text || "hello")
//    return 5;
//}

//console.log(bla())


const container = document.querySelector('#container')
const previousButton = document.querySelector('button.previous')
const nextButton = document.querySelector('button.next')

container.removeChild(nextButton.parentNode)

const newCard = document.createElement('div')
newCard.id = 'card-4'
newCard.classList.add('card')
container.append(newCard)

const infoDiv = document.createElement('div')
newCard.append(infoDiv)

const header = document.createElement('h1')
infoDiv.append(header)

const paragraph = document.createElement('p')
infoDiv.append(paragraph)

container.append(nextButton.parentNode)


const displayPruduct = (card, cardInfo) => {

    card.style.backgroundImage = `url(${cardInfo.image}?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`
    card.style.color = cardInfo.color

    const h1 = card.querySelector('h1')
    h1.textContent = cardInfo.title

    const p = card.querySelector('p')
    p.textContent = cardInfo.text
}

const cards = document.querySelectorAll('.card')
// for(let i = 0; i < cards.length; i++) {
//     createCard(cards[i], products[i])
//}

let offset = 0

const updateCards = shift => {
    offset += shift || 0
    cards.forEach((card, index) => {
        const productIndex = (index + offset) % products.length
        displayPruduct (card, products[productIndex])
    })
}

updateCards(0)

previousButton.addEventListener('click', () => updateCards(-1))
nextButton.addEventListener('click', () => updateCards(1))



// // creating (=>)
// const greetings = (name) => `Hello ${name}!`
// console.log(greetings("Alex"))


// // Array
// const names = ["alex", "john", "ash", "tom", "jeff" ]
// names.push("Keanu")
// const names2 = [...names.slice(1,4), "Keanu"] 
// console.log(names)
// console.log(names[names.length - 1]) // or this one. used a lot

// console.log(names2)


// const upperCase = text => 
//     `${text.at(0).toUpperCase()}${text.slice(1).toLowerCase()}`

// names2.forEach(name => console.log(upperCase(name)))



// // adding to the array
// const [fav1, leastFav, fav2] = names
// console.log({fav1

// // split function 
// const sentence = 'this is a bunch of words.'
// const [first] = sentence.split(' ')
// console.log({ first })


// const printNames = (name1, name2) => {
//     console.log(name1)
//     console.log(name2)
// }
// printNames(names[0], names[1]);
// printNames(...names) // or like this -- called a spread operator 




// const input = "valentines Day"
// if('christmas', 'halloween', 'st.Patricks Days'.includes(input)){
//     console.log('found')
// }


