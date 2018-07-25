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
            ID = data.allitems[type][data.allitems[type].length - 1].id + 1;

            ID = 0;

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

        var input;

        // Get the field input
        input = UICon.getinput();

        // Add the item to the bugdet
        var newItem = budgetControlla.addItem(input.type, input.desc, input.value);

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






/*
var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function(totalIncome) {
        console.log(totalIncome);
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function() {
        return this.percentage;
    };


    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function(type) {
        var sum = 0;
        data.allitems[type].forEach(function(cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;
    };

    var data = {
        allitems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };


    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            //generate ID
            if (data.allitems[type].length > 0) {
                //o arraydaki sonunca item in id sine 1 ekliyosun
                ID = data.allitems[type][data.allitems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            // add new item based on 'inc' or 'exp' type
            if (type === 'exp') {

                newItem = new Expense(ID, des, val)

            } else if (type === 'inc') {

                newItem = new Income(ID, des, val)
            }

            //push newitem into data structure
            data.allitems[type].push(newItem);
            return newItem;
        },

        deleteItem: function(type, id) {

            var ids = data.allitems[type].map(function(current) {
                return current.id;
            });

            var index = ids.indexOf(id);

            if (index !== -1) {
                data.allitems[type].splice(index, 1);
            }

        },

        calculateBudget: function() {
            // calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            // store total budget
            data.budget = data.totals.inc - data.totals.exp;
            //store percentage
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },

        calculatePercentages: function() {
            //calculate percentage
            data.allitems.exp.forEach(function(cur) {
                cur.calcPercentage(data.totals.inc);
            });
        },

        getPercentages: function() {
            var allPerc = data.allitems.exp.map(function(cur) {
                return cur.getPercentage();
            });
            return allPerc;

        },


        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }

        },

        testing: function() {
            console.log('testing our data structure==', data);
        }
    }

})();

//UI CONTROLLER
var UIController = (function() {


    var DOMStrings = {
        type: ".add__type",
        description: ".add__description",
        value: ".add__value",
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container'

    };

    //Store dom selectors
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.type).value,
                description: document.querySelector(DOMStrings.description).value,
                value: parseFloat(document.querySelector(DOMStrings.value).value)
            }

        },

        addListItem: function(obj, type) {
            var html, newHtml, element;

            if (type === 'inc') {

                element = DOMStrings.incomeContainer;

                html = '<div class="item clearfix" id="inc-%id%">' +
                    '<div class="item__description">%description%</div><div class="right clearfix">' +
                    '<div class="item__value">%value%</div><div class="item__delete">' +
                    '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

            } else if (type === 'exp') {
                element = DOMStrings.expenseContainer;

                html = '<div class="item clearfix" id="exp-%id%">' +
                    '<div class="item__description">%description%</div><div class="right clearfix">' +
                    '<div class="item__value">%value%</div><div class="item__percentage">21%</div>' +
                    '<div class="item__delete"><button class="item__delete--btn">' +
                    '<i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            //insert the HTML to DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);



        },

        deleteLisItem: function(selectorID) {

            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },

        clearFields: function() {

            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMStrings.description + ',' + DOMStrings.value);

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
            });

            fieldsArr[0].focus();
        },

        displayBudget: function(obj) {
            document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMStrings.expensesLabel).textContent = obj.totalExp;

            if (obj.percentage > 0) {
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = '----';
            }
        },

        getDOMStrings: function() {
            return DOMStrings;
        }


    }
})();


//GLOBAL CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {


    var SetEventListeners = function() {
        //click event
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        //keypress add item
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

        //delete item
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
    };

    var DOM = UIController.getDOMStrings();

    var updateBudget = function() {
        // 1. calculate budget
        budgetCtrl.calculateBudget();

        //2. return the budget
        var budget = budgetCtrl.getBudget();
        console.log(budget);

        //3. display the budget
        UICtrl.displayBudget(budget);
        //document.querySelector(UICtrl.getDOMStrings().budgetValue).value = budget;
    };

    var updatePercentages = function() {
        //1. calculate percentage
        budgetCtrl.calculatePercentages();

        //2. read percentage
        var percentages = budgetCtrl.getPercentages();
        console.log(percentages);

        //3. show percentage

    };


    var ctrlAddItem = function() {
        //1. get user input
        var input = UICtrl.getInput(); /* ex=> input = {type:.., des:.. value} obj

if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
    //2. add newitem to data strcute
    var newItem = budgetCtrl.addItem(input.type, input.description, input.value);

    //3. Add the item to UI
    UICtrl.addListItem(newItem, input.type);

    //4. Clear input fields
    UICtrl.clearFields();

    //5. Update budget
    updateBudget();

    //6. Update Percentage
    updatePercentages();
}

};

var ctrlDeleteItem = function(event) {
    var itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
    var splitID = itemID.split('-');
    var type = splitID[0];
    var ID = parseInt(splitID[1]);
    //console.log(itemID,splitID,type,ID);

    //1.delete item from data structure
    budgetCtrl.deleteItem(type, ID);

    //2 delete from UI
    UICtrl.deleteLisItem(itemID);

    //3.update budget
    updateBudget();

};

return {
    init: function() {
        //initially set value to 0
        UICtrl.displayBudget({
            budget: 0,
            totalInc: 0,
            totalExp: 0,
            percentage: -1
        });
        console.log('Our app started!');
        SetEventListeners();

    }
}
})(budgetController, UIController);

controller.init(); 

*/