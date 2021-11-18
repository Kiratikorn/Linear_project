function check() {
  const quest = [];
  const ui_ubar = [];
  let u_ubar = 0;
  let hw = 0, sw = 0, nw = 0;
  const hw_v = [0.085, 0.585, 0.735, -0.615, -0.315, 0.635, 0.185, -0.565, -0.365, -0.365, 1.546043337]
  const sw_v = [-0.745, 0.555, 0.105, -0.495, -0.095, 0.555, -0.695, 0.255, 0.255, 0.305, 1.463642716]
  const nw_v = [-0.335, 0.415, 0.365, -0.535, 0.015, 0.665, -0.235, -0.185, 0.015, -0.185, 1.127053681]
  quest[0] = parseInt(document.getElementById("quiz").question1.value);
  quest[1] = parseInt(document.getElementById("quiz").question2.value);
  quest[2] = parseInt(document.getElementById("quiz").question3.value);
  quest[3] = parseInt(document.getElementById("quiz").question4.value);
  quest[4] = parseInt(document.getElementById("quiz").question5.value);
  quest[5] = parseInt(document.getElementById("quiz").question6.value);
  quest[6] = parseInt(document.getElementById("quiz").question7.value);
  quest[7] = parseInt(document.getElementById("quiz").question8.value);
  quest[8] = parseInt(document.getElementById("quiz").question9.value);
  quest[9] = parseInt(document.getElementById("quiz").question10.value);
  if(quest.includes(NaN)){
    alert("Please choice all answer");
    return false
  }

  avg = average(quest);
  console.log("average = " + avg)
  for (let i = 0; i < quest.length; i++) {
    ui_ubar[i] = parseFloat((quest[i] - avg).toFixed(2));
    u_ubar += parseFloat(Math.pow(ui_ubar[i], 2).toFixed(2))
    hw += (ui_ubar[i] * hw_v[i]);
    sw += (ui_ubar[i] * sw_v[i]);
    nw += (ui_ubar[i] * nw_v[i]);
    let txt = (i + 1) + ">>" + ui_ubar[i];
    console.log(txt);
  }
  u_ubar = Math.sqrt(u_ubar)
  hw /= (u_ubar * hw_v[10])
  sw /= (u_ubar * sw_v[10])
  nw /= (u_ubar * nw_v[10])

  // console.log(ui_ubar)
  console.log("u_Ubar = " + u_ubar);
  console.log("hw = " + hw);
  console.log("sw = " + sw);
  console.log("nw = " + nw);

  if (hw > nw && sw > nw)
    result(1)
  else if (hw > sw && nw > sw)
    result(2)
  else if (sw > hw && nw > hw)
    result(3)
  else if(avg == 3 && u_ubar == 0)
    result(4)
  else if(avg > 3 && u_ubar == 0)
    result(5)
  else if(avg < 3 && u_ubar == 0)
    result(6)
  window.open("index.html","_self")
}

function average(nums) {
  return nums.reduce((a, b) => (a + b)) / nums.length;
}
function sum(nums) {
  return nums.reduce((a, b) => a + b);
}
function sumSquare(nums) {
  return nums.reduce((a, b) => a + Math.pow(b, 2));
}

function result(res) {
  var w = 480, h = 340;
  if (document.getElementById) {
    w = screen.availWidth;
    h = screen.availHeight;
  }

  var popW = 400, popH = 700;

  var leftPos = (w - popW) / 2;
  var topPos = (h - popH) / 2;


  msgWindow = window.open('', 'popup', 'width=' + popW + ',height=' + popH +
    ',top=' + topPos + ',left=' + leftPos + ',scrollbars=no');
  if (res == 1) {
    msgWindow.document.write
      ('<HTML><HEAD><TITLE>Result</TITLE></HEAD><BODY style="background-color:#AED6F1;"><FORM    NAME="form1">' +
        ' <H1 style = "text-align: center;"}>Result is:<br />' +
        '<img src="hw_sw.jpg" width =100%><br />' +
        '<INPUT TYPE="button" VALUE="Close"onClick="window.close();"></FORM></BODY>   </HTML>');
  }
  else if (res == 2) {
    msgWindow.document.write
      ('<HTML><HEAD><TITLE>Result</TITLE></HEAD><BODY style="background-color:#AED6F1;"><FORM    NAME="form1">' +
      ' <H1 style = "text-align: center;"}>Result is:<br />' +
        '<img src="hw_nw.jpg" width =100%><br />' +
        '<INPUT TYPE="button" VALUE="Close"onClick="window.close();"></FORM></BODY>   </HTML>');
  }
  else if (res == 3) {
    msgWindow.document.write
      ('<HTML><HEAD><TITLE>Result</TITLE></HEAD><BODY style="background-color:#AED6F1;"><FORM    NAME="form1">' +
      ' <H1 style = "text-align: center;"}>Result is:<br />'  +
        '<img src="sw_nw.jpg" width =100%><br />' +
        '<INPUT TYPE="button" VALUE="Close"onClick="window.close();"></FORM></BODY>   </HTML>');
  }
  else if (res == 4) {
    msgWindow.document.write
      ('<HTML><HEAD><TITLE>Result</TITLE></HEAD><BODY style="background-color:#AED6F1;"><FORM    NAME="form1">' +
      ' <H1 style = "text-align: center;"}>Result is:คุณชอบทุกสายเท่าๆกัน<br />'  +
        '<INPUT TYPE="button" VALUE="Close"onClick="window.close();"></FORM></BODY>   </HTML>');
  }
  else if (res == 5) {
    msgWindow.document.write
      ('<HTML><HEAD><TITLE>Result</TITLE></HEAD><BODY style="background-color:#AED6F1;"><FORM    NAME="form1">' +
      ' <H1 style = "text-align: center;"}>Result is :คุณสามารถเลือกได้ทุกสาย<br />'  +
        '<INPUT TYPE="button" VALUE="Close"onClick="window.close();"></FORM></BODY>   </HTML>');
  }
  else if (res == 6) {
    msgWindow.document.write
      ('<HTML><HEAD><TITLE>Result</TITLE></HEAD><BODY style="background-color:#AED6F1;"><FORM    NAME="form1">' +
      ' <H1 style = "text-align: center;"}>Result is:ไม่มีสายไหนเหมาะกับคุณเลย<br />'  +
        '<INPUT TYPE="button" VALUE="Close"onClick="window.close();"></FORM></BODY>   </HTML>');
  }
 
}

