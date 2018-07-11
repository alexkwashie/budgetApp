var budgetControlla = (function() {
    var x = 23;

    var add = function(a) {
        return a + x;
    }


    return {
        publicTest: function(b) {
            return add(b);
        }

    }
})();


var UICon = (function() {

    var ctrlAddItem = function() {


    }


})();



var controller = (function(budgetCtrl, UICon) {


    var Evnt = function() {
        // Get the field input

        // Add the item to the bugdet

        // Add the item to UI list

        // Calculate the budget

        // Display the budget UI
        console.log('it works');
    }


    document.querySelector('.add__btn').addEventListener('click', Evnt);


    document.addEventListener('keypress', function(event) {
        //the Which keyward is meant for old browsers. 
        if (event.keyCode === 13 || event.which === '13') {

            Evnt();
        }

    });


})(budgetControlla, UICon);