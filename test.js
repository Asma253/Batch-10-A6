let currentPet = [];

const allPet = async() =>{
response = await fetch('https://openapi.programming-hero.com/api/peddy/pets')
data = await response.json();
displayAllPet(data.pets)

currentPet =data.pets;
displayAllPet(currentPet);

}
allPet();

const displayAllPet = (pets) =>{
    console.log(pets);
 const AllPetContainer = document.getElementById('all-pet-container')
AllPetContainer.innerHTML="";
 pets.forEach ((pet)=> {
    console.log(pet);
 const div = document.createElement('div');

    div.innerHTML =`
        <!-- single card demo start -->

<div id="Dog-Button-Container" class="border-2 shadow-2xl border-gray-300 rounded-3xl ">
<!-- card image start -->
<div class="m-5  ">
    <img class="w-56 h-36  rounded-3xl" src="${pet.image}" alt="" srcset="">
</div>
<!-- card image End -->
<!-- card description start  -->
<div class="m-5">
<h1 class="font-bold text-lg ">Mister Tartosh</h1>

<div class=" flex  opacity-70  ">
    <p class="font-base text-base  ">
        <i class="fa-solid fa-grip "></i>
Breed: ${pet.breed}</p>
</div>

<div class=" flex  opacity-70  ">
    <p class="font-base text-base  ">
        <i class="fa-regular fa-calendar"></i>
Birth: ${pet.date_of_birth?pet.date_of_birth:"Not Available"}</p>
</div>


<div class=" flex  opacity-70  ">
    <p class="font-base text-base  ">
        <i class="fa-solid fa-venus"></i>
Gender: ${pet.gender} </p>
</div>

<div class=" flex  opacity-70 border-b border-opacity-70 border-gray-500  ">
    <p class="font-base text-base  ">
   <i class="fa-solid fa-dollar-sign"></i>
Price : ${pet.price}$ </p>
</div>


<div class=" my-5">
    <button onclick="likeButton('${pet.image}')" class="btn  border-2 border-gray-400 bg-white">
        <i class="fa-regular fa-thumbs-up text-gray-500"></i>
    </button>

    <button onclick="congratulation()" class="btn  border-2 text-[#0E7A81] font-bold bg-white"> Adopt</button>
    <button onclick="detailsBtn('${pet.petId}')" class="btn  border-2 text-[#0E7A81] font-bold bg-white"> Details</button>

</div>

</div>

<!-- card description End -->
</div>
 `;

      AllPetContainer.appendChild(div);

 })}


 
 let likeImages =[];


 const likeButton = (image) =>{
console.log(likeButton);


if(likeImages.includes(image)){
return;
}
likeImages.push(image);

const likeButtonContainer = document.getElementById ('Like-Button-Container');

likeButtonContainer.innerHTML ="";

 likeImages.forEach((imgUrl) =>{


const img = document.createElement('img')
img.src = imgUrl;
img.className = "w-full h-20  aspect-square object-cover  rounded-xl"


likeButtonContainer.appendChild(img);
 
 })

 }

const LoadCategory = async(category) =>{

    document.getElementById('spinning').classList.remove('hidden')

    document.getElementById('all-pet-container').classList.add('hidden')
    document.getElementById('Like-Button-Container').classList.add('hidden')

response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
data =  await response.json();


setTimeout(()=>{
     document.getElementById('spinning').classList.add('hidden')

    document.getElementById('all-pet-container').classList.remove('hidden')
    document.getElementById('Like-Button-Container').classList.remove('hidden')


   if (data.data.length === 0) {
            document.getElementById("all-pet-container").innerHTML = `
                <div class="col-span-3 flex flex-col justify-center items-center">
                    <img src="./images/error.webp">
                    <h1 class="font-bold text-2xl">No Information Available</h1>
                </div>
            `;
            return;
        }


console.log(data)
displayAllPet(data.data)
console.log(category)
},1000);

}


const detailsBtn = async(petId) =>{
    response = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
data = await response.json();

displayDetailsBtn(data.petData)
    
}

const displayDetailsBtn = (pet)=>{

    const oldModal = document.querySelector('.modal');
    if(oldModal){
        oldModal.remove();
    }

const modal = document.createElement('dialog');
modal.className="modal";
modal.innerHTML=`


  <div class="modal-box">

<!-- card image start -->
<div class="m-2 ">
    <img class="w-full h-52  rounded-md object-cover" src="${pet.image}" alt="" srcset="">
</div>
<!-- card image End -->

<!-- card description start  -->
<div class="m-5">
<h1 class="font-bold text-lg ">Mister Tartosh</h1>



<div class="flex flex-row gap-5 border-b-2 space-y-3">
<div class=" flex flex-col opacity-70  ">
    <p class="font-base text-base  ">
        <i class="fa-solid fa-grip "></i>
Breed: ${pet.breed}</p>

<p class="font-base text-base  ">
        <i class="fa-solid fa-venus"></i>
Gender: ${pet.gender} </p>

 <p class="font-base text-base  ">
         <i class="fa-solid fa-venus"></i>
Vaccinated status:${pet.vaccinated_status}</p>

</div>



<div class=" flex  flex-col opacity-70   ">
    <p class="font-base text-base  ">
        <i class="fa-regular fa-calendar"></i>
Birth: ${pet.date_of_birth}</p>
 
<p class="font-base text-base  ">
   <i class="fa-solid fa-dollar-sign"></i>
Price : ${pet.price}$ </p>

</div>

</div>


<div>
<h1 class="font-bold text-lg">Detailed Information</h1>

<p class="font-base text-sm opacity-60">${pet.pet_details}</p>

</div>


</div>

<!-- card description End -->
   

    <div class=" ">

      <form method="dialog" >
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btn-block bg-[#E7F2F2] text-[#0E7A81] ">Cancel</button>
      </form>
    </div>
  </div>

`;

document.body.appendChild(modal);
modal.showModal();
}


 document.getElementById('sort-btn').addEventListener("click",()=>{
currentPet.sort(
               
                (a,b)=> b.price-a.price);
displayAllPet(currentPet);

 });



function ViewMoreBtn () {
document.getElementById('show-best-friend').classList.remove('hidden')

document.getElementById('show-best-friend').scrollIntoView({

    behavior:'smooth'
});

}
const congratulation = () =>{

    const oldModal = document.querySelector(".adopt-modal")

    if(oldModal){
        oldModal.remove();
    }
    const modal = document.createElement('dialog')
modal.className=" modal "
modal.innerHTML=`
<div class=" my-8 rounded-3xl bg-white space-y-4 ">


<div class="flex flex-col justify-center items-center p-8 ">

    <img class=" bg-white"  src="https://img.icons8.com/?size=48&id=kRZicCB1E8B8&format=gif&color=f7f7f7" 
    alt="" srcset="">
<h1 class="fon-bold text-4xl "> Congrats!</h1>
<p class="font-base text-lg ">Adoption Process is Start for your Pet</p>
<h1   id="countdown" class=" text-6xl " > 1</h1>
    
  </div>


</div>
`;
document.body.appendChild(modal);
modal.showModal();

let count = 1;

const interval = setInterval(() => {

count++;
document.getElementById('countdown').innerHTML=count;
if(count===3){
    clearInterval( interval);

   setTimeout(() => {
    modal.close();
    modal.remove();
   }, 1000);

}
    
}, 1000);



}
