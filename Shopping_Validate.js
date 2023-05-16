function validate()
{
    // var email=document.mymartform.email.value;
    // var pattern=/^[a-z0-9]+[@][a-z]+[.][a-z]{2,3}([.][a-z]{2})*$/;
    // if(pattern.test(email))
    // {
    //     return true;
    // }   
    // else
    // {
    //     alert("Please enter a valid email address!");
    // }

    var pswd=document.mymartform.pswd.value;
    if(pswd.length<="6" || pswd.length>="12")
    {
        alert("Password length must be min 6 & max 12 characters!");
    }
    else
    {
        return true;
    }
}