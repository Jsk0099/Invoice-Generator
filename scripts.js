
let hn = "", amount = 0, mode = "", date = "";
const firebaseConfig = {
    apiKey: "AIzaSyAEffAt9qqng_qwurmlj-0FxL5xF4ttXLQ",
    authDomain: "trying-a6456.firebaseapp.com",
    projectId: "trying-a6456",
    storageBucket: "trying-a6456.appspot.com",
    messagingSenderId: "269899344145",
    appId: "1:269899344145:web:4a32fa415a12ac0368c4b0"
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// Adding Data To FireStore
function add(hn, amount, mode, date, dt) {
    // dt = new Date().getDate() + "" + (new Date().getMonth() + 1) + new Date().getFullYear() + "-" + new Date().getSeconds();
    db.collection("X-Ray").doc(dt).set({
        Date: date,
        Amount: Number(amount),
        Mode: mode,
        Name: hn
    })
        .then(() => {
            const elementToSave = document.querySelector("#printlayout");
            html2canvas(elementToSave).then(canvas => {
                const a = document.createElement("a");
                a.href = canvas.toDataURL("image/jpeg");
                let dt = new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear();
                a.download = hn + " " + dt + " Invoice.jpeg";
                a.click();

            });
            /*  alert("Document successfully Downloaded!"); */
        })
        .catch((error) => {
            //alert("Error While Downloading Document: ", error);
            alert("Error While Downloading Document: ");
        });
}
let sfetchamount = 0, efetchamount = 0;
//fetch(0,500);
//console.log("next");
//fetch(0,1000);
function fetch(sfetchamount, efetchamount) {
    //console.log("load");

    // var output =
    // [START get_multiple]
    db.collection("X-Ray").where("Amount", ">=", sfetchamount).where('Amount', "<=", efetchamount)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    // console.log("Done");
}
let ar = [];
function fetchall() {
    let c = 0;
    db.collection("X-Ray").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            c++;
            ar.push(doc.data());
            //console.log(doc.id, " => ", doc.data());
        });
        //console.log("Count : " + c);
        document.querySelector('#c').innerHTML = "Total Record Count : "+c;
        document.querySelector('#c').style.visibility = 'visible';
    });
    document.getElementById('tab').style.visibility = 'visible';
    // console.log("Array : "+ar);
    ar.forEach(ele => {
        //ele.Name + " | " + ele.Mode + " | " + ele.Amount;
        //console.log(ele.Name + " | " + ele.Date + " | " + ele.Mode + " | " + ele.Amount)
        addtotable(ele.Name, ele.Date, ele.Mode, ele.Amount);
    });
}
function addtotable(name, date, mode, amount) {
    let x = document.createElement('tr');
    //let td4 = document.createElement('td').innerHTML = id;
    let td0 = document.createElement('td');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');

    td0.innerHTML = name;
    td1.innerHTML = date;
    td2.innerHTML = mode;
    td3.innerHTML = amount;
    x.append(td0);
    x.append(td1);
    x.append(td2);
    x.append(td3);
    document.getElementById('rec').append(x);
}




function check() {

    if (document.getElementById('rn').value && document.getElementById('hn').value && document.getElementById('d').value && document.getElementById('a').value) {
        document.getElementById('mysec').style.visibility = 'visible';
        document.getElementById('num').innerHTML = document.getElementById('rn').value;
        document.getElementById('hname').innerHTML = document.getElementById('hn').value;
        document.getElementById('rword').innerHTML = wordify(document.getElementById('a').value) + " Only";

        var ele = document.getElementsByName('r');
        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                mode = document.getElementById("mpay").innerHTML = ele[i].value;
        }
        date = new Date(document.getElementById('d').value);
        date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        let dt1 = document.getElementsByClassName('dt');
        for (let i = 0; i < dt1.length; i++) {
            dt1[i].innerHTML = date;
        }
        document.getElementById('amount-value').innerHTML = Intl.NumberFormat('en-IN').format(document.getElementById('a').value) + "/- ";
        hn = document.getElementById('hn').value;
        amount = parseInt(document.getElementById('a').value);


    } else {
        alert(' Please Fill The Data !!! ');
    }
}

function printit() {
    /* const elementToSave = document.querySelector("#printlayout");
    html2canvas(elementToSave).then(canvas => {
        const a = document.createElement("a");
        a.href = canvas.toDataURL("image/jpeg");
        let dt = new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear();
        add(hn, amount, mode, date, dt);
        a.download = hn + " " + dt + " Invoice.jpeg";
        a.click(); */

    let dt = new Date().getDate() + "" + (new Date().getMonth() + 1) + "" + "-" + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    add(hn, amount, mode, date, dt);

    // });
}

const wordify = (num) => {
    const single = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const double = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const formatTenth = (digit, prev) => {
        return 0 == digit ? "" : " " + (1 == digit ? double[prev] : tens[digit])
    };
    const formatOther = (digit, next, denom) => {
        return (0 != digit && 1 != next ? " " + single[digit] : "") + (0 != next || digit > 0 ? " " + denom : "")
    };
    let res = "";
    let index = 0;
    let digit = 0;
    let next = 0;
    let words = [];
    if (num += "", isNaN(parseInt(num))) {
        res = "";
    }
    else if (parseInt(num) > 0 && num.length <= 10) {
        for (index = num.length - 1; index >= 0; index--) switch (digit = num[index] - 0, next = index > 0 ? num[index - 1] - 0 : 0, num.length - index - 1) {
            case 0:
                words.push(formatOther(digit, next, ""));
                break;
            case 1:
                words.push(formatTenth(digit, num[index + 1]));
                break;
            case 2:
                words.push(0 != digit ? " " + single[digit] + " Hundred" + (0 != num[index + 1] && 0 != num[index + 2] ? " and" : "") : "");
                break;
            case 3:
                words.push(formatOther(digit, next, "Thousand"));
                break;
            case 4:
                words.push(formatTenth(digit, num[index + 1]));
                break;
            case 5:
                words.push(formatOther(digit, next, "Lakh"));
                break;
            case 6:
                words.push(formatTenth(digit, num[index + 1]));
                break;
            case 7:
                words.push(formatOther(digit, next, "Crore"));
                break;
            case 8:
                words.push(formatTenth(digit, num[index + 1]));
                break;
            case 9:
                words.push(0 != digit ? " " + single[digit] + " Hundred" + (0 != num[index + 1] || 0 != num[index + 2] ? " and" : " Crore") : "")
        };
        res = words.reverse().join("")
    } else res = "";
    return res
};