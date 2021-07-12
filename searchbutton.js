var div = document.getElementById('container')
div.setAttribute('class','container')

var headdiv = document.getElementById("headdiv")
       var head = document.createElement("h4");
       head.innerText = "Welcome To Restcounties API"  
       headdiv.appendChild(head)

var inputdiv = document.createElement('div')
inputdiv.id = "inputdiv"
inputdiv.setAttribute('class','p-5')
div.append(inputdiv)

var textbox = document.createElement('input')
textbox.placeholder = "enter the country name"
textbox.setAttribute('class','container form-control')
textbox.setAttribute('id','myInput')
inputdiv.append(textbox)

var bttn = document.createElement('button')
bttn.innerText = "search";
bttn.setAttribute('class','container')
bttn.setAttribute('onclick','handelClick()')
inputdiv.append(bttn)

function handelClick(){
var value = document.getElementById('myInput').value;

if(value === '' || null){
    alert('value is empty')
}else{
    value
}
var url =  `https://restcountries.eu/rest/v2/name/${value}?fullText=true;`

    var data = fetch(url)

data

.then(function (res) {

    return res.json();

})
.then(function (somedata){

    var div2 = document.createElement("div");
    div2.setAttribute("class", "container2")
    div2.setAttribute("id", "container2")
    div.appendChild(div2);

    for(i in somedata){

        var img = document.createElement('img')
        document.getElementById('container2').append(img)
        img.setAttribute('id','flagname')
        img.src = somedata[i].flag;

var h1 = document.createElement("h5");
h1.innerText = ("Country Name : " + somedata[i].name)
h1.setAttribute = ("class", "country-name")
document.getElementById("container2").appendChild(h1);

var region = document.createElement("h5");
region.innerText = ("Region : " + somedata[i].region)
document.getElementById("container2").appendChild(region);

var subregion = document.createElement("h5");
subregion.innerText = ("Sub-Region : " + somedata[i].subregion)
document.getElementById("container2").appendChild(subregion);

var latlng = document.createElement("h5");
latlng.innerText = ("Latitude and Longitude : " + somedata[i].latlng)
document.getElementById("container2").appendChild(latlng);

var currencies = document.createElement("h5");
currencies.innerText = ("Currency : " + somedata[i].currencies[0].symbol)
document.getElementById("container2").appendChild(currencies);

var population = document.createElement("h5");
population.innerText = ("Population : " + somedata[i].population)
document.getElementById("container2").appendChild(population);
    }
})
.catch(function (err) {
    console.log(err)
})
}