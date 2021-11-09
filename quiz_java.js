function check(){
    let quest1 = parseInt(document.getElementById("quiz").question1.value);
    let quest2 = parseInt(document.getElementById("quiz").question2.value);
    let quest3 = parseInt(document.getElementById("quiz").question3.value);
    let quest4 = parseInt(document.getElementById("quiz").question4.value);
    let quest5 = parseInt(document.getElementById("quiz").question5.value);

    hw = quest1 + quest3 +quest4;
    sw = quest2 +quest5;
    console.log("1>>"+quest1);
    console.log("2>>"+quest2);
    console.log("3>>"+quest3);
    console.log("4>>"+quest4);
    console.log("5>>"+quest5);
}