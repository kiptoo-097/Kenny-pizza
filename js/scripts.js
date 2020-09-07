$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        function flavor() {
            var pizzaFlavor = document.getElementById("flavor").value;
            return parseInt(pizzaFlavor);
        }
        function size() {
            var pizzaSize = document.getElementById("size").value;
            return parseInt(pizzaSize);
        }
        function crust() {
            var pizzaCrust = document.getElementById("crust").value;
            return parseInt(pizzaCrust);
        }
        function topping() {
            var pizzaTopping = document.getElementById("topping").value;
            return parseInt(pizzaTopping);
        }
        function number() {
            var pizzaNumber = document.getElementById("number").value;
            return parseInt(pizzaNumber);
        }

        function Order(flavor, size, crust, topping, number) {
            this.newFlavor = flavor;
            this.newSize = size;
            this.newCrust = crust;
            this.newTopping = topping;
            this.newQuantity = number;
        }

        var userInput = new Order(flavor(), size(), crust(), topping(), number());

        var totalCost =
            (userInput.newSize +
                userInput.newCrust +
                userInput.newTopping +
                userInput.newFlavor) *
            userInput.newQuantity;

        var customerName = prompt("Please enter your name");
        var phoneNumber = prompt("enter your phone number");
        var location = prompt("Enter your location");
        var newCost = totalCost + 200;

        var newCustomerName = customerName.toUpperCase();
        var recipt = (newCustomerName + phoneNumber + location);

        if (recipt != null) {
            document.getElementById("demo").innerHTML =
                "Hello " + newCustomerName + "!";
            document.getElementById("demo2").innerHTML =
                "Your charge for pizza costs  Ksh" + totalCost;
            document.getElementById("demo3").innerHTML =
                "Pick your preffered pizza at " + location;
            document.getElementById("demo4").innerHTML =
                "Delivery fee of ksh200";
            document.getElementById("demo5").innerHTML =
                "Total Cost is Ksh " + newCost;
            document.getElementById("demo6").innerHTML =
                "THANK YOU FOR TRUSTING KENNY PIZZA!!"
        }

        $("#formorder").reset();

    });
})