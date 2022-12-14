
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show-left');
        }
    })
})

const hiddenElement = document.querySelectorAll('.hidden-left');
hiddenElement.forEach((el) => observer.observe(el))

//-----------------------------------------------------------

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show-up');
        }
    })
})

const hiddenElement2 = document.querySelectorAll('.hidden-up');
hiddenElement2.forEach((el) => observer2.observe(el))

//-----------------------------------------------------------

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show-right');
        }
    })
})

const hiddenElement3 = document.querySelectorAll('.hidden-right');
hiddenElement3.forEach((el) => observer3.observe(el))