let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(item => {

    item.addEventListener("click", (e) => {

        const tar = e.currentTarget.classList;
        if(tar.contains('play')) {
            count++
        }else if(tar.contains('reverse')){

            count--
        }else{

            count  = 0;

        }
        value.textContent  = count;


    })
    
});