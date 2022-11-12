
function check() {
    if (document.getElementById('rn').value && document.getElementById('hn').value && document.getElementById('d').value && document.getElementById('a').value) {
        document.getElementById('mysec').style.visibility = 'visible';
        document.getElementById('num').innerHTML = document.getElementById('rn').value;
        document.getElementById('hname').innerHTML = document.getElementById('hn').value;
        document.getElementById('rword').innerHTML = wordify(document.getElementById('a').value) + " Only";

        var ele = document.getElementsByName('r');
        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                document.getElementById("mpay").innerHTML = ele[i].value;
        }
        let dt = new Date(document.getElementById('d').value);
        dt = dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
        let dt1 = document.getElementsByClassName('dt');
        for (let i = 0; i < dt1.length; i++) {
            dt1[i].innerHTML = dt;
        }
        document.getElementById('amount-value').innerHTML = Intl.NumberFormat('en-IN').format(document.getElementById('a').value) + "/- ";
    } else {
        alert(' Please Fill The Data !!! ');
    }
}

function printit() {
    const elementToSave = document.querySelector("#printlayout");
    html2canvas(elementToSave).then(canvas => {
        const a = document.createElement("a");
        a.href = canvas.toDataURL("image/jpeg");
        a.download = document.getElementById('hn').value + " " + new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear() + " Invoice.jpeg";
        a.click();
    });
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