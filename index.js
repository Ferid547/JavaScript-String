let monthName = prompt("Necənci ayı daxil edirsiniz və yaxud hansı ayı daxil edirsiniz?");

switch (monthName) {
    case "yanvar":
    case "1":
        alert("yanvar 1-ci aydır və qış ayıdır");
        break;
    case "fevral":
    case "2":
        alert("fevral 2-ci aydır və qış ayıdır");
        break;
    case "mart":
    case "3":
        alert("mart 3-cü aydır və yaz ayıdır");
        break;
    case "aprel":
    case "4":
        alert("aprel 4-cü aydır və yaz ayıdır");
        break;
    case "may":
    case "5":
        alert("may 5-ci aydır və yaz ayıdır");
        break;
    case "iyun":
    case "6":
        alert("iyun 6-cı aydır və yay ayıdır");
        break;
    case "iyul":
    case "7":
        alert("iyul 7-ci aydır və yay ayıdır");
        break;
    case "avqust":
    case "8":
        alert("avqust 8-ci aydır və yay ayıdır");
        break;
    case "sentyabr":
    case "9":
        alert("sentyabr 9-cu aydır və payız ayıdır");
        break;
    case "oktyabr":
    case "10":
        alert("oktyabr 10-cu aydır və payız ayıdır");
        break;
    case "noyabr":
    case "11":
        alert("noyabr 11-ci aydır və payız ayıdır");
        break;
    case "dekabr":
    case "12":
        alert("dekabr 12-ci aydır və qış ayıdır");
        break;
        default:
        alert("Belə bir ay yoxdur!");
}



let a = "Salam mənim adım Fəriddir";
let b = "";
for (i = 0; i < a.length; i++) {
  let result = a.charAt(i);
  if (result == "l") {
    result = "y";
  }
  b += result;
  console.log(b);
}
