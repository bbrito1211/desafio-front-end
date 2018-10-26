/// JQUERY

$(document).ready(function(){
    mainPosts();
    brPosts();
    moPosts();
});


///// FUNCTIONS
function mainPosts(){
    var urlpathdata = "././data.json";
    $.getJSON(urlpathdata, function(data){
        data.section[0].data.forEach(function(element, index){
            //console.log(element.url, index);
            var mainLabel = (element.label);
            var mainTitle = (element.title);
            var mainDescription = (element.description);
            var mainLink = (element.url);
            var mainImage = (element.image);
            $('.content__category h3').eq(index).text(mainLabel);
            $('.content__title h2').eq(index).text(mainTitle);
            $('.content__description p').eq(index).text(mainDescription);
            $('article.content a').eq(index).attr('href', mainLink);
            $('.content__image').eq(index).html('<img src="assets/media/'+ mainImage +'" alt="">');
        })
    }); 
};

function brPosts(){
    var urlpathdata = "././data.json";
    $.getJSON(urlpathdata, function(data){
        data.section[1].data.forEach(function(element, index){
            console.log(element.label, index);
            var brLabel = (element.label);
            var brTitle = (element.title);
            var brDescription = (element.description);
            var brLink = (element.url);
            var brImage = (element.image);
            $('.br__post-element--category h3').eq(index).text(brLabel);
            $('.br__post-element--title h2').eq(index).text(brTitle);
            $('.br__post-element--description p').eq(index).text(brDescription);
            $('article.br__post a').eq(index).attr('href', brLink);
            $('.br__post-element--image').eq(index).html('<img src="assets/media/'+ brImage +'" alt="">');
        })
    }); 
};

function moPosts(){
    var urlpathdata = "././data.json";
    $.getJSON(urlpathdata, function(data){
        data.section[2].data.forEach(function(element, index){
            console.log(element.label, index);
            var moLabel = (element.label);
            var moTitle = (element.title);
            var moDescription = (element.description);
            var moLink = (element.url);
            var moImage = (element.image);
            $('.mo__post-element--category h3').eq(index).text(moLabel);
            $('.mo__post-element--title h2').eq(index).text(moTitle);
            $('.mo__post-element--description p').eq(index).text(moDescription);
            $('article.mo__post a').eq(index).attr('href', moLink);
            $('.mo__post-element--image').eq(index).html('<img src="assets/media/'+ moImage +'" alt="">');
        })
    }); 
};