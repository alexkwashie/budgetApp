var budgetControlla = (function() {
    //Use a function constructure to collect Expense data
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItem: {
            exp: [],
            inc: []
        },

        totals: {
            exp: 0,
            inc: 0
        }
    };


    return {
        addItem: function(type, des, val) {

            var newItem;

            ID = 0;

            if (newItem === 'exp') {
                newItem = new Expense(ID, des, val);
            } else {
                newItem = new Income(ID, des, val);

                data.allItem[type].push(newItem);

                return newItem;
            }
        }
    };
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