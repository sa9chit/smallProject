let star = document.querySelectorAll(".fa-star");
let emoji = document.querySelectorAll(".fa-regular")
let ColorArr = ["green","yellow","orange","red","rgb(126, 4, 4)"]
star.forEach((value , index)=>{
  value.addEventListener("click",function(){
    star.forEach((val,ind)=>{
      if(index+1 > ind){
        val.classList.add("active")
      }else if(index < ind){
        val.classList.remove("active")
      }
    })
    emoji.forEach((emojis)=>{
      emojis.style.transform = `translateX(${-index * 50}px)`
      emojis.style.color = ColorArr[index]
    })
  })
})