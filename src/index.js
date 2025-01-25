import { loadMainPage } from "./mainpage.js";
import { loadMenuPage } from "./menu.js";
import "./styles.css"

loadMainPage()

let content = document.querySelector("#content")
let mainBtn = document.querySelector(".main")
let menuBtn = document.querySelector(".menu")

mainBtn.addEventListener('click',()=>{
  content.innerHTML = ""
  loadMainPage()
})

menuBtn.addEventListener('click',()=>{
  content.innerHTML = ""
  loadMenuPage()
})
