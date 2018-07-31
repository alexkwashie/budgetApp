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
        allItems: {
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

            var newItem, ID;

            //[1 2 3 4 5], next ID = 6
            //[1  3 4 6 8 ], next ID = 9

            //Creat new ID 
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            //Create new item based on 'exp' or 'inc' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);

            }

            //push it into our data structure
            data.allItems[type].push(newItem);

            //Return the new element
            return newItem;

        },

        testing: function() {
            console.log(data);
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



var controller = (function(budgetCtrl, UICtrl) {




    var setUpEventlistner = function() {
        var Dom = UICon.getDOMStrings();

        document.querySelector(Dom.inputbtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            //the 'Which' keyward is meant for old browsers. 
            if (event.keyCode === 13 || event.which === '13') {

                ctrlAddItem();
            }

        });

    };


    var ctrlAddItem = function() {

        var input, newItem;

        // Get the field input
        input = UICtrl.getinput();

        // Add the item to the bugdet
        newItem = budgetCtrl.addItem(input.type, input.desc, input.value);

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