// Function that grabs names, increments the quantity selected, and returns the results to the variable quantity.

function getSelectedInput(Name) {
    var elements = document.getElementsByName(Name);
    var quantity = [];
        for (var i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            quantity.push(elements[i].value);
        }
        }
    return quantity;
    }

// Function that stores the information from the function above as object and property pairs.

function GetOrder() {
    var order =     {};
    order.size =    getSelectedInput("Size");
    order.meat =    getSelectedInput("Meat");
    order.cheese =  getSelectedInput("Cheese");
    order.crust =   getSelectedInput("Crust");
    order.sauce =   getSelectedInput("Sauce");
    order.veggies = getSelectedInput("Veggies");
    return order;
        }

//function that sets the price of the different sizes

function GetSizePrice(size){
    if(size === "Personal") return 6;
    else if(size === "Medium") return 10;
    else if (size === "Large") return 14;
    else if(size === "Extra Large") return 16;
    }

//function for setting cheese prices.  If you order extra cheese, it costs 3 bucks, else it costs 0.

function GetExtraCheesePrice(cheese) {
    if (cheese === "Extra Cheese") {
        return 3;
    } else {
        return 0;
       }
    }

//function for setting crust prices.  If you order cheese stuffed crust, it costs 3 bucks, else it costs 0.

function GetCheeseSCPrice(crust) {
    if (crust === "Cheese Stuffed Crust") {
        return 3;
    } else {
        return 0;
        }
    }

//sets the default values for the size and toppings.  

function GetPrices(order) {
    var prices = {
        base: (GetSizePrice(order.size[0])),
        meat: ((order.meat.length-1) * 1),
        crust: GetCheeseSCPrice(order.crust[0]),
        sauce: 0,
        veggies: ((order.veggies.length-1) * 1),
        cheese: GetExtraCheesePrice(order.cheese[0]),
        total: 0
    };
        if (prices.meat <= 0) prices.meat = 0;
        if (prices.veggies <= 0) prices.veggies = 0;
        var total = 0;
            for (var j in prices) {
            total += prices[j];
    }
    prices.total = total;
    return prices;
    }

// Function that starts by setting variables for order and details to grab the proper information.  

function GetReceiptInfo() {
    var order = GetOrder();
    var details = GetPrices(order);
    
//Grabs the values that are checked, and displaying their name(s) with their corresponding prices.

    document.getElementById("Size").innerHTML = order.size;
    document.getElementById("SizePrice").innerHTML = "$ " + details.base;
    
// if statements for meat to show different text if there is more than one box checked.

    if (order.meat.length > 0) {
            document.getElementById("Meats").innerHTML = order.meat
        } else { 
            document.getElementById("Meats").innerHTML = "No Meats"
    };

    document.getElementById("MeatPrice").innerHTML = "+ $" + details.meat;
    document.getElementById("Cheese").innerHTML = order.cheese;
    document.getElementById("CheesePrice").innerHTML = "+ $" + details.cheese;
    document.getElementById("Crust").innerHTML = order.crust;
    document.getElementById("CrustPrice").innerHTML = "+ $" + details.crust;
    document.getElementById("Sauce").innerHTML = order.sauce;
    document.getElementById("SaucePrice").innerHTML = "+ $" + details.sauce;
       
// if statements for veggies to show different text if there is more than one box checked.


    if (order.veggies.length > 0) {
            document.getElementById("Veggies").innerHTML = order.veggies 
        } else { 
            document.getElementById("Veggies").innerHTML = "No Veggies"
    };   
    
    document.getElementById("VeggiesPrice").innerHTML = "+ $" + details.veggies;    
    document.getElementById("TotalPrice").innerHTML = "$ " + details.total;
    }