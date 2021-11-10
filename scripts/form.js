let signupEmail= document.getElementById("inputEmail4");
let signupEmailError= document.getElementById("errordisplayEmail");
let signupSetPwd= document.getElementById("inputPassword4");
let signupSetPwdError= document.getElementById("errordisplaySetpwd");
let signupPh= document.getElementById("inputPhoneNumber");
let signupPhError= document.getElementById("errordisplayPh");
let signupConPwd= document.getElementById("inputPassword5");
let signupConPwdError= document.getElementById("errordisplayConpwd");
let signupCheckbox= document.getElementById("gridCheck");

let LoginEmail= document.getElementById("LEmail");
let LoginEmailError= document.getElementById("LerrordisplayEmail");
let LoginPwd= document.getElementById("LPwd");
let LoginPwdError= document.getElementById("LerrordisplayPwd");



function validate()
{   
    
    // var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var res = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    //var psr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var psr=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z0-9\.-@#!$%*%]{8,}$/;
    var phDigit=/^\d{10}$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(signupEmail.value.trim()==""||signupSetPwd.value.trim()==""||signupConPwd.value.trim()==""||signupPh.value.trim()=="")
    {   
        signupEmail.style.border="2px solid red";
        signupSetPwd.style.border="2px solid red";
        signupConPwd.style.border="2px solid red";
        signupPh.style.border="2px solid red";
        
        window.alert("All required fields are not entered!!!");
        return false;
    }



    else if(res.test(signupEmail.value)!="1")
    {
        signupEmailError.innerHTML="Email Is Invalid";
        signupEmailError.style.color="red";
        return false;
    }
    else if(phoneno.test(signupPh.value)!="1"&& phDigit.test(signupPh.value)!="1")
    {   signupPhError.innerHTML="Please enter a valid phone number ";
        signupPhError.style.color="red";
        return false;
    }
    else if(psr.test(signupSetPwd.value)!="1")
    {   signupSetPwdError.innerHTML="Password should be of minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number";
        signupSetPwdError.style.color="red";
        return false;
    }
    else  if(signupSetPwd.value!=signupConPwd.value)
    {   signupConPwdError.innerHTML="Passwords Doesnt Match, Please Re-enter";
        signupConPwdError.style.color="red";
        return false;
    }
    else
    {
        window.alert("Validation Success");
        return true;
    }


}

function loginvalidate()
{   
    
    var reg = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    var psr=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z0-9\.-@#!$%*%]{8,}$/;

    if(LoginEmail.value.trim()==""||LoginPwd.value.trim()=="")
    {   
        if(LoginEmail.value.trim()=="")LoginEmail.style.border="2px solid red";
        if(LoginPwd.value.trim()=="")LoginPwd.style.border="2px solid red";
        
        window.alert("Enter Username and Password to Login");
        return false;
    }

    else if(reg.test(LoginEmail.value)!="1")
    {
        LoginEmailError.innerHTML="Invalid Email!";
        LoginEmailError.style.color="red";
        return false;
    }
    else if(psr.test(LoginPwd.value)!="1")
    {   LoginPwdError.innerHTML="Invalid Password!";
        LoginPwdError.style.color="red";
        return false;
    }
    else
    {
        window.alert("Validation Success");
        return true;
    }
}

$(document).ready(function () {

    $('#inputPassword4').on('keyup', function () {

        let textElement = $(this).val()
        let strength = 0

        $('#typepass').find('h4').html(`Your Password: ${textElement}`)

        if (textElement.length > 0) {
            let sizeElements = textElement.length

            if (sizeElements > 10) {

                strength += 30

            } else {
                let calcMath = (sizeElements * 2)

                strength += calcMath

            }

        }

        let lowerCase = new RegExp(/[a-z]/)
        if (lowerCase.test(textElement)) {
            strength += 16
        }

        let upperCase = new RegExp(/[A-Z]/)
        if (upperCase.test(textElement)) {
            strength += 18
        }

        let regularNumber = new RegExp(/[0-9]/i)
        if (regularNumber.test(textElement)) {
            strength += 16
        }

        let specialChars = new RegExp(/[^a-z0-9]/i)
        if (specialChars.test(textElement)) {
            strength += 20
        }

        //Function to produce result
        let renderResult = (strengthData, color) => {
            return $('#strengthResult').html(
                `<div class="progress" style="height: 40px;">
                <div class="progress-bar bg-${color}" role="progressbar" style="width: ${strengthData}%" 
                aria-valuenow="${strengthData}" aria-valuemin="0" aria-valuemax="100">
                <strong style="font-size: 15px">${strength}%</strong></div></div>`
            )
        }

        if (strength < 21) {
            renderResult(strength, 'danger')//red very weak password
        } else
            if (strength > 20 && strength < 41) {
                renderResult(strength, 'warning')//orange weak password
            } else
                if (strength > 40 && strength < 61) {
                    renderResult(strength, 'secondary')//medium password
                } else
                    if (strength > 60 && strength < 81) {
                        renderResult(strength, 'info')// strong password
                    } else {
                        renderResult(strength, 'success')//very strong password
                    }



    })
});