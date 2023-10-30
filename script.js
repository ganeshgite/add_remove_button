const addfriend  = document.querySelector(".addfriend");
const status =  document.querySelector(".status");

let check  = 0

addfriend.addEventListener("click",function(){
    if(check ==0)
    {
        status.style.color="green"
        status.innerHTML="Friends"
        addfriend.innerHTML = "Remove Friend"
        check = 1
    }
    else
    {
        status.style.color="red"
        status.innerHTML="Stranger"
        addfriend.innerHTML = "Add Friend"

        check = 0
    }
   
})