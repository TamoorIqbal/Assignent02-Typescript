// 1. Write a ts program to print all natural numbers from 1 to n. - using while loop
var Question1: () => void = () => {
  let number: string | null = prompt("Please Enter Number");
  let output1 = document.getElementById("output1") as HTMLDivElement | null;
  if (output1) {
    output1.innerHTML = "All Natural Numbers is  : ";
  }
  if (number) {
    let num: number = parseInt(number);
    let start: number = 1;
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
var Question2: () => void = () => {
  let number: string | null = prompt("Please Enter Number");
  let output2 = document.getElementById("output2") as HTMLDivElement | null;
  if (output2) {
    output2.innerHTML = "All Natural Numbers  in reverse  : ";
  }
  if (number) {
    let num: number = parseInt(number);
    let end: number = 1;
    while (end <= num) {
      if (output2) {
        output2.innerHTML += num + "&nbsp";
        num--;
      }
    }
  }
};

//3. Write a ts program to print all alphabets from a to z. - using while loop
var Question3: () => void = () => {
  let output3 = document.getElementById("output3") as HTMLDivElement | null;
  if (output3) {
    output3.innerHTML = "All alphabets from a to z  : ";
  }
  let char: number = 97;
  while (char <= 122) {
    if (output3) {
      output3.innerHTML += String.fromCharCode(char) + "&nbsp";
      char++;
    }
  }
};
//4. Write a ts program to print all even numbers between 1 to 100. - using while loop
var Question4: () => void = () => {
  let output4 = document.getElementById("output4") as HTMLDivElement | null;
  if (output4) {
    output4.innerHTML = "All even numbers between 1 to 100  : ";
  }
  let start: number = 2;
  while (start <= 100) {
    if (output4) {
      output4.innerHTML += start + "&nbsp";
      start = start + 2;
    }
  }
};
// 5. Write a ts program to print all odd number between 1 to 100.
var Question5: () => void = () => {
  let output5 = document.getElementById("output5") as HTMLDivElement | null;
  if (output5) {
    output5.innerHTML = "All odd numbers between 1 to 100  : ";
  }
  let start: number = 1;
  while (start <= 100) {
    if (output5) {
      output5.innerHTML += start + "&nbsp";
      start = start + 2;
    }
  }
};
//6. Write a ts program to find sum of all natural numbers between 1 to n.
var Question6: () => void = () => {
  let number: string | null = prompt("Please Enter Number");
  let output6 = document.getElementById("output6") as HTMLDivElement | null;
  if (number) {
    let num: number = parseInt(number);
    let start: number = 1;
    let sum: number = 0;
    while (start <= num) {
      if (output6) {
        sum += start;
        output6.innerHTML = `sum of all natural numbers between 1 to ${num} is  :${String(
          sum
        )}`;
        start++;
      }
    }
  }
};
// 7. Write a ts program to find sum of all even numbers between 1 to n.
var Question7: () => void = () => {
  let number: string | null = prompt("Please Enter Number");
  let output7 = document.getElementById("output7") as HTMLDivElement | null;
  if (number) {
    let num: number = parseInt(number);
    let start: number = 2;
    let sum: number = 0;
    while (start <= num) {
      if (output7) {
        sum += start;
        output7.innerHTML = `sum of all even numbers between 1 to ${num} is  : ${String(
          sum
        )}`;
        start += 2;
      }
    }
  }
};
//8. Write a ts program to find sum of all odd numbers between 1 to n.
var Question8: () => void = () => {
  let number: string | null = prompt("Please Enter Number");
  let output8 = document.getElementById("output8") as HTMLDivElement | null;
  if (number) {
    let num: number = parseInt(number);
    let start: number = 1;
    let sum: number = 0;
    while (start <= num) {
      if (output8) {
        sum += start;
        output8.innerHTML = `sum of all odd numbers between 1 to ${num} is  : ${String(
          sum
        )}`;
        start += 2;
      }
    }
  }
};
// 9. Write a ts program to print multiplication table of any number.
var Question9: () => void = () => {
  let number: string | null = prompt("Please Enter Number");
  let output9 = document.getElementById("output9") as HTMLDivElement | null;
  if (output9) {
    output9.innerHTML = `multiplication table of ${number}`;
  }
  if (number) {
    let num: number = parseInt(number);
    let start: number = 1;
    while (start <= 10) {
      if (output9) {
        output9.innerHTML += "<br>" + `${num} x ${start} = ${num * start}`;
        start++;
      }
    }
  }
};
// 10. Write a ts program to count number of digits in a number.
var Question10: () => void = () => {
  let number: string | null = prompt("Please Enter Number");
  let output10 = document.getElementById("output10") as HTMLDivElement | null;
  if (output10) {
    output10.innerHTML = `count number of digits in a ${number} is : `;
  }
  if (number && output10) {
    output10.innerHTML += number.length;
  }
};
// 11. Write a ts program to find first and last digit of a number.
var Question11: () => void = () => {
  let number: string | null = prompt("Please Enter Number");
  let output11 = document.getElementById("output11") as HTMLDivElement | null;
  if (output11) {
    output11.innerHTML = `find first and last digit of a number ${number} is : `;
  }
  if (number && output11) {
    output11.innerHTML += `first digit is ${number.charAt(
      0
    )} and last digit is ${number.charAt(number.length - 1)}`;
  }
};
// 12. Write a ts program to find sum of first and last digit of a number.
var Question12: () => void = () => {
  let number: string | null = prompt("Please Enter Number");
  let output12 = document.getElementById("output12") as HTMLDivElement | null;
  if (output12) {
    output12.innerHTML = `sum of first and last digit of a number ${number} is : `;
  }
  if (number && output12) {
    output12.innerHTML += +number.charAt(0) + +number.charAt(number.length - 1);
  }
};
// 13. Write a ts program to swap first and last digits of a number.
var Question13: () => void = () => {
  let number: string | null = prompt("Please Enter Number");
  let output13 = document.getElementById("output13") as HTMLDivElement | null;
  if (output13) {
    output13.innerHTML = `sum of first and last digit of a number ${number} is : `;
  }
  if (number && output13) {
    output13.innerHTML += +number.charAt(0) + +number.charAt(number.length - 1);
  }
};
// 14. Write a ts program to calculate sum of digits of a number.
var Question14: () => void = () => {
  let number: string | null = prompt("Please Enter Number");
  let output14 = document.getElementById("output14") as HTMLDivElement | null;
  if (number) {
    let num: number = parseInt(number);
    let sum: number = 0;
    while (num > 0) {
      if (output14) {
        sum = sum + (num % 10);
        num = num / 10;
        output14.innerHTML = `calculate sum of digits of a number ${number} is :${Math.floor(
          sum
        )}`;
      }
    }
  }
};
// 15. Write a ts program to calculate product of digits of a number.
var Question15: () => void = () => {
  let number: string | null = prompt("Please Enter Number");
  let output15 = document.getElementById("output15") as HTMLDivElement | null;
  if (number) {
    let num: number = parseInt(number);
    let product: number = 1;
    while (num != 0) {
      if (output15) {
        product = product * (num % 10);
        num = Math.floor(num / 10);
        output15.innerHTML = `product of digits of a number ${number} is :${product}`;
      }
    }
  }
};
// 16. Write a ts program to enter a number and print its reverse.
var Question16: () => void = () => {
  let number: string | null = prompt("Please Enter Number");
  let output16 = document.getElementById("output16") as HTMLDivElement | null;
  if (number) {
    let num: number = parseInt(number);
    let reverse: number = 0;
    while (num != 0) {
      if (output16) {
        reverse = reverse * 10 + (num % 10);
        num = Math.floor(num / 10);
        output16.innerHTML = `reverse of digits of a number ${number} is :${reverse}`;
      }
    }
  }
};
// 17. Write a ts program to check whether a number is palindrome or not.
var Question17: () => void = () => {
  let number: string | null = prompt("Please Enter Number");
  let output17 = document.getElementById("output17") as HTMLDivElement | null;
  if (number) {
    let num: number = parseInt(number);
    let reverse: number = 0;
    while (num != 0) {
      if (output17) {
        reverse = reverse * 10 + (num % 10);
        num = Math.floor(num / 10);
        if (reverse == +number) {
          output17.innerHTML = `${number} is palindrome : ${reverse}`;
        } else {
          output17.innerHTML = `${number} is not palindrome : ${reverse}`;
        }
      }
    }
  }
};
// 18. Write a ts program to find frequency of each digit in a given integer.
var Question18: () => void = () => {
  let number: string | null = prompt("Please Enter Number");
  let digit: string | null = prompt("Please Enter digit");
  let output18 = document.getElementById("output18") as HTMLDivElement | null;
  if (number && digit) {
    let num: number = parseInt(number);
    let digt: number = parseInt(digit);
    let count: number = 1;
    while (num) {
      if (output18) {
        if (num % 10 === digt) count++;
        num /= 10;
        output18.innerHTML = `frequency of each digit ${digt} in a given integer ${number} is : ${count}`;
      }
    }
  }
};
// 19. Write a ts program to enter a number and print it in words.
var Question19: () => void = () => {
  let number: string | null = prompt("Please Enter Number");
  let output19 = document.getElementById("output19") as HTMLDivElement | null;
  if (number) {
    let num: number = parseInt(number);
    let final: string;

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
var Question20: () => void = () => {
  let output20 = document.getElementById("output20") as HTMLDivElement | null;
  if (output20) {
    for (let i = 0; i <= 255; i++) {
      output20.innerHTML += `ASCII value of character ${String.fromCharCode(
        i
      )} is  : ${i}<br>`;
    }
  }
};
// 21. Write a ts program to find power of a number using for loop.
var Question21: () => void = () => {
  let base1: string | null = prompt("Please Enter Base");
  let exponent1: string | null = prompt("Please Enter Exponent");
  let power: number = 1;
  let output21 = document.getElementById("output21") as HTMLDivElement | null;
  if (output21 && base1 && exponent1) {
    let base = parseInt(base1);
    let exponent = parseInt(exponent1);
    for (let i = 1; i <= exponent; i++) {
      power = power * base;
    }
    output21.innerHTML = `power of a number ${base} ^ ${exponent} is  : ${power}<br>`;
  }
};
// 22. Write a ts program to find all factors of a number.
var Question22: () => void = () => {
  let number: string | null = prompt("Please Enter Number");
  let output22 = document.getElementById("output22") as HTMLDivElement | null;
  if (number && output22) {
    output22.innerHTML = `The factors of  ${number} is  : <br> `;
    let num: number = parseInt(number);
    for (let i = 1; i <= num; i++) {
      if (num % i == 0) {
        output22.innerHTML += ` ${i}<br>`;
      }
    }
  }
};
// 23. Write a ts program to calculate factorial of a number.
var Question23: () => void = () => {
  let number: string | null = prompt("Please Enter Number");
  let output23 = document.getElementById("output23") as HTMLDivElement | null;
  if (number && output23) {
    let num: number = parseInt(number);
    let fact: number = 1;
    if (num < 0)
      output23.innerHTML = `Error! Factorial of a negative number doesn't exist.`;
    else
      for (let i = 1; i <= num; i++) {
        fact *= i;
      }
    output23.innerHTML = `Factorial of ${num} = ${fact}`;
  }
};
// 24. Write a ts program to find HCF (GCD) of two numbers.
var Question24: () => void = () => {
  let number1: string | null = prompt("Please Enter 1st Number");
  let number2: string | null = prompt("Please Enter 2nd Number");
  let output24 = document.getElementById("output24") as HTMLDivElement | null;
  if (output24 && number1 && number2) {
    let num1 = parseInt(number1);
    let num2 = parseInt(number2);
    for (let i = 1; i <= num1 && i <= num2; i++) {
      if (num1 % i == 0 && num2 % i == 0) {
        output24.innerHTML = `HCF (GCD) of two numbers ${num1} and ${num2} is  : (GCD) = ${i}<br>`;
      }
    }
  }
};
// 25. Write a ts program to find LCM of two numbers.
var Question25: () => void = () => {
  let number1: string | null = prompt("Please Enter 1st Number");
  let number2: string | null = prompt("Please Enter 2nd Number");
  let output25 = document.getElementById("output25") as HTMLDivElement | null;
  if (output25 && number1 && number2) {
    let num1 = parseInt(number1);
    let num2 = parseInt(number2);
    for (let i = 1; i <= num1 && i <= num2; i++) {
      if (num1 % i == 0 && num2 % i == 0) {
        output25.innerHTML = `LCMof two numbers ${num1} and ${num2} is  : (LCM) = ${
          (num1 * num2) / i
        }<br>`;
      }
    }
  }
};
// 26. Write a ts program to check whether a number is Prime number or not.
var Question26: () => void = () => {
  let number: string | null = prompt("Please Enter Number");
  let output26 = document.getElementById("output26") as HTMLDivElement | null;
  if (number && output26) {
    let num: number = parseInt(number);
    if (num === 1) {
      output26.innerHTML = `1 is neither prime nor composite number`;
    }
    for (let i = 2; i < num; i++) {
      if (num % i != 0) {
        output26.innerHTML = `${number}  is Prime number`;
      } else {
        output26.innerHTML = `${number}  is not Prime number`;
      }
    }
  }
};
// 27. Write a ts program to print all Prime numbers between 1 to n.
var Question27: () => void = () => {
  let number: string | null = prompt("Please Enter Number");
  let output27 = document.getElementById("output27") as HTMLDivElement | null;
  if (number && output27) {
    let num: number = parseInt(number);
    if (num == 1 || num == 0)
      output27.innerHTML = `${num} is not a prime number`;
    for (var i = 2; i < num; i++) {
      if (num % i == 0) {
        output27.innerHTML += `${num} is not a prime number`;
        break;
      }
    }
    output27.innerHTML = `${num} is a prime number`;
  }
};
// 28. Write a ts program to find sum of all prime numbers between 1 to n.
// 29. Write a ts program to find all prime factors of a number.
// 30. Write a ts program to check whether a number is Armstrong number or not.
var Question30: () => void = () => {
  let number: string | null = prompt("Please Enter Number");
  let output30 = document.getElementById("output30") as HTMLDivElement | null;
  if (number && output30) {
    let num: number = parseInt(number);
    let sum: number = 0;
    while (num > 0) {
      let reverse = num % 10;
      sum = sum + reverse * reverse * reverse;
      num = num / 10;
    }
    console.log(sum);

    if (sum === num) {
      output30.innerHTML = `${number} is an Armstrong number`;
    } else {
      output30.innerHTML = `${number} is not Armstrong number`;
    }
  }
};
