document.querySelector('main').innerHTML = `<div class="container">
<div class="row">
    <div class="col-md-8 col-sm-12">
        <h1>Planning to adopt a cat?</h1>
        <p> You are in a right place! Having a cat in the family is very rewarding but is also a big responsibility. Luckily, answers to many of the questions that a pet owner may have can be found on the Internet. Know more about different breeds of the cat and check out the temperament of each breeds. Make out your right choice and include them as a part of you family. </p>
    </div>
    <div class="col-md-4 col-sm-12 pb-3">
        <form>
            <div class="form-group">
                <label for="cat_breed">Select Cat Breed</label>
                <select class="form-control text-center" id="breed">
                    <option vlaue="Abyssinian">Abyssinian</option>
                    <option value="Aegean">Aegean</option>
                    <option value="American Bobtail">American Bobtail</option>
                    <option value="American Curl">American Curl</option>
                    <option value="American Shorthair">American Shorthair</option>
                    <option value="American Wirehair">American Wirehair</option>
                    <option value="Arabian Mau">Arabian Mau</option>
                    <option value="Australian Mist">Australian Mist</option>
                    <option value="Balinese">Balinese</option>
                    <option vlaue="Bambino">Bambino</option>
                    <option vlaue="Bengal">Bengal</option>
                    <option vlaue="Birman">Birman</option>
                    <option vlaue="Bombay">Bombay</option>
                    <option vlaue="British Longhair">British Longhair</option>
                    <option vlaue="British Shorthair">British Shorthair</option>
                    <option vlaue="Burmese">Burmese</option>
                    <option vlaue="Burmilla">Burmilla</option>
                    <option vlaue="California Spangled">California Spangled</option>
                    <option vlaue="Chantilly-Tiffany">Chantilly-Tiffany</option>
                    <option vlaue="Chartreux">Chartreux</option>
                    <option vlaue="Chausie">Chausie</option>
                    <option vlaue="Cheetoh">Cheetoh</option>                               
                    <option value="Colorpoint Shorthair">Colorpoint Shorthair</option>
                    <option value="Cornish Rex">Cornish Rex</option>
                    <option value="Cymric">Cymric</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Devon Rex">Devon Rex</option>
                    <option value="Donskoy">Donskoy</option>
                    <option value="Dragon Li">Dragon Li</option>
                    <option value="Egyptian Mau">Egyptian Mau</option>
                    <option value="European Burmese">European Burmese</option>
                    <option value="Exotic Shorthair">Exotic Shorthair</option>
                    <option value="Havana Brown">Havana Brown</option>
                    <option value="Himalayan">Himalayan</option>
                    <option value="Japanese Bobtail">Japanese Bobtail</option>
                    <option value="Javanese">Javanese</option>
                    <option value="Khao Manee">Khao Manee</option>
                    <option value="Korat">Korat</option>
                    <option value="Kurilian">Kurilian</option>
                    <option value="LaPerm">LaPerm</option>
                    <option value="Maine Coon">Maine Coon</option>
                    <option value="Malayan">Malayan</option>
                    <option value="Manx">Manx</option>
                    <option value="Munchkin">Munchkin</option>
                    <option value="Nebelung">Nebelung</option>
                    <option value="Norwegian Forest Cat">Norwegian Forest Cat</option>
                    <option value="Ocicat">Ocicat</option>
                    <option value="Oriental">Oriental</option>
                    <option value="Persian">Persian</option>
                    <option value="Pixie-bob">Pixie-bob</option>
                    <option value="Ragamuffin">Ragamuffin</option>
                    <option value="Ragdoll">Ragdoll</option>
                    <option value="Russian Blue">Russian Blue</option>
                    <option value="Savannah">Savannah</option>
                    <option value="Scottish Fold">Scottish Fold</option>
                    <option value="Selkirk Rex">Selkirk Rex</option>
                    <option value="Siamese">Siamese</option>
                    <option value="Siberian">Siberian</option>
                    <option value="Singapura">Singapura</option>
                    <option value="Snowshoe">Snowshoe</option>
                    <option value="Somali">Somali</option>
                    <option value="Sphynx">Sphynx</option>
                    <option value="Tonkinese">Tonkinese</option>
                    <option value="Toyger">Toyger</option>
                    <option value="Turkish Angora">Turkish Angora</option>
                    <option value="Turkish Van">Turkish Van</option>
                    <option value="York Chocolate">York Chocolate</option>
                </select>
            </div>
            <button class="btn btn-warning btn-block" id="mybutton">Go</button>
            
        </form>
    </div>
</div>
<div class="row">
    <div class="col-md-7 col-sm-12">
        <div class="row">
            <div class="col-md-6 col-sm-12 p-0">
                <img class="img-responsive" src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" alt ="Abyssinian" id="cat_img">
            </div>
            <div class="col-md-6 col-sm-12 p-0 bg-white text-dark">
                <p class="text-center display-5 font-weight-bold" id="cat_name">Abyssinian</p>
                <p class="text-center font-weight-bold" id="cat_id">Id : abys</p>
                <p id="definition">The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.</p>
                <p class="text-center"> --- </p>
                <p class="text-center" id="behaviour">Active, Energetic, Independent, Intelligent, Gentle</p>
                <p class="text-center" id="country">United States</p>
            </div>
        </div>
    </div>
    <div class="col-md-5 col-sm-12">
        <table class='table borderless'>
            <tbody>
                <tr>
                    <td  id="Adaptability" class="table_heading">Adaptability</td>
                    
                </tr>
                <tr>
                    <td id="Affection" class="table_heading">Affection Level</td>
                </tr>
                <tr>
                    <td id="child_friendly" class="table_heading">Child Friendly</td>
                </tr>
                <tr>
                    <td id="energy_level" class="table_heading">Energy Level</td>
                </tr>
                <tr>
                    <td id="dog_friendly" class="table_heading">Dog Friendly</td>
                </tr>
                <tr>
                    <td id="health_issues" class="table_heading">Health Issues</td>
                </tr>
                <tr>
                    <td id="stranger_friendly" class="table_heading">Stranger Friendly</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</div>`;

