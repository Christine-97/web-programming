function myFunction() {

 var x = document.forms["csiform"]["name"];
    if (x.value == "") {
        alert("FName should not be blank !!");
		document.getElementById("name").focus();
        return false;
    }

	if (! allLetter(x)) {
		 alert("FName should be all characters!!");
		 return false;
	}

var y = document.forms["csiform"]["num"];

  if (y.value == "") {
                alert("Contact No. should not be blank !!");
		            
		return false;
            }

	if (! allnumeric(y)) {
		 alert('Please input numeric characters only');
      return false;
	}

var z = document.forms["csiform"]["email"];

  if (z.value == "") {
                alert("Email should not be blank !!");
		            
		return false;
            }


var t = document.forms["csiform"]["dept"];
	if (!deptselect(t)) {
		 alert('Please select Department!!!');
      return false;
	}

var t = document.forms["csiform"]["yr"];
	if (!deptselect(t)) {
		 alert('Please select Class!!!');
      return false;
	}

 }
	
	
	
function allLetter(inputtxt)
                {
                 var letters = /^[A-Za-z]+$/;
                 if(inputtxt.value.match(letters))
                   {
              	     return true;
                   }
                 else
                   {
              	     return false;
                   }
                }


            function allnumeric(inputtxt)
               {
                  var numbers = /^[0-9]+$/;
                  if(inputtxt.value.match(numbers))
                  {
                    return true;
                  }
                  else
                  {
                    return false;
                  }
               }

  

            function limit(element,limit)
              {
                var max_chars = limit;

                  if(element.value.length > max_chars) {
                    element.value = element.value.substr(0, max_chars);
                  }
              }

			function ValidateEmail(inputText)
			 {
				var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				if(inputText.value.match(mailformat))
					{
					
					return true;
					}
				else
					{
					return false;
					}
			}

			function deptselect(dept)
			{
				if(dept.value == "no")
					{
						return false;
					}
					else
					{
						return true;
					}
			}

			function validateGender(inputText)
			{
				if ( ( inputText.gen[0].checked == false ) && ( inputText.gen[1].checked == false ) )
						return false;
				else
					 return true;
				}

			function validateSkill(inputText)
			{
				if ( ( inputText.skl[0].checked == false ) && ( inputText.skl[1].checked == false ) && ( inputText.skl[2].checked == false ) && ( inputText.skl[3].checked == false ) && ( inputText.skl[4].checked == false )  && ( inputText.skl[5].checked == false ))
					return false;
				
				else
					 return true;
			}


			function manageFee()
			{
				//alert("manageFee");
				var t = document.forms["csiform"];
				
				if (t.dmem[0].checked == true)
					{
						disableImem();
						t.amt.value="200";
					}
				if (t.dmem[1].checked == true)
					{
						disableImem();
						t.amt.value="300";
					}
				if (t.dmem[2].checked == true)
					{
						disableImem();
						t.amt.value="400";
					}
				if (t.dmem[3].checked == true)
					{
						enableImem();

						disableDmem();
						t.amt.value="";
					}
			

				/////////////////////////////
				
				if (t.imem[0].checked == true)
					{
						disableDmem();
						t.amt.value="1150";
					}
				if (t.imem[1].checked == true)
					{
						disableDmem();
						t.amt.value="2070";
					}
				if (t.imem[2].checked == true)
					{
						disableDmem();
						t.amt.value="2990";
					}
				if (t.imem[3].checked == true)
					{
						disableDmem();
						t.amt.value="15000";
					}
				if (t.imem[4].checked == true)
					{t.amt.value="";
						enableDmem();
						t.dmem[3].disabled=true;
						disableImem();
						
					}


			}

			function disableDmem()
			{
			var t = document.forms["csiform"];
						t.dmem[0].disabled=true;
						t.dmem[1].disabled=true;
						t.dmem[2].disabled=true;
						t.dmem[3].disabled=true;
			}

			function disableImem()
			{
				var t = document.forms["csiform"];
						t.imem[0].disabled=true;
						t.imem[1].disabled=true;
						t.imem[2].disabled=true;
						t.imem[3].disabled=true;
						t.imem[4].disabled=true;
			}


			function enableDmem()
			{
				var t = document.forms["csiform"];
						t.dmem[0].disabled=false;
						t.dmem[1].disabled=false;
						t.dmem[2].disabled=false;
						t.dmem[3].disabled=false;
			}

			function enableImem()
			{
				var t = document.forms["csiform"];
						t.imem[0].disabled=false;
						t.imem[1].disabled=false;
						t.imem[2].disabled=false;
						t.imem[3].disabled=false;
						t.imem[4].disabled=false;
			}




				