var budgetControlla = (function() {

})();


var UICon = (function() {

    //Put the document selectors in a Variable object you dont keep typing it
    //Note: This is a private Object
    var DOMstrings = {
        inputType: '.add__type',
        inputDesc: '.add__description',
        inputVal: '.add__value',
        inputbtn: '.add__btn'


    }


    return {
        getinput: function() {

            return {

                type: document.querySelector(DOMstrings.inputType).value,
                desc: document.querySelector(DOMstrings.inputDesc).value,
                value: document.querySelector(DOMstrings.inputVal).value

            };


        },

        //Make the DOMString object pucblic to use in other codes
        getDOMStrings: function() {
            return DOMstrings
        }
    };


})();



var controller = (function(budgetCtrl, UICon) {


    var Dom = UICon.getDOMStrings();

    var setUpEventlistner = function() {
        document.querySelector(Dom.inputbtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            //the 'Which' keyward is meant for old browsers. 
            if (event.keyCode === 13 || event.which === '13') {

                ctrlAddItem();
            }

        });

    };


    var ctrlAddItem = function() {
        // Get the field input
        console.log(UICon.getinput().desc);

        // Add the item to the bugdet

        // Add the item to UI list

        // Calculate the budget

        // Display the budget UI

    }

    //Setup a public initialization funcftion to call setUpeventlistener from outside the controller function

    return {
        init: function() {

            console.log('all done');
            setUpEventlistner();
        }

    }


})(budgetControlla, UICon);


controller.init();