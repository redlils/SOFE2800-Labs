const searchInfo = {
    queries: [],
    limit: 5,
    addQuery: function(query) {
      if (this.queries.length >= this.limit) {
        var oldestQuery = this.queries.shift(); 
        console.log("Oldest search query has been deleted: ", oldestQuery);
      }
      this.queries.push(query);
    }
  }
  
  function validateSearchForm() {
    let x = document.getElementById("searchText").value;

    if (x == "") {
      alert("The search query has to be filled out!");
      return false;
    } else {
      searchInfo.addQuery(x);
      console.log("Recent searches: ", searchInfo.queries);
      return true;
    }
  }


function calculate() {
 
  let op1 = document.forms["simpleCalculator"]["operand1"].value;
  let oper = document.forms["simpleCalculator"]["operator"].value;
  let op2 = document.forms["simpleCalculator"]["operand2"].value;
  

  if (op1 === "" || op2 === "") {
      alert("Both operands must be filled in.");
      return;
  }

  op1 = Number(op1);
  op2 = Number(op2);
  
  if (isNaN(op1) || isNaN(op2)) {
      alert("Please enter valid numbers.");
      return;
  }

  let result = 0;

  switch (oper) {
      case '+':
          result = op1 + op2;
          break;
      case '-':
          result = op1 - op2;
          break;
      case '*':
          result = op1 * op2;
          break;
      case '/':
          if (op2 === 0) {
              alert("Division by 0 is not allowed.");
              return;
          }
          result = op1 / op2;
          break;
      default:
          alert("Invalid operator");
          return;
  }
  document.forms["simpleCalculator"]["result"].value = result;
}

function dis(val, formName) {
  document.forms[formName]["result"].value += val;
}

function clr(formName) {
  document.forms[formName]["result"].value = "";
}

function solve(formName) {
  let x = document.forms[formName]["result"].value;
  let y = math.evaluate(x);
  document.forms[formName]["result"].value = y;
}

  