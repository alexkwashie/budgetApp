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

        // Get the field input

        // Add the item to the bugdet

        // Add the item to list

    }


})();



var controller = (function(budgetCtrl, UI_Con) {

    var z = budgetCtrl.publicTest(1);

    return {

        anPublic: function() {
            console.log(z);
        }
    }

})(budgetControlla, UICon);