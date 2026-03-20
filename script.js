// Simple JavaScript for Restaurant

window.addEventListener('load', function() {
    console.log('Restaurant website loaded!');
});

function orderFood(itemName) {
    alert('You ordered: ' + itemName);
}

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        console.log('Menu item clicked');
    });
});