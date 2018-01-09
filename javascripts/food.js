'use strict';
console.log('Initial Call');
const $ = require('jquery');


// ajax call to json
$.ajax({
    url: '../data/products.json'
})
.done((dogData) => {
    console.log('dogData',dogData.dog_brands);
    // loop through first array //
    dogData.dog_brands.forEach((brand, index) => {
        console.log(`brand${index}`, brand);
        let $dogFood = $("#dogFood");
        $dogFood.append(`<h3>${brand.name}</h3>`);
        // loop through each brand's types array //
        brand.types.forEach((brandType)=>{
            console.log('brandType',brandType);
            $dogFood.append(`<h4>${brandType.type}</h4>`);
            brandType.volumes.forEach((vol)=>{
                console.log('vol',vol);
                $dogFood.append(`<h5>Size: ${vol.name} Price: $${vol.price}</h5>`);
            });
        });
    });
})
.fail((error) => {
    console.log('Oh, fucking hell..',error);
});
// ^^^^ dogData is the variable that holds the object (the object held in the json) //

// dogData.dog_brands is an array //
// for loop is the fastest way to loop over the array //
// forEach is also an option, but is more restrictive //
// map = array method that loops over array, does something, and creates another array //
// filter = array method that loops over array and creates a new array with specific elements from the array, usually based on a condition  //
// reduce = array method that loops over array and takes all items in the array and returns a single value // 



