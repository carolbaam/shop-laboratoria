$(document).ready(function(){
    $('.carousel').carousel();
  });

const form=document.getElementById('search-form');
const searchField=document.getElementById('search-key-word');

const responseContainer=document.getElementsByClassName('response-container');
const carCounter = document.getElementById('items-counter');
let counter = 0;

const booksCall = () => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites/MLM/search?category=MLM3025`)

        .then(function(response) {
            response.json().then(function(result) {
                console.log(result);
        });
    })
        .catch(function(err) {
            console.log(err);
        });
};


booksCall();


const musicCall = () => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites/MLM/search?category=MLM1168`)
    .then(function(response) {
        response.json().then(function(result) {
            console.log(result);
    });
})
    .catch(function(err) {
        console.log(err);
    });
};




musicCall();

const hobbiesCall = () => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites/MLM/search?category=MLM1798`)
        .then(function(response) {
            response.json().then(function(result) {
                console.log(result);
        });
    })
        .catch(function(err) {
            console.log(err);
        });
};


hobbiesCall();



const apiMercadolibre = () => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/users/306970587/`)
        .then(function(response) {
            response.json().then(function(result) {
                console.log(result);
        });
    })
        .catch(function(err) {
            console.log(err);
        });
};

apiMercadolibre();

form.addEventListener('submit', function(e){
    e.preventDefault();
    responseContainer.innerHTML="";
    searchedForText=searchField.value;
   apiLoad();
})
const apiLoad = () => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.mercadolibre.com/sites/MLM/search?q=${searchedForText}`, )
        .then(function(response) {
            response.json().then(function(result) {
               // console.log(result.results);
                paintItems(result.results)

        });
    })
        .catch(function(err) {
            console.log(err);
        });
};

const addToCar = (result) => {
    console.log(result);
  // let filterProduct = result.filter(function(obj) {
  //   if(obj.id === productId) {
  //     return obj;
  //   }
  // });

  // let productDetails = filterProduct[0];
  // console.log(productDetails);
  // let productsArray = []
  // productsArray.push(productDetails);

  // localStorage.setItem('productDetails', JSON.stringify(productsArray));
}

const increaseCounter = () => {
  counter += 1;
  carCounter.innerText = counter;
  // addToCar(result);
}

const decreaseCounter = () => {
  counter -= 1;
  carCounter.innerText = counter;
}

const changeButtonStatus = (id, event) => {
    console.log(id);
    let element = event.target
    let buttonText = element.firstChild.data;

    if(buttonText === "Agregar a carrito") {
        element.innerText = "Remover del carrito";
        increaseCounter();
    } else {
        element.innerText = "Agregar a carrito";
        decreaseCounter();
    }
}

const paintItems = (result) => {
    console.log(result);
    let containerProducts = document.getElementById('site-container');
    let templateProducts = ``;
   
     result.forEach((item) => {
        const addres=item.address.state_name;
        const image=item.thumbnail;
        templateProducts += `<div class="col s12 m3">
        <div class="card">
            <div class="card-image">
                <img src="${image}">
            </div>
            <div class="card-content">
                <p class="card-title short-text">${item.title}</p>
                <p class="">${item.price} MXN</p>
            </div>
            <div class="card-action">
                <button id="" onclick="changeButtonStatus(event)" class="btn waves-effect" type="" name="action">Agregar a carrito</button>
            </div>
        </div>
    </div>`
    
//console.log(available);
         
     });

     containerProducts.innerHTML = templateProducts;
    
}

