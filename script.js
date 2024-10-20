
let borderColor = '#000000';

const redButton = document.getElementById("red-button");
const blueButton = document.getElementById("blue-button");
const greenButton = document.getElementById("green-button");

const gridItems = document.querySelectorAll(".grid-item");

//add hoover effect to all grid items
function updateHoverEffect(){
    gridItems.forEach(item => {
        item.addEventListener("mouseover", function(){
            item.style.borderColor = borderColor;
        });

        item.addEventListener("mouseout", function(){
            item.style.borderColor = "transparent";
        });
    });
}


redButton.addEventListener("click", function() {
    if(borderColor != 'red'){  
        borderColor = "red";
    } else{
        borderColor = '#000000';
    }
    
    updateHoverEffect();
});

blueButton.addEventListener("click", function() {
    if(borderColor != 'blue'){  
        borderColor = "blue";
    } else{
        borderColor = '#000000';
    }

    updateHoverEffect();
});

greenButton.addEventListener("click", function() {
    if(borderColor != 'green'){  
        borderColor = "green";
    } else{
        borderColor = '#000000';
    }

    updateHoverEffect();
});

 


updateHoverEffect();
