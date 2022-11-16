const form = document.querySelector("form"),
        nextBtn = form.querySelector(".submitBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));

    document.getElementById("current_date").innerHTML = Date();

        function verifyPassword() {  
          var pw = document.getElementById("pswd").value;  
          //check empty password field  
          if(pw == "") {  
             document.getElementById("message").innerHTML = "**Fill the password please!";  
             return false;  
          }  

         //minimum password length validation  
          if(pw.length < 8) {  
             document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
             return false;  
          }  

        //maximum length of password validation  
          if(pw.length > 20) {  
             document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
             return false;  
          } else {  
             alert("Password is correct");  
          }  
        }  

        function matchPassword() {  
            var pw1 = document.getElementById("pswd1");  
            var pw2 = document.getElementById("pswd2");  
            if(pw1 != pw2)  
            {   
            alert("Passwords did not match");  
            } else {  
            alert("Password created successfully");  
            }  
        }  

            function getVals(){
        // Get slider values
        let parent = this.parentNode;
        let slides = parent.getElementsByTagName("input");
        let slide1 = parseFloat( slides[0].value );
        let slide2 = parseFloat( slides[1].value );
        // Neither slider will clip the other, so make sure we determine which is larger
        if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }

        let displayElement = parent.getElementsByClassName("rangeValues")[0];
        //innerHTML property allows Javascript code to manipulate a website being displayed
            displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
        }

        window.onload = function(){
        // Initialize Sliders
        let sliderSections = document.getElementsByClassName("range-slider");
            for( let x = 0; x < sliderSections.length; x++ ){
            let sliders = sliderSections[x].getElementsByTagName("input");
            for( let y = 0; y < sliders.length; y++ ){
                if( sliders[y].type ==="range" ){
            //oninput attribute fires when the value of an <input> element is changed
                sliders[y].oninput = getVals;
                // Manually trigger event first time to display values
                sliders[y].oninput();
                }
            }
            }
        }

        function validation(){
            var formValue = document.getElementById("form first").value;
            confirm_details.innerHTML = formValue;

        }



        function confirmStage() {
        var firstName = document.forms.RegForm.firstName.value;
        var MiddleInitial = document.forms.RegForm.MiddleInitial.value;
        var lastName = document.forms.RegForm.lastName.value;
        var DOB = document.forms.RegForm.DOB.value;
        var mobile = document.forms.RegForm.no.value;
        var gender = document.forms.RegForm.gender.value;
        var secno = document.forms.RegForm.secno.value;
        var add1 = document.forms.RegForm.add1.value;
        var add2 = document.forms.RegForm.add2.value;
        var city = document.forms.RegForm.city.value;
        var state = document.forms.RegForm.state.value;
        var zip = document.forms.RegForm.zip.value;
        var user = document.forms.RegForm.user.value;
        var email = document.forms.RegForm.email.value;
        var password = document.forms.RegForm.password.value;
        var yes = document.forms.RegForm.yes.value;
        var no = document.forms.RegForm.no.value;
        var text = document.forms.RegForm.text.value;
        var pool = document.forms.RegForm.pool.value;
        var garage = document.forms.RegForm.garage.value;
        var openFloor = document.forms.RegForm.openFloor.value;
        var office = document.forms.RegForm.office.value;
        var basement = document.forms.RegForm.basement.value;
        var minpricerange = document.forms.RegForm.min.value;
        var maxpricerange = document.forms.RegForm.max.value;



        }
$(function() {
    $('#my_form').change(function(){
        var str = "<em>First name:</em><strong> " + $( "#firstName" ).val() + "</strong><br><em>Middle name:</em><strong> " + $( "#middleInit" ).val() + "</strong><br><em>Last name:</em><strong> " + $( "#lastName" ).val() + "</strong><br><em>DOB:</em><strong> " + $("#dob").val() + "</strong><br><em>Mobile Number</em><strong> " + $( "#mobileNo" ).val() + "</strong><br><em>gender:</em><strong> " + $( "select#gender option:selected" ).text() + "</strong><br><em>Social Security:</em><strong> " + $( "#secno" ).val() + "</strong><br><em>AddressLine1:</em><strong> " + $( "#add1" ).val() + "</strong><br><em>Address Line 2:</em><strong> " + $( "#add2" ).val() + "</strong><br><em>City:</em><strong> " + $( "#city" ).val() +"</strong><br><em>State:</em><strong> " + $( "select#state option:selected" ).text() + "</strong>" + "</strong><br><em>ZipCode:</em><strong> " + $( "#zip" ).val() + "</strong><br><em>email:</em><strong> " + $( "#email" ).val();

        $('#check_before_submit').html( str );
    });

    $( "#my_form" ).on( "submit", function( event ) {
        event.preventDefault();
        var str = "<em>First name:</em><strong> " + $( "#firstName" ).val() + "</strong><br><em>Middle name:</em><strong> " + $( "#middleInit" ).val() + "</strong><br><em>Last name:</em><strong> " + $( "#lastName" ).val() + "</strong><br><em>Middle name:</em><strong> " + $("#dob").val() + "</strong><br><em>Mobile Number</em><strong> " + $( "#mobileNo" ).val() + "</strong><br><em>gender:</em><strong> " + $( "select#gender option:selected" ).text() + "</strong><br><em>Social Security:</em><strong> " + $( "#secno" ).val() + "</strong><br><em>AddressLine1:</em><strong> " + $( "#add1" ).val() + "</strong><br><em>Address Line 2:</em><strong> " + $( "#add2" ).val() + "</strong><br><em>City:</em><strong> " + $( "#city" ).val() +"</strong><br><em>State:</em><strong> " + $( "select#state option:selected" ).text() + "</strong>" + "</strong><br><em>ZipCode:</em><strong> " + $( "#zip" ).val() + "</strong><br><em>email:</em><strong> " + $( "#email" ).val();

        $('#check_before_submit').html( str );
    });
});



