let inputField= document.getElementById('inputCoupon')
    let grandTotal=document.getElementById('grandTotal');

inputField.addEventListener('input' ,function(event){
    let code =event.target.value;
    if((code=="NEW15")||(code=="Couple20")){
        document.getElementById('buttonCoupon').removeAttribute("disabled");
    }
});

let baton=document.getElementById('buttonCoupon');
baton.addEventListener('click',function(){
    grandTotal.innerText=Math.round((550*ticketArr.length)-(550*ticketArr.length)*15/100);

})


function addit(seat) {
    
    if(document.getElementById(seat).classList.contains('bg-[#1DD100]')){
        ticketArr.pop(seat);
        removeSelectedSeatBg(seat);
        removeNewdiv(seat);
        setAvailableSeats();
        setSelectedSeatNumber ();


        return;
    }
        if(ticketArr.length>=4){
    alert("You can not buy more than 4 tickets...!!");
    return;
}


addSeat(seat);

setTotalPrice();


setAvailableSeats();

setSelectedSeatNumber ();


createnewdiv(seat);

setSelectedSeatBg(seat);


}
