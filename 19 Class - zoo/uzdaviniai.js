function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("------------------1 uzd Kibiras-------------------");

class Kibiras1 {
  static visiAkmenys = 0;
  static akmenuSkaiciusVisuoseKibiruose() {
    return this.visiAkmenys;
  }
  static bendrasAkmenuSkaicius(akmenuSkaicius) {
    this.visiAkmenys += akmenuSkaicius;
  }

  constructor() {
    this.akmenuKiekis = 0;
  }
  prideti1Akmeni() {
    this.akmenuKiekis++;
    this.constructor.bendrasAkmenuSkaicius(1);
  }
  pridetiDaugAkmenu(kiekis) {
    this.akmenuKiekis += kiekis;
    this.constructor.bendrasAkmenuSkaicius(kiekis);
  }
  kiekPririnktaAkmenu() {
    console.log("Akmenų kibire:", this.akmenuKiekis);
  }
}

const kib1 = new Kibiras1();
const kib2 = new Kibiras1();
const kib3 = new Kibiras1();

kib1.prideti1Akmeni();
kib2.prideti1Akmeni();
kib2.prideti1Akmeni();
kib3.prideti1Akmeni();
kib3.prideti1Akmeni();
kib3.prideti1Akmeni();

kib1.pridetiDaugAkmenu(2);
kib2.pridetiDaugAkmenu(4);
kib3.pridetiDaugAkmenu(6);

kib1.kiekPririnktaAkmenu();
kib2.kiekPririnktaAkmenu();
kib3.kiekPririnktaAkmenu();

console.log("Akmenų visuose kibiruose", Kibiras1.akmenuSkaiciusVisuoseKibiruose());

console.log("---------------2 uzd pinigine------------------");

class Pinigine {
  constructor() {
    this.popieriniaiPinigai = 0;
    this.metaliniaiPinigai = 0;
    this.monetuMas = [];
    this.banknotuMas = [];
  }
  ideti(kiekis) {
    if (kiekis > 2) {
      this.popieriniaiPinigai += kiekis;
      this.banknotuMas.push(kiekis);
    } else {
      this.metaliniaiPinigai += kiekis;
      this.monetuMas.push(kiekis);
    }
  }
  skaiciuoti() {
    console.log("Popierinių pinigų:", this.popieriniaiPinigai);
    console.log("Metalinių pinigų:", this.metaliniaiPinigai);
  }
  monetos() {
    return this.monetuMas.length;
  }
  banknotai() {
    return this.banknotuMas.length;
  }
}

const pinigine = new Pinigine();
pinigine.ideti(1);
pinigine.ideti(2);
pinigine.skaiciuoti();
pinigine.ideti(5);
pinigine.ideti(5);
pinigine.ideti(1);
pinigine.ideti(3);
pinigine.ideti(8);
pinigine.ideti(7);
pinigine.ideti(2);
pinigine.ideti(1);
pinigine.ideti(1);
pinigine.ideti(1);
pinigine.skaiciuoti();

console.log("-------------3/4 uzd troleibusas----------------");

class Troleibusas {
  static visiKeleiviai = 0;
  static keleiviuSkaiciusVisuoseTroleibusuose() {
    return this.visiKeleiviai;
  }
  static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
    this.visiKeleiviai += keleiviuSkaicius;
  }

  constructor() {
    this.keleiviuSkaicius = 0;
  }
  ilipa(keleiviuSkaicius) {
    this.keleiviuSkaicius += keleiviuSkaicius;
    this.constructor.bendrasKeleiviuSkaicius(keleiviuSkaicius);
    console.log("ilipo", keleiviuSkaicius, "keleivių");
  }
  islipa(keleiviuSkaicius) {
    console.log("buvo keleivių", this.keleiviuSkaicius);
    this.keleiviuSkaicius -= keleiviuSkaicius;
    if (this.keleiviuSkaicius < 0) {
      this.keleiviuSkaicius = 0;
    }

    if (keleiviuSkaicius < this.constructor.visiKeleiviai) {
      this.constructor.bendrasKeleiviuSkaicius(-keleiviuSkaicius);
    } else this.constructor.visiKeleiviai = 0;

    console.log("išlipo", keleiviuSkaicius, "liko keleivių:", this.keleiviuSkaicius);
  }
  vaziuoja() {
    console.log("Troleibuse važiuoja", this.keleiviuSkaicius, "žmonių");
  }
}

