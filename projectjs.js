// projectJS.js

function generateMealPlan() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var goal = document.getElementById('goal').value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    var mealPlan = {
        monday: {
            breakfast: document.getElementById('monday-breakfast').value,
            snack1: document.getElementById('monday-snack1').value,
            lunch: document.getElementById('monday-lunch').value,
            snack2: document.getElementById('monday-snack2').value,
            dinner: document.getElementById('monday-dinner').value,
        },
        tuesday: {
            breakfast: document.getElementById('tuesday-breakfast').value,
            snack1: document.getElementById('tuesday-snack1').value,
            lunch: document.getElementById('tuesday-lunch').value,
            snack2: document.getElementById('tuesday-snack2').value,
            dinner: document.getElementById('tuesday-dinner').value,
        },
        wednesday: {
            breakfast: document.getElementById('wednesday-breakfast').value,
            snack1: document.getElementById('wednesday-snack1').value,
            lunch: document.getElementById('wednesday-lunch').value,
            snack2: document.getElementById('wednesday-snack2').value,
            dinner: document.getElementById('wednesday-dinner').value,
        },
        thursday: {
            breakfast: document.getElementById('thursday-breakfast').value,
            snack1: document.getElementById('thursday-snack1').value,
            lunch: document.getElementById('thursday-lunch').value,
            snack2: document.getElementById('thursday-snack2').value,
            dinner: document.getElementById('thursday-dinner').value,
        },
        friday: {
            breakfast: document.getElementById('friday-breakfast').value,
            snack1: document.getElementById('friday-snack1').value,
            lunch: document.getElementById('friday-lunch').value,
            snack2: document.getElementById('friday-snack2').value,
            dinner: document.getElementById('friday-dinner').value,
        },
        saturday: {
            breakfast: document.getElementById('saturday-breakfast').value,
            snack1: document.getElementById('saturday-snack1').value,
            lunch: document.getElementById('saturday-lunch').value,
            snack2: document.getElementById('saturday-snack2').value,
            dinner: document.getElementById('saturday-dinner').value,
        },
        sunday: {
            breakfast: document.getElementById('sunday-breakfast').value,
            snack1: document.getElementById('sunday-snack1').value,
            lunch: document.getElementById('sunday-lunch').value,
            snack2: document.getElementById('sunday-snack2').value,
            dinner: document.getElementById('sunday-dinner').value,
        }
    };

    var newWindow = window.open();
    newWindow.document.write("<html><head><title>Weekly Meal Plan</title></head><body>");
    newWindow.document.write("<h1>Weekly Meal Plan</h1>");
    newWindow.document.write("<p>Name: " + name + "</p>");
    newWindow.document.write("<p>Email: " + email + "</p>");
    newWindow.document.write("<p>Goal: " + goal + "</p>");
    
    for (var day in mealPlan) {
        newWindow.document.write("<h2>" + capitalizeFirstLetter(day) + "</h2>");
        for (var meal in mealPlan[day]) {
            newWindow.document.write("<p>" + capitalizeFirstLetter(meal) + ": " + mealPlan[day][meal] + "</p>");
        }
    }

    newWindow.document.write("</body></html>");
    newWindow.document.close();
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function printPlanner() {
    window.print();
}

function downloadPlanner() {
    var mealPlanContent = document.documentElement.innerHTML;
    var blob = new Blob([mealPlanContent], { type: "text/html" });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "meal_plan.html";
    link.click();
}