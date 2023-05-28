console.log("script")

const Gallery = document.querySelectorAll('.gallery-img')
const mainContainer = document.querySelector('.main-container')

Gallery.forEach(Photo => {
    Photo.addEventListener('click' , ()=>{

        for (const item of Gallery) {
            if (item.className === 'gallery-img full') {
                item.classList.remove('full')
                Photo.classList.toggle('full')
            }
        }

        

        Photo.classList.add('full')
        console.log('click')
    })

    document.addEventListener( 'click', (e) => {
        const withinBoundaries = e.composedPath().includes(Photo);
     
        if ( ! withinBoundaries ) {
            Photo.classList.remove('full')
        }
    })
});
