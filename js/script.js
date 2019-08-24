var json ='{"formTitle":"Survey Form","letUsnow":"Let us know how we can improve freeCodeCamp","info":[{"infoPersonalInfo":[{"infoLabel":[{"text":"<sup>* </sup>Name:"},{"text":"<sup>* </sup>Email:"},{"text":"<sup>* </sup>Age:"}]}]}],"roleOptionsLabel":"Which option best describes your current role?","reccomendLabel":"<sup>* </sup>How likely is that you would recommend freeCodeCamp to a friend?","fccLabel":"What do you like most in FCC:","improvedLabel":"Things that should be improved in the future(Check all that apply):","commentsLabel":"Any Comments or Suggestions?"}';

$(document).ready(function(){
    
    var obj = JSON.parse(json);

    divTitle(obj);
    divForm(obj);
});

function divTitle(obj){
    
    $('.form-title').text(obj.formTitle);
};
function divForm(obj){
    $('#paraf').text(obj.letUsnow);

    for(i in obj.info){
        for(j in obj.info[i].infoPersonalInfo){
            for(k in obj.info[i].infoPersonalInfo[j].infoLabel){
                $('.info-label-class').eq(k).html(obj.info[i].infoPersonalInfo[j].infoLabel[k].text);
            }
        }
    };

    $('.role-options-label').text(obj.roleOptionsLabel);

    $('.recommend-label').html(obj.reccomendLabel);

    $('.fcc-label').text(obj.fccLabel);
    
    $('.improved-label').text(obj.improvedLabel);

    $('.comments-label-text').text(obj.commentsLabel);
};

