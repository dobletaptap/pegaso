const $buttonRight = document.querySelector('#button-right')
const $buttonLeft = document.querySelector('#button-left')
const $galleryImage = document.querySelector('#gallery-image')
const $workDescription = document.querySelector('.c-work__description')
const $burgerButton = document.querySelector('#burger')
const $header = document.querySelector('.c-header')

const data = {
    images: ['work-1.jpg', 'work-2.jpg', 'work-3.jpg'],
    descriptions: ['Nos especializamos en consultorías, tratamientos de aguas, manejo de residuos.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, fuga?', 'Repellendus labore quidem dolor inventore iste rem.']
}

const getCurrentImageIndex = () => {
    const currentImage = $galleryImage.src.split('/img/')[1]
    const currentIndex = data.images.indexOf(currentImage)

    return currentIndex
}

const getCurrentDescriptionIndex = () => {
    const currentDescription = $workDescription.textContent
    const currentIndex = data.descriptions.indexOf(currentDescription)
    return currentIndex
}

const changeImage = order => {
    let index = getCurrentImageIndex()
    if (order === 'inc') {
        index++
        if( index < data.images.length) {
            $galleryImage.src = `./img/${data.images[index]}`
        } else {
            $galleryImage.src = `./img/${data.images[0]}`
        }
    } else if (order === 'dec') {
        index--
        if( index >= 0) {
            $galleryImage.src = `./img/${data.images[index]}`
        } else {
            $galleryImage.src = `./img/${data.images[data.images.length - 1]}`
        }
        
    }
}

const changeDescription = order => {
    let index = getCurrentDescriptionIndex()
    if (order === 'inc') {
        index++
        if( index < data.descriptions.length) {
            $workDescription.textContent = data.descriptions[index]
        } else {
            $workDescription.textContent = data.descriptions[0]
        }

    } else if (order === 'dec') {
        index--
        if(index >= 0) {
            $workDescription.textContent = data.descriptions[index]
        } else {
            $workDescription.textContent = data.descriptions[data.descriptions.length - 1]
        }
    } 
}

$buttonRight.addEventListener('click', () => {   
    changeImage('inc')
    changeDescription('inc')
})

$buttonLeft.addEventListener('click', () => {   
    changeImage('dec')
    changeDescription('dec')
})

$burgerButton.addEventListener('click', () => {
    $header.classList.toggle('c-header--active')
})

$header.addEventListener('click', event => {
    if (event.target.classList.contains('c-header__link')) {
        $header.classList.toggle('c-header--active')
    }
})

