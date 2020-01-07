// Given constants
const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";


// Kata 1. Write a function that returns an array with the cities in 'gotCitiesCSV'. Remember to also append the results to the page.
let header1 = document.createElement("div");
    header1.textContent =
        "Kata 1 ";
        document.body.appendChild(header1);
        function kata1() {
            newArray1 = gotCitiesCSV.split(",");
            newElement = document.createElement("div");
            newElement.textContent = JSON.stringify(newArray1);
            document.body.appendChild(newElement);
            return newArray1;
        }
kata1();
//
// Kata 2. Write a function that returns an array of words from the sentence in 'bestThing'. Remember to also append the results to the page.
let header2 = document.createElement("div");
    header2.textContent =
        "Kata 2";
        document.body.appendChild(header2);
        function kata2() {
            newArray2 = bestThing.split(" ");
            newElement = document.createElement("div");
            newElement.textContent = JSON.stringify(newArray2);
            document.body.appendChild(newElement);
            return newArray2;
        }
kata2();
//
// Kata 3. Write a function that returns a string separated by semi-colons instead of commas from 'gotCitiesCSV'. Remember to also append the results to the page.
let header3 = document.createElement("div");
    header3.textContent =
        "Kata 3";
        document.body.appendChild(header3);
        function kata3() {
            newString3 = gotCitiesCSV
            for (i = 0; i<= newString3.length; i++){
                newString3 = newString3.replace(",",";");
            }
            newElement = document.createElement("div");
            newElement.textContent = JSON.stringify(newString3);
            document.body.appendChild(newElement);
            return newString3;
        }
kata3();
//
// Kata 4. Write a function that returns a CSV (comma-separated) string from the 'lotrCitiesArray'. Remember to also append the results to the page. 
let header4 = document.createElement("div");
    header4.textContent =
        "Kata 4";
        document.body.appendChild(header4);
        function kata4() {
            newString4 = lotrCitiesArray.toString();
            newElement = document.createElement("div");
            newElement.textContent = JSON.stringify(newString4);
            document.body.appendChild(newElement);
            return newString4;
        }
kata4();
//
// Kata 5. Write a function that returns an array with the first 5 cities in 'lotrCitiesArray'. Remember to also append the results to the page.
let header5 = document.createElement("div");
    header5.textContent =
        "Kata 5";
        document.body.appendChild(header5);
        function kata5() {
            newArray5 = lotrCitiesArray;
            newArray5 = newArray5.slice(0,5);
            newElement = document.createElement("div");
            newElement.textContent = JSON.stringify(newArray5);
            document.body.appendChild(newElement);
            return newArray5;
        }
kata5();
//
// Kata 6. Write a function that returns an array with the last 5 cities in 'lotrCitiesArray'. Remember to also append the results to the page.
let header6 = document.createElement("div");
    header6.textContent =
        "Kata 6";
        document.body.appendChild(header6);
        function kata6() {
            newArray6 = lotrCitiesArray;
            newArray6 = newArray6.slice(3);
            newElement = document.createElement("div");
            newElement.textContent = JSON.stringify(newArray6);
            document.body.appendChild(newElement);
            return newArray6;
        }
kata6();
//
// Kata 7. Write a function that returns an array with the 3rd to 5th city in 'lotrCitiesArray'. Remember to also append the results to the page.
let header7 = document.createElement("div");
    header7.textContent =
        "Kata 7";
        document.body.appendChild(header7);
        function kata7() {
            newArray7 = lotrCitiesArray;
            newArray7 = newArray7.slice(2,5);
            newElement = document.createElement("div");
            newElement.textContent = JSON.stringify(newArray7);
            document.body.appendChild(newElement);
            return newArray7;
        }
kata7();
//
// Kata 8. Write a function that uses 'splice' to remove 'Rohan' from 'lotrCitiesArray' and returns the new modified 'lotrCitiesArray'. Remember to also append the results to the page.
let header8 = document.createElement("div");
    header8.textContent =
        "Kata 8";
        document.body.appendChild(header8);
        function kata8() {
            newArray8 = lotrCitiesArray;
            newArray8 = newArray8.splice(2,1);
            newElement = document.createElement("div");
            newElement.textContent = JSON.stringify(lotrCitiesArray);
            document.body.appendChild(newElement);
            return lotrCitiesArray;
        }
kata8();
//
// Kata 9. Write a function that uses 'splice' to remove all cities after 'Dead Marshes' in 'lotrCitiesArray' and returns the new modified 'lotrCitiesArray'. Remember to also append the results to the page.
let header9 = document.createElement("div");
    header9.textContent =
        "Kata 9";
        document.body.appendChild(header9);
        function kata9() {
            newArray9 = lotrCitiesArray;
            newArray9 = newArray9.splice(5,2);
            newElement = document.createElement("div");
            newElement.textContent = JSON.stringify(lotrCitiesArray);
            document.body.appendChild(newElement);
            return lotrCitiesArray;
        }
kata9();
//
// Kata 10. Write a function that uses 'splice' to add 'Rohan' back to 'lotrCitiesArray' right after 'Gondor' and returns the new modified 'lotrCitiesArray'. Remember to also append the results to the page.
let header10 = document.createElement("div");
    header10.textContent =
        "Kata 10";
        document.body.appendChild(header10);
        function kata10() {
            newArray10 = lotrCitiesArray;
            newArray10 = newArray10.splice(2,0,"Rohan");
            newElement = document.createElement("div");
            newElement.textContent = JSON.stringify(lotrCitiesArray);
            document.body.appendChild(newElement);
            return lotrCitiesArray;
        }
