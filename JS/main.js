import {hungerSeries} from './hunger'
import {avengers} from './avenger'
import {Swiper} from './swiper'


console.log("hello")

// TOP-Banner 
const bannerEl = document.querySelector('.top-banner')
console.log(bannerEl)
const buttonEl = document.querySelector('.top-banner button')
console.log(buttonEl)
buttonEl.addEventListener('click', () => {
  bannerEl.style.display = 'none'
})

// INFO
const item1 = document.querySelectorAll('.info--bottom .item')[0]
const item2 = document.querySelectorAll('.info--bottom .item')[1]
const item3 = document.querySelectorAll('.info--bottom .item')[2]
const item4 = document.querySelectorAll('.info--bottom .item')[3]
const item5 = document.querySelectorAll('.info--bottom .item')[4]
const subEl1 = document.querySelector('.item--sub1')
const subEl2 = document.querySelector('.item--sub2')
const subEl3 = document.querySelector('.item--sub3')
const subEl4 = document.querySelector('.item--sub4')
const subEl5 = document.querySelector('.item--sub5')

item1.addEventListener('mouseover', () => {
  subEl1.style.display = 'flex'
})
item1.addEventListener('mouseleave', () => {
  subEl1.style.display = 'none'
})

item2.addEventListener('mouseover', () => {
  subEl2.style.display = 'flex'
})
item2.addEventListener('mouseleave', () => {
  subEl2.style.display = 'none'
})

item3.addEventListener('mouseover', () => {
  subEl3.style.display = 'flex'
})
item3.addEventListener('mouseleave', () => {
  subEl3.style.display = 'none'
})

item4.addEventListener('mouseover', () => {
  subEl4.style.display = 'flex'
})
item4.addEventListener('mouseleave', () => {
  subEl4.style.display = 'none'
})
item5.addEventListener('mouseover', () => {
  subEl5.style.display = 'flex'
})
item5.addEventListener('mouseleave', () => {
  subEl5.style.display = 'none'
})





// --- movies--- 
hungerSeries()
avengers()




