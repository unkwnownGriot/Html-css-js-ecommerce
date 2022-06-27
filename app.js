const wrapper = document.querySelector('.sliderWrapper')
const menuItems = document.querySelectorAll('.menuItem')

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];


  let choosenProduct = products[0]
  const currentImgProduct = document.querySelector('.productImg')
  const currentProductTitle = document.querySelector('.productTitle')
  const currentProductPrice = document.querySelector('.price')
  const currentProductColors = document.querySelectorAll('.color')
  const currentProductSizes = document.querySelectorAll('.size')
  const productBtn = document.querySelector('.productBtn')
  const payment = document.querySelector('.payment')
  const close = document.querySelector('.close')

menuItems.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        wrapper.style.transform = `translateX(${index * -100}vw)`
        choosenProduct = products[index]
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$" + choosenProduct.price
        currentImgProduct.src = choosenProduct.colors[0].img
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    })
})


currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentImgProduct.src = choosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size,index)=>{
     size.addEventListener('click',()=>{
         currentProductSizes.forEach((size,index)=>{
            size.style.backgroundColor = "white"
            size.style.color = "black"
         })
         size.style.backgroundColor = "black"
         size.style.color = "white"
     })
})



productBtn.addEventListener('click',()=>{
  payment.style.display = "flex"
})

close.addEventListener('click',()=>{
  payment.style.display = "none"
})