kata10();
//
// Kata 11. Write a function that uses 'splice' to rename 'Dead Marshes' to 'Deadest Marshes' in 'lotrCitiesArray' and returns the new modified 'lotrCitiesArray'. Remember to also append the results to the page.
let header11 = document.createElement("div");
    header11.textContent =
        "Kata 11";
        document.body.appendChild(header11);
        function kata11() {
            newArray11 = lotrCitiesArray;
            newArray11 = newArray11.splice(5,1,"Deadest Marshes");
            newElement = document.createElement("div");
            newElement.textContent = JSON.stringify(lotrCitiesArray);
            document.body.appendChild(newElement);
            return lotrCitiesArray;
        }
kata11();
//
// Kata 12. Write a function that uses 'slice' to return a string with the first 14 characters from 'bestThing'. Remember to also append the results to the page.
let header12 = document.createElement("div");
    header12.textContent =
        "Kata 12";
        document.body.appendChild(header12);
        function kata12() {
            newArray12 = bestThing;
            newArray12 = newArray12.slice(0,14);
            newElement = document.createElement("div");
            newElement.textContent = JSON.stringify(newArray12);
            document.body.appendChild(newElement);
            return newArray12;
        }
kata12();
//
// Kata 13. Write a function that uses 'slice' to return a string with the last 12 characters from 'bestThing'. Remember to also append the results to the page.let header12 = document.createElement("div");
let header13 = document.createElement("div");
header13.textContent =
"Kata 13";
document.body.appendChild(header13);
function kata13() {
    newArray13 = bestThing;
    newArray13 = newArray13.slice(69); //https://tinyurl.com/yk3kjnrt
    newElement = document.createElement("div");
    newElement.textContent = JSON.stringify(newArray13);
    document.body.appendChild(newElement);
    return newArray13;
}
kata13();
//
// Kata 14. Write a function that uses 'slice' to return a string with the characters between the 23rd and 38th position of 'bestThing' (i.e., 'boolean is even'). Remember to also append the results to the page.
let header14 = document.createElement("div");
header14.textContent =
"Kata 14";
document.body.appendChild(header14);
function kata14() {
    newArray14 = bestThing;
    newArray14 = newArray14.slice(23,38);
    newElement = document.createElement("div");
    newElement.textContent = JSON.stringify(newArray14);
    document.body.appendChild(newElement);
    return newArray14;
}
kata14();
//
// Kata 15. Write a function that does the exact same thing as #13 but use the 'substring' method instead of 'slice'. Remember to also append the results to the page.
let header15 = document.createElement("div");
header15.textContent =
"Kata 15";
document.body.appendChild(header15);
function kata15() {
    newArray15 = bestThing;
    newArray15 = newArray15.substring(69);
    newElement = document.createElement("div");
    newElement.textContent = JSON.stringify(newArray15);
    document.body.appendChild(newElement);
    return newArray15;
}
kata15();
//
// Kata 16. Write a function that does the exact same thing as #14 but use the 'substring' method instead of 'slice'. Remember to also append the results to the page.
let header16 = document.createElement("div");
header16.textContent =
"Kata 16";
document.body.appendChild(header16);
function kata16() {
    newArray16 = bestThing;
    newArray16 = newArray16.substring(23,38);
    newElement = document.createElement("div");
    newElement.textContent = JSON.stringify(newArray16);
    document.body.appendChild(newElement);
    return newArray16;
}
kata16();
//
// Kata 17. Write a function that uses 'pop' to remove the last city from 'lotrCitiesArray' and returns the new array. Remember to also append the results to the page.
let header17 = document.createElement("div");
header17.textContent =
"Kata 17";
document.body.appendChild(header17);
function kata17() {
    newArray17 = lotrCitiesArray;
    newArray17 = newArray17.pop();
    newElement = document.createElement("div");
    newElement.textContent = JSON.stringify(lotrCitiesArray);
    document.body.appendChild(newElement);
    return lotrCitiesArray;
}
kata17();
//
//
let header18 = document.createElement("div");
header18.textContent =
"Kata 18";
document.body.appendChild(header18);
function kata18() {
    newArray18 = lotrCitiesArray;
    newArray18 = newArray18.push("Deadest Marshes");
    newElement = document.createElement("div");
    newElement.textContent = JSON.stringify(lotrCitiesArray);
    document.body.appendChild(newElement);
    return lotrCitiesArray;
}
kata18();
//
//Kata This criterion is linked to a Learning Outcome19. Write a function that uses 'shift' to remove the first city from 'lotrCitiesArray' and returns the new array. Remember to also append the results to the page.
let header19 = document.createElement("div");
header19.textContent =
"Kata 19";
document.body.appendChild(header19);
function kata19() {
    newArray19 = lotrCitiesArray;
    newArray19 = newArray19.shift();
    newElement = document.createElement("div");
    newElement.textContent = JSON.stringify(lotrCitiesArray);
    document.body.appendChild(newElement);
    return lotrCitiesArray;
}
kata19();
//
//
let header20 = document.createElement("div");
header20.textContent =
"Kata 20";
document.body.appendChild(header20);
function kata20() {
    newArray20 = lotrCitiesArray;
    newArray20 = newArray20.unshift("Mordor");
    newElement = document.createElement("div");
    newElement.textContent = JSON.stringify(lotrCitiesArray);
    document.body.appendChild(newElement);
    return lotrCitiesArray;
}
kata20();
//