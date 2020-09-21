// create an object literal for the pet saloon (name,address,hours)
$(window).ready(function(){
    $(".boton").wrapInner('<div class=botontext></div>');
        
        $(".botontext").clone().appendTo( $(".boton") );
        
        $(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
        
        $(".twist").css("width", "25%").css("width", "+=3px");
    });

var salon={
    salonName:`The Fashion Pet`,
    address:{
        street:`Fluffy Ave`,
        number:`7936`
    },
    hours:{
        open:"8 a.m.",
        close:"5 p.m."
    },
    pets:[]
}
var c=1;
// object constructor
class Pet{
    constructor(name,age,type,breed,gender,service,ownerName,contactPhone,price){
       this.name=name; 
       this.age=age; 
       this.type=type;
       this.breed=breed;
       this.gender=gender;
       this.service=service;
       this.ownerName=ownerName;
       this.contactPhone=contactPhone;
       this.price=price;
       this.id=c;
       c++;
    }
}


var Scooby = new Pet("Scooby",50,"Dog","Dane","Male","Full Service","Shaggy","4569781234",20);
var Scrappy = new Pet("Scrappy",50,"Dog","Dane","Male","Shower","Shaggy","4569781234",35);
var Tweety = new Pet("Tweety",50,"Bird","Canarian","Male","Nails cut","Sylvester","4569784321",40);


// get inputs and store them in variables

var txtName= document.getElementById('petName');
var txtAge= document.getElementById('petAge');
var txttype= document.getElementById("petType");
var txtbreed= document.getElementById("petBreed");
var txtgender= document.getElementById("petGender");
var txtservice= document.getElementById("petService");
var txtowner= document.getElementById("ownersName");
var txtphone= document.getElementById("contactPhone");
var txtprice= document.getElementById("servicePrice");


function register(){
    // Create pet
    var thePet=new Pet(txtName.value,txtAge.value,txttype.value,txtbreed.value,txtgender.value,txtowner.value,txtphone.value,txtprice.value);
    console.log(thePet);
    salon.pets.push(thePet);
    display();
    clear();
}

function clear (){
    txtName.value="";
    txtAge.value="";
    txttype.value="";
    txtbreed.value="";
    txtgender.value="";
    txtowner.value="";
    txtphone.value="";
    txtprice.value="";
}

function profitcalculation(){
    var total=0;
    for(var i=0;i<salon.pets.length;i++){
        total=total+salon.pets[i].price;
    }
    console.log(total);
    document.getElementById("servicePrice");

}

function deletePet(petId){
    
    var tr=$("#"+petId);
    var indexDelete;

    for(var i=0;i<salon.pets.length;i++){
        var selected=salon.pets[i];
        if(selected.id===petId){
            indexDelete=i;
        }
    }
    salon.pets.splice(indexDelete,1);

    tr.remove();
}

function searchPet(){
    var ss=$('#petSearch').val();
    var searchString=ss.toLowerCase();
    for (var i=0;i<salon.pets.length;i++){
        var selected = salon.pets[i];
        if(selected.name.toLowerCase()===searchString || selected.service.toLowerCase()===searchString){
            $('#'+selected.id).addClass('active');
            console.log(selected.id);
        }
        else{
            $('#'+selected.id).removeClass('active');
        }
    }
}

function init(){

    console.log('Script');
    salon.pets.push(Scooby);
    salon.pets.push(Scrappy);
    salon.pets.push(Tweety);
    display(Scooby);
    display(Scrappy);
    display(Tweety);
    profitcalculation();

    $('#reg-btn').on('click',register);
    $('#search-btn').on('click',searchPet);
}

window.onload=init;