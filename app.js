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
                valuep: document.querySelector(DOMstrings.inputVal).value

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

    var Evnt = function() {
        // Get the field input
        var input = UICon.getinput();
        // Add the item to the bugdet

        // Add the item to UI list

        // Calculate the budget

        // Display the budget UI
        document.querySelector('.item__value').innerHTML = input.valuep;
    }


    document.querySelector(Dom.inputbtn).addEventListener('click', Evnt);


    document.addEventListener('keypress', function(event) {
        //the Which keyward is meant for old browsers. 
        if (event.keyCode === 13 || event.which === '13') {

            Evnt();
        }

    });


})(budgetControlla, UICon);