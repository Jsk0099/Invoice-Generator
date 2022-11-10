<?php
$rn = $_REQUEST['rn'];
$hn = $_REQUEST['hn'];
$rw = $_REQUEST['rw'];
$r = $_REQUEST['r'];
$d = $_REQUEST['d'];
$a = $_REQUEST['a'];

$x = date_create($d);
$y = date_format($x,'d/m/Y');
//echo date_format($x,'d-m-Y');

/* echo "<br>";
echo "RN : ".$rn."<br>" ;
echo "HN : ".$hn."<br>";
echo "RW : ".$rw."<br>";
echo "R : ".$r."<br>";
echo "D : ".$y."<br>";
echo "A : ".$a."<br><br>"; */

?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Template</title>
    <style>
        
    </style>
</head>

<body>
    <style>
        @media print{
            body *:not(#mysec):not(#mysec *){
                visibility: hidden;
            }
        }
        #container {
            border: 2px blue solid;
            border-radius: 5px;
            background-color: darkgray;
            padding: 3px;
            width: 551px;
            margin-left:auto ;
            margin-right: auto;
        }

        #sub-container {
            padding: 5px;
            border: 2px rgb(103, 103, 151) solid;
            background-color: rgb(255, 255, 255);
            border-radius: 5px;
        }

        #title {
            font-size: 25px;
            margin-top: 5px;
            margin-left:auto ;
            margin-right: auto;
            width: fit-content;
            text-align: center;
            color: blue;
            background-color: aquamarine;
           
        }

        #mob {
            font-size: 20px;
            text-align: right;
            padding-right: 11px;
        }

        #name {
font-size: 21px;
            text-align: center;
        }

        #no {
            font-size: 20px;
            padding: 11px;
            text-align: left;
        }

        #db {

            position: relative;
            display: inline-block;
            padding-inline-start: 297px;
            text-align: right;
        }
        #content{
            padding: 11px;
            font-size: 18px;
            text-align: justify;
        }
        #amount{
            margin: 11px;
            font-size:21px;
            background-color: darkblue;
            width:max-content;
            color: white;
            border: 1px black solid;
        }
        
        #sign{
            font-size: 19px;
        text-align: right;
        padding-bottom: 3px;
        padding-right: 11px;
        }
        span{
            
            font-size: 19px;
            text-decoration: underline;
        }
        span#amount-value{
            font-size: 21px;
            background-color: white;
            border: 1px black solid;
            padding-left: 3px;
            padding-right:3px ;
            color: blue;
            text-decoration: none;
        }
    </style>
    <section id="mysec">
    <div id="container">
        <div id="sub-container">
            <div id="title">Receipt</div>
            <div id="mob">Mo. 8347809913 <br /> 9408916016</div>
            <div id="name">____________BHARAT SOLANKI____________</div>
            <div id="no">No. <?php echo $rn; ?> <div id="db">Date : <?php echo $y; ?> </div>
            </div>
            <div id="content">Received With Thanks From <span><?php echo $hn; ?></span> a sum of rupees <span><?php echo $rw; ?> Only</span>
                By <span><?php echo $r ; ?></span> Dated <span><?php echo $y; ?></span> as X-Ray Charges. </div>
            <div id="amount">Rs. <span id="amount-value"><?php echo $a; ?>/-</span></div>
            <div id="sign">Signature <br> Bharat Solanki</div>
            <!-- <div id="bs"></div> -->

        </div>
    </div>
    </section>
    <button onclick="window.print()">Print</button>
</body>

</html>