function createMyElement(elem, elemClass = "", elemId = "") {
    let element = document.createElement(elem);
    element.setAttribute("class", elemClass);
    element.setAttribute("id", elemId);
    return element;
  }
let selectedBreed;let result;
//Fill rating for 1st Data
function firstTable(result){
    if(document.getElementById('breed').value === "Abyssinian"){
        console.log(result);
        tableData(result[0]);
    }
}


let callAPI = async () => {
   
    try{
        let response = await fetch("https://api.thecatapi.com/v1/breeds?attach_breed=0",{
          
        headers : {
            'x-api-key': 'ac757f92-542a-4a60-aa4c-eae3e796d635'
        }});
        result = await response.json();
        console.log(result);
        firstTable(result);
    }
    catch(err){
        alert(err);
    }
} 
callAPI();
//Event handling for button
document.getElementById('mybutton').addEventListener('click',function(e){
    e.preventDefault();
    selectedBreed = document.getElementById('breed').value;
    DOM_Manipulation(result);
})


let DOM_Manipulation = (result) => {
    result.map((data,index) => {
        if(data.name === selectedBreed){
            document.getElementById('cat_name').innerText = data.name ;
            document.getElementById('cat_id').innerText = `ID : ${data.id}`;
            document.getElementById('definition').innerText = data.description;
            document.getElementById('behaviour').innerText = data.temperament;
            document.getElementById('country').innerText = data.country;
            document.getElementById('cat_img').setAttribute('src', data.image.url);
            document.getElementById('country').innerText = data.origin;
            console.log("index in mani "+ index);
            tableData(data);
        }
    })
}
//Fill start based on values
let fillStart = (element,value,variable,data) =>{
    for(i=0;i<5;i++){
        let span = createMyElement('span','fa fa-star');
        element.appendChild(span);
        
        if(i<value){
           
            span.classList.add('checked');
        }
        variable.parentElement.appendChild(element);
    }
}
let removePreviousRatings = (behaviour) =>{
        while (behaviour.nextElementSibling) {
            behaviour.nextElementSibling.remove();
        }
}
tableData = (data) =>{
    console.log(data);
    //behaviour - Adaptability
    let behaviour = document.getElementById('Adaptability'); 
    let value = data.adaptability;
    removePreviousRatings(behaviour);
    let td1 = createMyElement('td','unchecked')
    fillStart(td1,value,behaviour,data);

    //behaviour - Affection
    behaviour = document.getElementById('Affection');
    value = data.affection_level;
    removePreviousRatings(behaviour);
    td1 = createMyElement('td','unchecked');
    fillStart(td1,value,behaviour,data);

    // //behaviour - Child Friendly
    behaviour = document.getElementById('child_friendly');
    value = data.child_friendly;
    removePreviousRatings(behaviour);
    td1 = createMyElement('td','unchecked');
    fillStart(td1,value,behaviour,data);

    //behaviour - Energy Level
    behaviour = document.getElementById('energy_level');
    value = data.energy_level;
    removePreviousRatings(behaviour);
    td1 = createMyElement('td','unchecked');
    fillStart(td1,value,behaviour,data);

    //behaviour - Dog Friendly
    behaviour = document.getElementById('dog_friendly');
    value = data.dog_friendly;
    removePreviousRatings(behaviour);
    td1 = createMyElement('td','unchecked');
    fillStart(td1,value,behaviour,data);

    //behaviour - Health Issues
    behaviour = document.getElementById('health_issues');
    value = data.health_issues;
    removePreviousRatings(behaviour);
    td1 = createMyElement('td','unchecked');
    fillStart(td1,value,behaviour,data);

    //behaviour - Stranger Friendly
    behaviour = document.getElementById('stranger_friendly');
    value = data.stranger_friendly;
    removePreviousRatings(behaviour);
    td1 = createMyElement('td','unchecked');
    fillStart(td1,value,behaviour,data);
    
}

