const testimonials = [
    {
        name:"- Harry Charter",
        photoUrl: "img/alexander-hipp-iEEBWgY_6lA-unsplash.jpg",
        text: '"The service was excellent. I am really satisfied with my Apple. Apple is exactly what our business has been lacking. We were treated like royalty."'
    },
    {
        name:"- Lora G",
        photoUrl: "img/courtney-cook-TSZo17r3m0s-unsplash.jpg",
        text: '"The products are really great. I am really satisfied with my Apple. Apple is exactly what our business has been lacking. We were treated like royalty. Service was excellent."'
    },
    {
        name:"- Iliaana D",
        photoUrl: "img/vince-veras-AJIqZDAUD7A-unsplash.jpg",
        text: '"This is the best in the market.I am really satisfied with my Apple. Apple is exactly what our business has been lacking. Great service, best support team."'
    }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");


let idx = 0;

updateTestimonial();

function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    }, 10000)
}