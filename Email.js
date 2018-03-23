 let email = window.prompt("enter email")
	   let password = window.prompt("enter password")
	  
	  let allUsers = [{
	    name : "saiphanindra",
	    email : "saiphanindra265@gmail.com",
		password : "sai115",
		age : 23,
		phoneNumber : 35464478
	  
	  },{
	  name : "saimanohar",
	  email : "saimanohar@gmail.com",
	  password : "manohar115",
	  age : 24,
	  phoneNumber :6767567979
	  
	  
	  },
	  {
	  name : "saiparithosh",
	  email: "saiparithosh@ymail.com",
	  password : "saiparithosh115",
	  age : 24,
	  phonenumber : 566764768
	  }]
	 
	  
	 let checkLogin = (email,password,allUsers) =>{
	    let isUserFound = false
		let passwordCorrect =false
		   for(currentUser in allUsers){
		     console.log(currentUser)
			 if(allUsers[currentUser]["email"]==email){
			        
			    if(allUsers[currentUser]["password"]==password){
				     
				     isUserFound = true
					 passwordCorrect = true
					 break
				
				  }
				else
                  {
				    isUserFound = true
					passwordCorrect = false
					break
				  }				
				  
			 }
			 else {
			   isUserFound= false
			 }
		   }//end of for loop
	    if(isUserFound==true && passwordCorrect==true)
            {
			
			console.log("you are logged in")
			}
           else if(isUserFound==true && passwordCorrect==false)
               { 
			   console.log("you have entered incorrect password")
			   }
              else
			      {
                   console.log("No user with this email found")
                  }     			   
	 
	 
	 }
        checkLogin(email,password,allUsers)	 