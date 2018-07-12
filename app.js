var budgetControlla = (function() {

})();


var UICon = (function() {

    return {
        getinput: function() {

            return {
                type: document.querySelector('.add__type').value,
                desc: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value

            };
        }
    }


})();



var controller = (function(budgetCtrl, UICon) {


    var Evnt = function() {
        // Get the field input
        var input = UICon.getinput();
        // Add the item to the bugdet

        // Add the item to UI list

        // Calculate the budget

        // Display the budget UI
        console.log(input);
    }


    document.querySelector('.add__btn').addEventListener('click', Evnt);


    document.addEventListener('keypress', function(event) {
        //the Which keyward is meant for old browsers. 
        if (event.keyCode === 13 || event.which === '13') {

            Evnt();
        }

    });


})(budgetControlla, UICon);