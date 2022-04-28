

//Write Code for Task One below this line!
//1. Create two arrays with two image links to TV show recommendations for each type: comedy, action, drama. Use doc in task one.
	let comedy = ["https://images.squarespace-cdn.com/content/v1/581bd18003596e16cc905cad/1597694713513-QB43HMYID7RSSUJEHW0L/The+Wrong+Missy+-+Netflix.jpg","https://www.dodmagazine.es/wp-content/uploads/2022/01/mejores-peliculas-comedia-2022.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4A0IBw0thexmnriE_g7Gq-WXrA51EBiXanQ&usqp=CAU"];
	 let action =["https://sm.ign.com/t/ign_es/screenshot/default/galery2_7x9u.1280.jpg", "https://cdn.goconqr.com/uploads/node/image/35454930/d6729063-cdb3-4cdc-a230-51bc9ce7a4c1.jpg","https://i.blogs.es/f8d4ab/statham/1366_2000.jpg"];
 let drama =["https://media.glamour.com/photos/5ec2e91dccfbc8c1a8fe8cbf/master/w_3000,h_2032,c_limit/MSDTITA_FE057.jpg", "https://i.pinimg.com/originals/b5/36/b8/b536b80a15b8055e1587d2c4a1ad6464.jpg","https://cdn.justjaredjr.com/wp-content/uploads/headlines/2021/12/jjj-fan-awards-favorite-drama-movie-08.jpg"];

$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
//Write code for Task Two below this line!
//2. Write an if-else if statements so the computer will show certain images when the user types in certain genre.
    if(genreInput==="comedy"){
     for(let show of comedy){
    $(".shows").append("<img src="+show+">");
    }
	}
    else if(genreInput==="action"){
    for (let show of action ){
    $(".shows").append("<img src="+ show+">");
    }
    }
    else if(genreInput==="drama"){
   for (let show of drama){
    $(".shows").append("<img src="+ show+">");
    }
    }
});

$(".suggestion-button").click(function(){
    let suggestion=$(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
//Write code for Task Three below this line!
//3. Write a code using .push to allow the user to make TV show suggestions.
	comedy.push(suggestion);
     console.log(comedy);
    drama.push(suggestion);
    console.log(drama );
     action.push(suggestion);
    console.log(action);

    
});