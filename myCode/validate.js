// Script to validate the html form 

function validate_Form()
{
    let name = document.getElementById('i1').value;
    let pwd = document.getElementById('i2').value;
        if(name == "" || name.length <= 4)  
        {
            document.getElementById('s1').innerHTML = "Please enter the correct user name!";
        }
        if (pwd == "" || pwd.length <= 6)
        {
            document.getElementById('s2').innerHTML = "Password should be more than 6 characters!";
        }
    return false;
}



function pwd_Matcher()
{
    let name = document.getElementById('in1').value;
    let p1 = document.getElementById('in2').value;
    let p2 = document.getElementById('in3').value;

        if(name == " " || name.length <= 4)
        {
            document.getElementById('sp2').innerHTML="Please enter the valid user name!";
        }
        if(p1 == p2)
        {
            document.getElementById('sp1').innerHTML="Password doesn't match";
        }
        else
        {
            //alert("Password should be same!");
            document.getElementById('sp1').innerHTML="Please enter the same password";
        }

        return false;
}