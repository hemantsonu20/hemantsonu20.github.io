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

// open gmail compose box to send message
function sendMessage() {
  const name = document.getElementById('name-input').value;
  const message = document.getElementById('message-input').value;
  const subject = 'Message from ' + name + ' via ' + encodeURI(window.location.host);

  document.getElementById('contact-form').reset();

  window.open(
    'https://mail.google.com/mail/?view=cm&fs=1&to=hemantsonu20@gmail.com&su=' +
      subject +
      '&body=' +
      message,
    '_blank',
    'location=yes,height=570,width=520,scrollbars=yes,status=yes'
  );
}

//  Scrolling Event Listener
/*  $(function () {
    $(window).scroll(function (e) {
      $('.port-section').each(function () {
        if ($(window).scrollTop() > $(this).offset().top) {
          console.log(this.id + ' ' + $(window).scrollTop() + ' ' + $(this).offset().top);
          window.location.hash = this.id;
        }
      });
    });
  }); */

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
