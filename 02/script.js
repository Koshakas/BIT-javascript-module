function print(arg) {
  console.log(arg);
}

function rand(min, max) {
  min = Math.ceil(min);

  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

print("\n-----------Užduotis 1----------------");

let numb1 = rand(0, 4);
let numb2 = rand(0, 4);

print("Numb1: " + numb1 + "  Numb2: " + numb2);

if (numb1 * numb2 == 0) {
  print("Dalyba iš nulio");
} else if (numb1 > numb2) {
  print("Dalinam " + numb1 + " iš " + numb2 + " = " + numb1 / numb2);
} else {
  print("Dalinam " + numb2 + " iš " + numb1 + " = " + numb2 / numb1);
}

print("\n-----------Užduotis 2----------------");

let sk1 = rand(0, 25);
let sk2 = rand(0, 25);
let sk3 = rand(0, 25);

print("Mūsų skaičiai: " + sk1 + ", " + sk2 + ", " + sk3);

if (sk1 > sk2 && sk1 > sk3) {
  if (sk2 > sk3) {
    print("Vidurine reikšmė: " + sk2);
  } else {
    print("Vidurinė reikšmė: " + sk3);
  }
} else if (sk2 > sk3) {
  if (sk1 > sk3) {
    print("Vidurinė reikšmė: " + sk1);
  } else {
    print("Vidurinė reikšmė: " + sk3);
  }
} else {
  if (sk1 > sk2) {
    print("Vidurinė reikšmė: " + sk1);
  } else {
    print("Vidurinė reikšmė: " + sk2);
  }
}

print("\n-----------Užduotis 3----------------");

let a = rand(1, 10);
let b = rand(1, 10);
let c = rand(1, 10);

print("Kraštinės: " + a + " " + b + " " + c);

if (a > b + c || b > a + c || c > a + b) {
  print("Trikampis negalimas");
} else print("Trikampis galimas");

print("\n-----------Užduotis 4----------------");

let var1 = rand(0, 2);
let var2 = rand(0, 2);
let var3 = rand(0, 2);
let var4 = rand(0, 2);

let zeros = 0;
let ones = 0;
let twos = 0;

if (var1 == 0) {
  zeros++;
} else if (var1 == 1) {
  ones++;
} else {
  twos++;
}

if (var2 == 0) {
  zeros++;
} else if (var2 == 1) {
  ones++;
} else {
  twos++;
}

if (var3 == 0) {
  zeros++;
} else if (var3 == 1) {
  ones++;
} else {
  twos++;
}

if (var4 == 0) {
  zeros++;
} else if (var4 == 1) {
  ones++;
} else {
  twos++;
}

print("Sugeneruoti skaičiai: " + var1 + ", " + var2 + ", " + var3 + ", " + var4);
print("Nulių: " + zeros + "  Vienetų: " + ones + "  Dvejetų: " + twos);

print("\n-----------Užduotis 5----------------");

let symb1 = rand(-10, 10);
let symb2 = rand(-10, 10);
let symb3 = rand(-10, 10);

if (symb1 < 0) {
  print("+" + symb1 + "+");
} else if (symb1 > 0) {
  print("-" + symb1 + "-");
} else {
  print("*" + symb1 + "*");
}

if (symb2 < 0) {
  print("+" + symb2 + "+");
} else if (symb2 > 0) {
  print("-" + symb2 + "-");
} else {
  print("*" + symb2 + "*");
}

if (symb3 < 0) {
  print("+" + symb3 + "+");
} else if (symb3 > 0) {
  print("-" + symb3 + "-");
} else {
  print("*" + symb3 + "*");
}

print("\n-----------Užduotis 6----------------");

let candles = rand(5, 3000);

if (candles > 2000) {
  print("Žvakių: " + candles + "\nŽvakių kaina -4%: " + candles * 0.96 + "Eur");
} else if (candles > 1000) {
  print("Žvakių: " + candles + "\nŽvakių kaina -3%: " + candles * 0.97 + "Eur");
} else {
  print("Žvakių: " + candles + "\nŽvakių kaina: " + candles + "Eur");
}

print("\n-----------Užduotis 7----------------");

let last1 = rand(0, 100);
let last2 = rand(0, 100);
let last3 = rand(0, 100);

print("Skaičiai: " + last1 + ", " + last2 + ", " + last3);

let count = 3;
let sum = last1 + last2 + last3;

if ((last1 < 10 || last1 > 90) && (last2 < 10 || last2 > 90) && (last3 < 10 || last3 > 90)) {
  print("Visi skaičiai neatitiko sąlygų");
} else {
  if (last1 < 10 || last1 > 90) {
    count--;
    sum -= last1;
    print("Pirmas skaičius išmestas (" + last1 + ")");
  }

  if (last2 < 10 || last2 > 90) {
    count--;
    sum -= last2;
    print("Antras skaičius išmestas (" + last2 + ")");
  }

  if (last3 < 10 || last3 > 90) {
    count--;
    sum -= last3;
    print("Trečias skaičius išmestas (" + last3 + ")");
  }

  print("Aritmetinis " + count + " skaičių vidurkis: " + sum / count);
}
