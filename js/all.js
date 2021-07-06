(function($){
    $(document).ready(function() {
        re_font_size('html');

        $(window).resize(function() {
            re_font_size('html');
        });

        $('#gnb .menu').click(function() {
            $(this).toggleClass('active');
            $('.pop-gnb').toggleClass('active');
            $('body').toggleClass('popActive');
        });

        $('#gnb .pop-gnb').click(function() {
            $('#gnb .menu').toggleClass('active');
            $(this).toggleClass('active');
            $('body').toggleClass('popActive');
        });


        $(window).scroll(function(e) {
          if ($(window).scrollTop() > 0) {
              $("body").addClass("body-scrolled");
          }
          else if ($(window).scrollTop() === 0){
              $("body").removeClass("body-scrolled");
          }
        });

        AOS.init({
            duration: 1500,
        });

        $('#option-select').on('change', function() {
          console.log( this.value ); // for debugging! you can delete this line :)
          if(this.value == "none") {
            $('#email').val("");
          }
          if(this.value == "naver.com") {
            $('#email').val($('#email').val().split('@')[0] + '@naver.com');
          }
          if(this.value == "hanmail.net") {
            $('#email').val($('#email').val().split('@')[0] + '@hanmail.net');
          }
          if(this.value == "gmail.com") {
            $('#email').val($('#email').val().split('@')[0] + '@gmail.com');
          }
          if(this.value == "nate.com") {
            $('#email').val($('#email').val().split('@')[0] + '@nate.com');
          }
          if(this.value == "hotmail.com") {
            $('#email').val($('#email').val().split('@')[0] + '@hotmail.com');
          }
        });

    });

    // 회사소개서 다운로드 모달팝업 열린후
    $('#proposalDownModal').on('shown.bs.modal', function (e) {

    });
    // 회사소개서 다운로드 모달팝업 닫힌후
    $('#proposalDownModal').on('hidden.bs.modal', function (e) {
        $('#formProposalDown')[0].reset();
    });

})(jQuery);


function raito(objClass, raito) {
    var obj = $('.' + objClass),
        objWidth = obj.width(),
        objHeight = objWidth * raito;

    obj.css('height', objHeight + 'px')
}

function re_font_size(element) {
    var vw = $(window).width(),
        x = (1920 - vw) / 1.5,
        fs = ((1920 - x) / 1920) * 100;

        if (fs < 60) {
          fs = 60
        }

    $(element).css('font-size', fs + '%');
}

function jbSubmit(event) {
    if ($('#formProposalDown')[0].checkValidity() == true) {
        $('#trick_down_link_1').get(0).click();
        $('#proposalDownModal').modal("hide");
    }
}

function createAlert(title, summary, details, severity, dismissible, autoDismiss, appendToId) {
  var iconMap = {
    info: "fa fa-info-circle",
    success: "fa fa-thumbs-up",
    warning: "fa fa-exclamation-triangle",
    danger: "fa ffa fa-exclamation-circle"
  };

  var iconAdded = false;

  var alertClasses = ["alert", "animated", "flipInX"];
  alertClasses.push("alert-" + severity.toLowerCase());

  if (dismissible) {
    alertClasses.push("alert-dismissible");
  }

  var msgIcon = $("<i />", {
    "class": iconMap[severity] // you need to quote "class" since it's a reserved keyword
  });

  var msg = $("<div />", {
    "class": alertClasses.join(" ") // you need to quote "class" since it's a reserved keyword
  });

  if (title) {
    var msgTitle = $("<h4 />", {
      html: title
    }).appendTo(msg);

    if(!iconAdded){
      msgTitle.prepend(msgIcon);
      iconAdded = true;
    }
  }

  if (summary) {
    var msgSummary = $("<strong />", {
      html: summary
    }).appendTo(msg);

    if(!iconAdded){
      msgSummary.prepend(msgIcon);
      iconAdded = true;
    }
  }

  if (details) {
    var msgDetails = $("<p />", {
      html: details
    }).appendTo(msg);

    if(!iconAdded){
      msgDetails.prepend(msgIcon);
      iconAdded = true;
    }
  }


  if (dismissible) {
    var msgClose = $("<span />", {
      "class": "close", // you need to quote "class" since it's a reserved keyword
      "data-dismiss": "alert",
      html: "<i class='fa fa-times-circle'></i>"
    }).appendTo(msg);
  }

  $('#' + appendToId).prepend(msg);

  if(autoDismiss){
    setTimeout(function(){
      msg.addClass("flipOutX");
      setTimeout(function(){
        msg.remove();
      },1000);
    }, 5000);
  }
}


function checkSize(input) {
    if (input.files && input.files[0].size > (100 * 1024 * 1024)) {
        alert("파일 사이즈가 100mb 를 넘습니다.");
        input.value = null;
    }
}
