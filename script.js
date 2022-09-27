// 1. Write a ts program to print all natural numbers from 1 to n. - using while loop
var Question1 = function () {
    var number = prompt("Please Enter Number");
    var output1 = document.getElementById("output1");
    if (output1) {
        output1.innerHTML = "All Natural Numbers is  : ";
    }
    if (number) {
        var num = parseInt(number);
        var start = 1;
        while (start <= num) {
            //   alert(`All Natural Numbers is ${start}`);
            if (output1) {
                output1.innerHTML += start + "&nbsp";
                start++;
            }
        }
    }
};
//2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop
var Question2 = function () {
    var number = prompt("Please Enter Number");
    var output2 = document.getElementById("output2");
    if (output2) {
        output2.innerHTML = "All Natural Numbers  in reverse  : ";
    }
    if (number) {
        var num = parseInt(number);
        var end = 1;
        while (end <= num) {
            if (output2) {
                output2.innerHTML += num + "&nbsp";
                num--;
            }
        }
    }
};
//3. Write a ts program to print all alphabets from a to z. - using while loop
var Question3 = function () {
    var output3 = document.getElementById("output3");
    if (output3) {
        output3.innerHTML = "All alphabets from a to z  : ";
    }
    var char = 97;
    while (char <= 122) {
        if (output3) {
            output3.innerHTML += String.fromCharCode(char) + "&nbsp";
            char++;
        }
    }
};
//4. Write a ts program to print all even numbers between 1 to 100. - using while loop
var Question4 = function () {
    var output4 = document.getElementById("output4");
    if (output4) {
        output4.innerHTML = "All even numbers between 1 to 100  : ";
    }
    var start = 2;
    while (start <= 100) {
        if (output4) {
            output4.innerHTML += start + "&nbsp";
            start = start + 2;
        }
    }
};
// 5. Write a ts program to print all odd number between 1 to 100.
var Question5 = function () {
    var output5 = document.getElementById("output5");
    if (output5) {
        output5.innerHTML = "All odd numbers between 1 to 100  : ";
    }
    var start = 1;
    while (start <= 100) {
        if (output5) {
            output5.innerHTML += start + "&nbsp";
            start = start + 2;
        }
    }
};
//6. Write a ts program to find sum of all natural numbers between 1 to n.
var Question6 = function () {
    var number = prompt("Please Enter Number");
    var output6 = document.getElementById("output6");
    if (number) {
        var num = parseInt(number);
        var start = 1;
        var sum = 0;
        while (start <= num) {
            if (output6) {
                sum += start;
                output6.innerHTML = "sum of all natural numbers between 1 to ".concat(num, " is  :").concat(String(sum));
                start++;
            }
        }
    }
};
// 7. Write a ts program to find sum of all even numbers between 1 to n.
var Question7 = function () {
    var number = prompt("Please Enter Number");
    var output7 = document.getElementById("output7");
    if (number) {
        var num = parseInt(number);
        var start = 2;
        var sum = 0;
        while (start <= num) {
            if (output7) {
                sum += start;
                output7.innerHTML = "sum of all even numbers between 1 to ".concat(num, " is  : ").concat(String(sum));
                start += 2;
            }
        }
    }
};
//8. Write a ts program to find sum of all odd numbers between 1 to n.
var Question8 = function () {
    var number = prompt("Please Enter Number");
    var output8 = document.getElementById("output8");
    if (number) {
        var num = parseInt(number);
        var start = 1;
        var sum = 0;
        while (start <= num) {
            if (output8) {
                sum += start;
                output8.innerHTML = "sum of all odd numbers between 1 to ".concat(num, " is  : ").concat(String(sum));
                start += 2;
            }
        }
    }
};
// 9. Write a ts program to print multiplication table of any number.
var Question9 = function () {
    var number = prompt("Please Enter Number");
    var output9 = document.getElementById("output9");
    if (output9) {
        output9.innerHTML = "multiplication table of ".concat(number);
    }
    if (number) {
        var num = parseInt(number);
        var start = 1;
        while (start <= 10) {
            if (output9) {
                output9.innerHTML += "<br>" + "".concat(num, " x ").concat(start, " = ").concat(num * start);
                start++;
            }
        }
    }
};
// 10. Write a ts program to count number of digits in a number.
var Question10 = function () {
    var number = prompt("Please Enter Number");
    var output10 = document.getElementById("output10");
    if (output10) {
        output10.innerHTML = "count number of digits in a ".concat(number, " is : ");
    }
    if (number && output10) {
        output10.innerHTML += number.length;
    }
};
// 11. Write a ts program to find first and last digit of a number.
var Question11 = function () {
    var number = prompt("Please Enter Number");
    var output11 = document.getElementById("output11");
    if (output11) {
        output11.innerHTML = "find first and last digit of a number ".concat(number, " is : ");
    }
    if (number && output11) {
        output11.innerHTML += "first digit is ".concat(number.charAt(0), " and last digit is ").concat(number.charAt(number.length - 1));
    }
};
// 12. Write a ts program to find sum of first and last digit of a number.
var Question12 = function () {
    var number = prompt("Please Enter Number");
    var output12 = document.getElementById("output12");
    if (output12) {
        output12.innerHTML = "sum of first and last digit of a number ".concat(number, " is : ");
    }
    if (number && output12) {
        output12.innerHTML += +number.charAt(0) + +number.charAt(number.length - 1);
    }
};
// 13. Write a ts program to swap first and last digits of a number.
var Question13 = function () {
    var number = prompt("Please Enter Number");
    var output13 = document.getElementById("output13");
    if (output13) {
        output13.innerHTML = "sum of first and last digit of a number ".concat(number, " is : ");
    }
    if (number && output13) {
        output13.innerHTML += +number.charAt(0) + +number.charAt(number.length - 1);
    }
};
// 14. Write a ts program to calculate sum of digits of a number.
var Question14 = function () {
    var number = prompt("Please Enter Number");
    var output14 = document.getElementById("output14");
    if (number) {
        var num = parseInt(number);
        var sum = 0;
        while (num > 0) {
            if (output14) {
                sum = sum + (num % 10);
                num = num / 10;
                output14.innerHTML = "calculate sum of digits of a number ".concat(number, " is :").concat(Math.floor(sum));
            }
        }
    }
};
// 15. Write a ts program to calculate product of digits of a number.
var Question15 = function () {
    var number = prompt("Please Enter Number");
    var output15 = document.getElementById("output15");
    if (number) {
        var num = parseInt(number);
        var product = 1;
        while (num != 0) {
            if (output15) {
                product = product * (num % 10);
                num = Math.floor(num / 10);
                output15.innerHTML = "product of digits of a number ".concat(number, " is :").concat(product);
            }
        }
    }
};
// 16. Write a ts program to enter a number and print its reverse.
var Question16 = function () {
    var number = prompt("Please Enter Number");
    var output16 = document.getElementById("output16");
    if (number) {
        var num = parseInt(number);
        var reverse = 0;
        while (num != 0) {
            if (output16) {
                reverse = reverse * 10 + (num % 10);
                num = Math.floor(num / 10);
                output16.innerHTML = "reverse of digits of a number ".concat(number, " is :").concat(reverse);
            }
        }
    }
};
// 17. Write a ts program to check whether a number is palindrome or not.
var Question17 = function () {
    var number = prompt("Please Enter Number");
    var output17 = document.getElementById("output17");
    if (number) {
        var num = parseInt(number);
        var reverse = 0;
        while (num != 0) {
            if (output17) {
                reverse = reverse * 10 + (num % 10);
                num = Math.floor(num / 10);
                if (reverse == +number) {
                    output17.innerHTML = "".concat(number, " is palindrome : ").concat(reverse);
                }
                else {
                    output17.innerHTML = "".concat(number, " is not palindrome : ").concat(reverse);
                }
            }
        }
    }
};
// 18. Write a ts program to find frequency of each digit in a given integer.
var Question18 = function () {
    var number = prompt("Please Enter Number");
    var digit = prompt("Please Enter digit");
    var output18 = document.getElementById("output18");
    if (number && digit) {
        var num = parseInt(number);
        var digt = parseInt(digit);
        var count = 1;
        while (num) {
            if (output18) {
                if (num % 10 === digt)
                    count++;
                num /= 10;
                output18.innerHTML = "frequency of each digit ".concat(digt, " in a given integer ").concat(number, " is : ").concat(count);
            }
        }
    }
};
// 19. Write a ts program to enter a number and print it in words.
var Question19 = function () {
    var number = prompt("Please Enter Number");
    var output19 = document.getElementById("output19");
    if (number) {
        var num = parseInt(number);
        var final = void 0;
        while (num) {
            if (output19) {
                switch (num % 10) {
                    case 0:
                        output19.innerHTML += "Zero";
                        break;
                    case 1:
                        output19.innerHTML += "One ";
                        break;
                    case 2:
                        output19.innerHTML += "Two ";
                        break;
                    case 3:
                        output19.innerHTML += "Three ";
                        break;
                    case 4:
                        output19.innerHTML += "Four ";
                        break;
                    case 5:
                        output19.innerHTML += "Five ";
                        break;
                    case 6:
                        output19.innerHTML += "Six ";
                        break;
                    case 7:
                        output19.innerHTML += "Seven ";
                        break;
                    case 8:
                        output19.innerHTML += "Eight ";
                        break;
                    case 9:
                        output19.innerHTML += "Nine ";
                        break;
                }
                num = num / 10;
                // output19.innerHTML = `frequency of each digit in a given integer  is : `;
            }
        }
    }
};
// 20. Write a ts program to print all ASCII character with their values.
var Question20 = function () {
    var output20 = document.getElementById("output20");
    if (output20) {
        for (var i = 0; i <= 255; i++) {
            output20.innerHTML += "ASCII value of character ".concat(String.fromCharCode(i), " is  : ").concat(i, "<br>");
        }
    }
};
// 21. Write a ts program to find power of a number using for loop.
var Question21 = function () {
    var base1 = prompt("Please Enter Base");
    var exponent1 = prompt("Please Enter Exponent");
    var power = 1;
    var output21 = document.getElementById("output21");
    if (output21 && base1 && exponent1) {
        var base = parseInt(base1);
        var exponent = parseInt(exponent1);
        for (var i = 1; i <= exponent; i++) {
            power = power * base;
        }
        output21.innerHTML = "power of a number ".concat(base, " ^ ").concat(exponent, " is  : ").concat(power, "<br>");
    }
};
// 22. Write a ts program to find all factors of a number.
var Question22 = function () {
    var number = prompt("Please Enter Number");
    var output22 = document.getElementById("output22");
    if (number && output22) {
        output22.innerHTML = "The factors of  ".concat(number, " is  : <br> ");
        var num = parseInt(number);
        for (var i = 1; i <= num; i++) {
            if (num % i == 0) {
                output22.innerHTML += " ".concat(i, "<br>");
            }
        }
    }
};
// 23. Write a ts program to calculate factorial of a number.
var Question23 = function () {
    var number = prompt("Please Enter Number");
    var output23 = document.getElementById("output23");
    if (number && output23) {
        var num = parseInt(number);
        var fact = 1;
        if (num < 0)
            output23.innerHTML = "Error! Factorial of a negative number doesn't exist.";
        else
            for (var i = 1; i <= num; i++) {
                fact *= i;
            }
        output23.innerHTML = "Factorial of ".concat(num, " = ").concat(fact);
    }
};
// 24. Write a ts program to find HCF (GCD) of two numbers.
var Question24 = function () {
    var number1 = prompt("Please Enter 1st Number");
    var number2 = prompt("Please Enter 2nd Number");
    var output24 = document.getElementById("output24");
    if (output24 && number1 && number2) {
        var num1 = parseInt(number1);
        var num2 = parseInt(number2);
        for (var i = 1; i <= num1 && i <= num2; i++) {
            if (num1 % i == 0 && num2 % i == 0) {
                output24.innerHTML = "HCF (GCD) of two numbers ".concat(num1, " and ").concat(num2, " is  : (GCD) = ").concat(i, "<br>");
            }
        }
    }
};
// 25. Write a ts program to find LCM of two numbers.
var Question25 = function () {
    var number1 = prompt("Please Enter 1st Number");
    var number2 = prompt("Please Enter 2nd Number");
    var output25 = document.getElementById("output25");
    if (output25 && number1 && number2) {
        var num1 = parseInt(number1);
        var num2 = parseInt(number2);
        for (var i = 1; i <= num1 && i <= num2; i++) {
            if (num1 % i == 0 && num2 % i == 0) {
                output25.innerHTML = "LCMof two numbers ".concat(num1, " and ").concat(num2, " is  : (LCM) = ").concat((num1 * num2) / i, "<br>");
            }
        }
    }
};
// 26. Write a ts program to check whether a number is Prime number or not.
var Question26 = function () {
    var number = prompt("Please Enter Number");
    var output26 = document.getElementById("output26");
    if (number && output26) {
        var num = parseInt(number);
        if (num === 1) {
            output26.innerHTML = "1 is neither prime nor composite number";
        }
        for (var i = 2; i < num; i++) {
            if (num % i != 0) {
                output26.innerHTML = "".concat(number, "  is Prime number");
            }
            else {
                output26.innerHTML = "".concat(number, "  is not Prime number");
            }
        }
    }
};
// 27. Write a ts program to print all Prime numbers between 1 to n.
var Question27 = function () {
    var number = prompt("Please Enter Number");
    var output27 = document.getElementById("output27");
    if (number && output27) {
        var num = parseInt(number);
        if (num == 1 || num == 0)
            output27.innerHTML = "".concat(num, " is not a prime number");
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                output27.innerHTML += "".concat(num, " is not a prime number");
                break;
            }
        }
        output27.innerHTML = "".concat(num, " is a prime number");
    }
};
// 28. Write a ts program to find sum of all prime numbers between 1 to n.
// 29. Write a ts program to find all prime factors of a number.
// 30. Write a ts program to check whether a number is Armstrong number or not.
var Question30 = function () {
    var number = prompt("Please Enter Number");
    var output30 = document.getElementById("output30");
    if (number && output30) {
        var num = parseInt(number);
        var sum = 0;
        while (num > 0) {
            var reverse = num % 10;
            sum = sum + reverse * reverse * reverse;
            num = num / 10;
        }
        console.log(sum);
        if (sum === num) {
            output30.innerHTML = "".concat(number, " is an Armstrong number");
        }
        else {
            output30.innerHTML = "".concat(number, " is not Armstrong number");
        }
    }
};
