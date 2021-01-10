let loginBtn = document.getElementById('login');
let signUpBtn = document.getElementById('sign-up');
let button = document.getElementById('btn');

const signUp = () =>{
    signUpBtn.style.left='50px'
    loginBtn.style.left='-450px'
    button.style.left='110px'
}
const login = () =>{
    signUpBtn.style.left='600px'
    loginBtn.style.left='100px'
    button.style.left='0'
}

let entries=[
    {
        email:"fyousif30@gmail.com",
        pass:"123"
    },
    {
        email:"aneelareiko@gmail.com",
        pass:"123"
    }
]

function loginf(){

    let in_email=document.querySelector("#email").value;
    let in_pw=document.querySelector("#pass").value;

    if(in_email === "")
    {
    document.querySelector("#alert").style.display="block";
    
    }
     if(in_pw=== "")
    {
      document.querySelector("#alert1").style.display="block";  
    }
   
    // //official login

    for(let i=0;i<entries.length;i++)
    {
        if(in_email===entries[i].email && in_pw===entries[i].pass)
        {
           window.location.replace("home.html");
           break;
        }
      else{
        document.querySelector("#o_alert").style.display="block";
        // document.querySelector("#login").action="index.html";
        
        // document.querySelector("#login").action="index.html";
        
        break;
      }
    }

}
function signupf()
{
    let in_email=document.querySelector("#s_email").value;
    let in_pw=document.querySelector("#s_pass").value;
    let confirm_pw=document.querySelector("#s_confirmpass").value;

    if( in_email=== "" )
    {
        document.querySelector("#s_alert").style.display="block";
    }
     if(in_pw==="")
    {
        document.querySelector("#s_alert1").style.display="block";
    }
     if(confirm_pw==="")
    {
        document.querySelector("#s_alert2").style.display="block";
    
    }
    else if(in_pw != confirm_pw)
    {
        document.querySelector("#s_o_alert").style.display="block";
    }
    else{
        localStorage.setItem("email", in_email);
        localStorage.setItem("pass", in_pw);
        alert("success");
        
    }
   
}