function display_none(){
    document.getElementById('alert').style.display="none";
}
function form_validation()
{
    var email_format=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var username=document.getElementById('UserName').value;
    var phonen=document.getElementById('Phonen').value;
    var phnlen=phonen.length;
    var psswd_1=document.getElementById('psswd1').value;
    var psswd_2=document.getElementById('psswd2').value;
    var email=document.getElementById('u_email').value;
    // var checkedValue = document.querySelector('.chk:checked');
    var radio_btn= document.querySelector('input[name=gender]:checked');
    if(username=='')
    {
        console.log("empty");
        document.getElementById('alert').innerHTML="⚠ Fill Name";
        document.getElementById('alert').style.display="block";
       setTimeout(display_none, 3000);
    }
    else
    {
      if(phonen=='')
      {
          document.getElementById('alert').innerHTML="⚠ Fill Ph No.";
          document.getElementById('alert').style.display="block";
          setTimeout(display_none, 3000);
      }
      else if(phonen!='')
       {
           if(isNaN(phonen))
           {
               document.getElementById('alert').innerHTML="⚠ Only numbers are allowed";
               document.getElementById('alert').style.display="block";
               setTimeout(display_none, 3000);
           }
           else if(phnlen!=10)
           {
               document.getElementById('alert').innerHTML="⚠ Length must be of 10 digit";
               document.getElementById('alert').style.display="block";
               setTimeout(display_none, 3000);
           }
         else
            {
                if(email=="")
                {
                  document.getElementById('alert').innerHTML="⚠ Fill email";
                  document.getElementById('alert').style.display="block";
                  setTimeout(display_none, 3000);
                }
                else if(email!="")
                {
                   if(email.match(email_format))
                   {
                     if(psswd_1=='')
                        {
                            document.getElementById('alert').innerHTML="⚠ Fill password";
                            document.getElementById('alert').style.display="block";
                            setTimeout(display_none, 3000);
                        }
                      else  if(psswd_2=='')
                        {
                           document.getElementById('alert').innerHTML="⚠ Fill Confirm password";
                           document.getElementById('alert').style.display="block";
                           setTimeout(display_none, 3000);
                        }
                  else if(psswd_1!=psswd_2)
                   {
                     document.getElementById('alert').innerHTML="⚠ Password Dose'nt match";
                     document.getElementById('alert').style.display="block";
                     setTimeout(display_none, 3000);
                    }
                     else
                    {
                            if(radio_btn==null)
                            {
                                document.getElementById('alert').innerHTML="⚠ Select gender";
                                document.getElementById('alert').style.display="block";
                                setTimeout(display_none, 3000);
                            }
                    }
                }
                           else
                           {
                               document.getElementById('alert').innerHTML="⚠ Invalid Email";
                               document.getElementById('alert').style.display="block";
                               setTimeout(display_none, 3000);
                           }
                        } 
                    }
                }
    }}