const trol1 = new Troleibusas();
const trol2 = new Troleibusas();
const trol3 = new Troleibusas();
trol1.ilipa(5);
trol2.ilipa(8);
trol3.ilipa(2);
console.log("viso keleivių:", Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose());
trol1.islipa(1);
trol2.islipa(2);
trol3.islipa(2);
console.log("viso keleivių:", Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose());

console.log("-----------5 uzd pirkiniu krepselis----------");

class PirkiniuKrepselis {
  constructor() {
    this.turinys = new Map([
      ["sureliai", []],
      ["pienas", []],
      ["duona", []]
    ]);
  }
  idetiSureli(kiekis) {
    const mas = this.turinys.get("sureliai");
    mas.push(kiekis);
    this.turinys.set("sureliai", mas);
  }
  idetiPieno(kiekis) {
    const mas = this.turinys.get("pienas");
    mas.push(kiekis);
    this.turinys.set("pienas", mas);
  }
  idetiDuonos(kiekis) {
    const mas = this.turinys.get("duona");
    mas.push(kiekis);
    this.turinys.set("duona", mas);
  }
  krepselioTurinys() {
    console.log("surelių", this.turinys.get("sureliai"));
    console.log("pieno", this.turinys.get("pienas"));
    console.log("duonos", this.turinys.get("duona"));
  }
}
const pirkinys = new PirkiniuKrepselis();
pirkinys.idetiSureli(5);
pirkinys.idetiSureli(10);

pirkinys.idetiPieno(7);
pirkinys.idetiPieno(14);

pirkinys.idetiDuonos(9);
pirkinys.idetiDuonos(18);

pirkinys.krepselioTurinys();

console.log("-------------6 uzd pinigine update----------------");

console.log("monetu:", pinigine.monetos(), pinigine.monetuMas);
console.log("banknotu:", pinigine.banknotai(), pinigine.banknotuMas);

console.log("-------------8 uzd stikline----------------");

class Stikline {
  constructor(turis) {
    this.turis = turis;
    this.kiekis = 0;
  }
  ipilti(kiekis) {
    if (kiekis >= this.turis) {
      this.kiekis = this.turis;
    } else {
      this.kiekis += kiekis;
    }
  }
  ispilti() {
    const ispilam = this.kiekis;
    this.kiekis = 0;
    return ispilam;
  }
  stiklinejeYra() {
    console.log(this.kiekis);
  }
}

const dideleStikline = new Stikline(200);
const vidutineStikline = new Stikline(150);
const mazaStikline = new Stikline(100);

dideleStikline.ipilti(200);
dideleStikline.stiklinejeYra();

vidutineStikline.ipilti(dideleStikline.ispilti());
vidutineStikline.stiklinejeYra();

mazaStikline.ipilti(vidutineStikline.ispilti());
mazaStikline.stiklinejeYra();

console.log("-------------9 uzd Grybas----------------");

class Grybas {
  constructor() {
    rand(0, 1) ? (this.valgomas = true) : (this.valgomas = false);
    rand(0, 1) ? (this.sukirmijes = true) : (this.sukirmijes = false);
    this.svoris = rand(5, 45);
  }
}

class Krepsys {
  constructor() {
    this.dydis = 500;
    this.prikrauta = 0;
  }
  detiGryba(grybas) {
    this.prikrauta += grybas;
  }
}

const krepsys = new Krepsys();

while (krepsys.prikrauta < krepsys.dydis) {
  const grybas = new Grybas();
  if (!grybas.sukirmijes && grybas.valgomas) {
    krepsys.detiGryba(grybas.svoris);
  }
}
console.log("Viso prikrauta grybų:", krepsys.prikrauta);
