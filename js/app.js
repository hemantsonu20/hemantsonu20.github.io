// aos library init
AOS.init({
  duration: 1200,
  disable: 'mobile'
  //easing: 'ease-in-out'
});
// current year for copyright
// $('#year').text(new Date().getFullYear());

// smooth scrolling on click
$('.port-item').on('click', function(event) {
  const target = $(this).data('target');
  if (target !== '') {
    event.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $(target).offset().top
      },
      800,
      function() {
        window.location.hash = target;
      }
    );
  }
});

function isMobile() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}

// open gmail compose box to send message
function sendMessage() {
  const name = document.getElementById('name-input').value;
  const message = document.getElementById('message-input').value;
  const subject = 'Message from ' + name + ' via ' + encodeURI(window.location.host);

  document.getElementById('contact-form').reset();
  var url;
  if (isMobile()) {
    url = 'mailto:hemantsonu20@gmail.com?subject=' + subject + '&body=' + message;
  } else {
    url =
      'https://mail.google.com/mail/?view=cm&fs=1&to=hemantsonu20@gmail.com&su=' +
      subject +
      '&body=' +
      message;
  }
  window.open(url, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
}

//  Scrolling Event Listener
/*$(function() {
  $(window).scroll(function(e) {
    $('.port-section').each(function() {
      var diff = $(window).scrollTop() - $(this).offset().top;
      console.log(this.id + ' ' + $(window).scrollTop() + ' ' + $(this).offset().top);
      if (diff > 0 && diff < 50) {
        if (history.pushState) {
          history.replaceState(null, null, '#' + this.id);
        }
      }
    });
  });
});*/

/* RESPONSIVE HANDLING */
function changeMinWidthLg(m) {
  const nameHeading = $('#name-heading');
  const socialBadges = $('#main-header .fa-stack');
  if (m.matches) {
    nameHeading.removeClass('h3');
    nameHeading.addClass('display-4');

    socialBadges.addClass('fa-2x');
  } else {
    nameHeading.removeClass('display-4');
    nameHeading.addClass('h3');

    socialBadges.removeClass('fa-2x');
  }
}

function changeMinWidthSm(m) {
  const portSectionHeading = $('.sticky-top h2');
  if (m.matches) {
    portSectionHeading.removeClass('h5');
  } else {
    portSectionHeading.addClass('h5');
  }
}

const minWidthLg = window.matchMedia('(min-width: 992px)');
changeMinWidthLg(minWidthLg);
minWidthLg.addListener(changeMinWidthLg);

const minWidthSm = window.matchMedia('(min-width: 576px)');
changeMinWidthSm(minWidthSm);
minWidthSm.addListener(changeMinWidthSm);
