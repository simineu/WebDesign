	$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
	//http://stackoverflow.com/questions/32772363/how-does-this-hash-work
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  

});


$(function(){
	$("#contactInfo").validate({
		rules:{
			name1:{
				required:true,
				lettersonly:true,
				minlength:2
			},
			contactNo:{
				required:true,
				number:true,
				minlength:6,
				maxlength:10
			},
			email:{
				required:true,
				email:true
			},
			comment:{
				required:true
				}
		}, 
		messages:{
			name1:{
				required:'Name is mandatory',
				lettersonly:'Name cannot have numbers',
				minlength:'Name should be atleast 2 characters long'
			},
			contactNo:{
				required:'Contact Number is mandatory',
				number:'Contact Number can have numbers only',
				minlength:'Contact Number should alteast have 6 numbers',
				maxlength:'Contact Number can at the most have 10 numbers'
			},
			email:{
				required:'Please enter a vaild email address'
			},
			comment:{
				required:'Comment is mandatory'
			}
		}
		
	});
});

$(function(){
	$("#signUp").validate({
		rules:{
			firstName:{
				required:true,
				lettersonly:true,
				minlength:2
			},
			lastName:{
				required:true,
				lettersonly:true,
				minlength:2
			},
			email:{
				required:true,
				email:true
			},
			pwd:{
				required:true,
				minlength:5
			},
			pwd1:{
				required:true,
				equalTo:"#pwd"
			}
		}, 
		messages:{
			firstName:{
				required:'First Name is mandatory',
				lettersonly:'First Name cannot have numbers',
				minlength:'First Name should be atleast 2 characters long'
			},
			lastName:{
				required:'Last Name is mandatory',
				lettersonly:'Last Name cannot have numbers',
				minlength:'First Name should be atleast 2 characters long'
			},
			email:{
				required:'Please enter a vaild email address'
			},
			pwd:{
				required:'Password is mandatory',
				minlength:'Password should atleast be of 5 characters'
			},
			pwd1:{
				equalTo:'Both the passwords should be same'
			}
		}
		
	});
});
