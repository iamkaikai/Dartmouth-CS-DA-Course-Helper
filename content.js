
var panelTitle = document.createElement('div');
var panelText = document.createElement('p');
var panelImg = document.createElement('img');
var iframeWrapper = document.createElement('div');
var iframeImg = document.createElement('img');
var iframeText = document.createElement('p');
var iframe = document.createElement('iframe');
var imgURL1 = chrome.runtime.getURL("logo.svg");
var imgURL2 = chrome.runtime.getURL("hover.png");
var wrapperAll = document.createElement('div');

panelTitle.setAttribute('id','panelTitle');
panelImg.setAttribute('id','panelImg');
panelText.setAttribute('id','panelText');
iframeText.setAttribute('id', 'iframeText');
iframeImg.setAttribute('id', 'iframeImg');
iframeWrapper.setAttribute('id', 'iframeWrapper');
iframe.setAttribute('id', 'iframe');
wrapperAll.setAttribute('id', 'wrapperAll');

document.body.appendChild(wrapperAll);
wrapperAll.appendChild(panelTitle);
wrapperAll.appendChild(iframeWrapper);


$("#panelTitle").append(panelImg);
$("#panelTitle").append(panelText);
$("#panelText").html("CS/DA Course Helper");
$("#panelImg").attr('src',imgURL1);
$("#iframeWrapper").append(iframeImg);
$("#iframeWrapper").append(iframeText);
$("#iframeWrapper").append(iframe);
$("#iframeImg").attr('src',imgURL2);
$("#iframeText").html("Move the cursor on the course circle to get the outline of the course");

$("#iframeWrapper").css({"opacity":"0.95","background":"#114d33","overflow":"hidden","width":"530","height":"290","border":"#114d33 2px solid"});
$("#panelTitle").css({ "width":"534px","height":"18px", "background":"#114d33"});
$("#panelText").css({"position": "absolute","top":"4px","display":"inline","margin":"0","color":"white","font-size":"9px"});
$("#panelImg").css({"margin":"4.5px 5px 0px 6px","display":"inline",'width': '10px'});
$("#iframeText").css({"margin-top":"18px","color":"white","font-size":"13px","text-align":"center"});
$("#iframeImg").css({"display": "block","margin":"auto","margin-top":"82px","width":"90px","text-align":"center"});
$("#iframe").css({ "transform":"scale(0.8)", "width":"937px","height":"3000px","margin-top":"-950px","margin-left":"-314px","bottom":"-35px"});
$("#wrapperAll").css({ "border-radius":"5px", "overflow":"hidden", "width": "534px", "height": "313px", "z-index": "99", "bottom": "0", "position": "absolute", "left": "0"})

$("body").on('DOMSubtreeModified', ".mxTooltip", function() {
    
    var link1;
    var link2 = $("div.mxTooltip").text();

    if(link2.slice(0, 5) == "http:"){
      
      link2 = link2.slice(0,4) + "s" + link2.slice(4)
      console.log(link2);
    };

    function iframeLink(){

      if ( $('.mxTooltip').children().length > 0 ) {        
        
        $("#iframe").attr("src", link2);
        urlDefault = link2;

      }else if(link1 != link2){
        
        $("#iframe").attr("src", link1);
      
      }
    }
  
    iframeLink();
});

$("#wrapperAll").draggable();
$("#iframe").draggable();
$("#panelTitle").resizable(console.log("resize") );
$("#wrapperAll").resizable({ handle: "#panelTitle" });
// $("#wrapperAll").resizable({ alsoResize: "#iframe" });

