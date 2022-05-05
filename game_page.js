ques_turn = "P1";
ans_turn = "P2";
var word;

player_name_1 = localStorage.getItem("user_1");
document.getElementById("name_player_1").innerHTML = player_name_1;

player_score_1 = 0;
document.getElementById("player_1_score").innerHTML =  " : " + player_score_1;


player_name_2 = localStorage.getItem("user_2");
document.getElementById("name_player_2").innerHTML = player_name_2;

player_score_2 = 0;
document.getElementById("player_2_score").innerHTML = " : " + player_score_2;


document.getElementById("Question_ Turn").innerHTML = "Question Turn : " + player_name_1;

document.getElementById("Answer_ Turn").innerHTML = "Answer Turn : " + player_name_2;

function ask_ques(){
    get_word = document.getElementById("word").value; 
    word = get_word.toLowerCase();


    //2nd char

    char_1 = word.charAt(1);


    // mid_point
    mid_point = Math.floor(word.length/2);
    char_2 = word.charAt(mid_point);


    //last_point
    last_point = word.length - 1;
    char_3 = word.charAt(last_point);


    replace_1 = word.replace(char_1, "_");
    replace_2 = replace_1.replace(char_2, "_");
    replace_3 = replace_2.replace(char_3, "_");


    question_box = "<h2 id = 'word_display'> Q: " + replace_3 + "</h2>";
    answer_box = "<br> Answer : <input id = 'ans_word' type = 'text' placeholder = 'type here'>";
    submit_button = "<br> <button class = 'btn btn-success' onclick = 'check()' > CHECK </button>";

    output_ques = question_box + answer_box + submit_button;

    document.getElementById("output_ques").innerHTML  = output_ques;

    document.getElementById("word").value = "";
}

function check(){
    get_ans = document.getElementById("ans_word").value;
    ans = get_ans.toLowerCase();

    if (ans == word){
        if(ans_turn == "P1"){
            player_score_1 = player_score_1  + 1;
            document.getElementById("player_1_score").innerHTML =  " : " + player_score_1;
        }
        else{

            player_score_2  = player_score_2 + 1;
            document.getElementById("player_2_score").innerHTML = " : " + player_score_2;
        }
    }

    if (ques_turn == "P1"){

        ques_turn = "P2";
        document.getElementById("Question_ Turn").innerHTML = "Question Turn : " + player_name_2;

    }
    else{
        ques_turn = "P1";
        document.getElementById("Question_ Turn").innerHTML = "Question Turn : " + player_name_1;
    }


    if (ans_turn == "P1"){

        ans_turn = "P2";
        document.getElementById("Answer_ Turn").innerHTML = "Answer Turn : " + player_name_2;
    }
    else{
       
        ans_turn = "P1";
        document.getElementById("Answer_ Turn").innerHTML = "Answer Turn : " + player_name_1;
    }

    document.getElementById("output_ques").innerHTML  = "";
}

  