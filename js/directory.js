console.log("directory.js");
function display(){
    // create vars
    var pets = salon.pets;
    var text="";
    var petsection=document.getElementById("petSection");
    const dogIcon='<i class="fas fa-dog"></i>';
    const catIcon='<i class="fas fa-cat"></i>';
    const birdIcon='<i class="fas fa-crow"></i>';
    

    //  travel the pets array (for loop)
    for(var i=0;i<pets.length;i++){

        console.log(pets[i]);
        // create the HTML text
        text+=`
        <div id="${pets[i].id}" class="pet">
                <h2> Name: ${pets[i].name} </h2>

                <p> Age: ${pets[i].age} </p>
                <p> Type: ${pets[i].type}
                </p>
                <p> Breed: ${pets[i].breed}
                </p>
                <p> Gender: ${pets[i].gender}
                </p>
                <p> Service: ${pets[i].service}
                </p>
                <p> Owner: ${pets[i].ownersName}
                </p>
                <p> Contact Phone: ${pets[i].contact}
                </p>
                <p> Price: ${pets[i].price}
                </p>
                <button class="btn btn-danger" onclick="deletePet(${pets[i].id});"> Delete </button>
        </div>
            `;
                
        console.log(text);
        $('#petSection').append(text);
    }
    // display the pets on the HTML
    petSection.innerHTML=text;
    


}


// EXTRA BONUS: display the number of registered pets in any part of the HTML.