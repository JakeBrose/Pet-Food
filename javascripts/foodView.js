'use strict';

const _startcase = require('lodash.startcase');
const $ = require('jquery');

module.exports.displayFood = (dogData) => {
// loop through first array //
dogData.forEach((brand, index) => {
    console.log(`brand${index}`, brand);
    let $dogFood = $("#dogFood");
    $dogFood.append(`<h3>${_startcase(brand.name)}</h3>`);
    // loop through each brand's types array //
    brand.types.forEach((brandType) => {
        console.log('brandType', brandType);
        $dogFood.append(`<h4>${_startcase(brandType.type)}</h4>`);
        brandType.volumes.forEach((vol) => {
            console.log('vol', vol);
            $dogFood.append(`<h5>Size: ${vol.name} Price: $${vol.price}</h5>`);
        });
    });
});
};