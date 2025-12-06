let ticketArr =[];

function addSeat(seat){


    ticketArr.push(seat);
}

function setAvailableSeats(){


let availableSeats = document.getElementById('availableSeats');
availableSeats.innerText=40-ticketArr.length;
}

function setSelectedSeatNumber (){
    let selectednumber= document.getElementById('selectednumber');
selectednumber.innerText=ticketArr.length;
}



function createnewdiv(seat){
  

let DivArea= document.getElementById('createdDivArea');
let newDiv= document.createElement('div');
newDiv.innerHTML=`
<p>${seat}</p>
<p>Economoy</p>
<p>550</p>
`
newDiv.classList.add('inter', 'text-[#03071299]', 'flex', 'justify-between', 'mb-4')
newDiv.id=`user-${seat}`;
DivArea.appendChild(newDiv);
}

function removeNewdiv(seat){
    let DivArea = document.getElementById('createdDivArea')
    let DivArealist = document.querySelectorAll('#createdDivArea div');
    for(const lis of DivArealist){
        if(lis.id==`user-${seat}`){
            let thatDiv=document.getElementById(`user-${seat}`);
            DivArea.removeChild(thatDiv);
        }
    }
    
}


function setSelectedSeatBg(seat){
   

    let selectedSeat= document.getElementById(seat);
    selectedSeat.classList.remove('bg-[#F7F8F8]','text-[#03071280]')
    selectedSeat.classList.add('bg-[#1DD100]', 'text-white')
}


function removeSelectedSeatBg(seat){
    let selectedSeat= document.getElementById(seat);
    selectedSeat.classList.remove('bg-[#1DD100]', 'text-white')
    selectedSeat.classList.add('bg-[#F7F8F8]','text-[#03071280]')
}

function setTotalPrice(){
    let totalPrice =550*ticketArr.length;
    document.getElementById('totalPrice').innerText=totalPrice;

}