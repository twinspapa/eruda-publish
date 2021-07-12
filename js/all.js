(function($){
    AOS.init({
      easing: 'ease',
      duration: 1500
    });

    $(document).ready(function() {
        history.scrollRestoration = "manual";

        $('.btn-top').click(function(){
            $('body, html').animate({scrollTop:0}, 500);
        });

        $('#gnb .menu').click(function() {
            $(this).toggleClass('active');
            $('.pop-gnb').toggleClass('active');
            $('.logo').toggleClass('active');
            $('body').toggleClass('popActive');
        });

        $('#gnb .pop-gnb').click(function() {
            $('#gnb .menu').toggleClass('active');
            $('logo').toggleClass('active');
            $(this).toggleClass('active');
            $('body').toggleClass('popActive');
        });


        $(window).scroll(function(e) {
            var wTop = $(window).scrollTop();

            if (wTop > 0) {
                $("body").addClass("body-scrolled");
            }
            else if (wTop === 0){
                $("body").removeClass("body-scrolled");
            }
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

    const name = document.getElementById('name'),
          email = document.getElementById('email'),
          tel = document.getElementById('tel');

    name.addEventListener('invalid', e => {
      // 필수 항목을 누락한 경우
      if (name.validity.valueMissing) {
        name.setCustomValidity('회사명은 필수 항목입니다.');

      // 지정한 패턴과 미스매치인 경우
    } else if (name.validity.patternMismatch) {
        name.setCustomValidity('한글,영문,숫자만 입력할 수 있습니다.');

      // 데이터 유효성 검사를 통과한 경우
      } else {
        name.setCustomValidity('');
      }
    })

    email.addEventListener('invalid', e => {
      // 필수 항목을 누락한 경우
      if (email.validity.valueMissing) {
        email.setCustomValidity('이메일은 필수 항목입니다.');

      // 지정한 패턴과 미스매치인 경우
    } else if (email.validity.patternMismatch) {
        email.setCustomValidity('영문,숫자만 입력할 수 있습니다.');

      // 데이터 유효성 검사를 통과한 경우
      } else {
        email.setCustomValidity('');
      }
    })

    tel.addEventListener('invalid', e => {
      // 필수 항목을 누락한 경우
      if (tel.validity.valueMissing) {
        tel.setCustomValidity('연락처는 필수 항목입니다.');

      // 지정한 패턴과 미스매치인 경우
    } else if (tel.validity.patternMismatch) {
        tel.setCustomValidity('숫자만 입력할 수 있습니다.');

      // 데이터 유효성 검사를 통과한 경우
      } else {
        tel.setCustomValidity('');
      }
    })

})(jQuery);


function raito(objClass, raito) {
    var obj = $('.' + objClass),
        objWidth = obj.width(),
        objHeight = objWidth * raito;

    obj.css('height', objHeight + 'px')
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
    }, 2000);
  }
}


function checkSize(input) {
    if (input.files && input.files[0].size > (100 * 1024 * 1024)) {
        alert("파일 사이즈가 100mb 를 넘습니다.");
        input.value = null;
    }
}
