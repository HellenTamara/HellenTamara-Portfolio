// Sidebar
$(document).ready(function () {
  $(".menu-wrapper").click(function (e) {
    e.stopPropagation();
    $(".window-overlay").fadeIn();
    $(".vertical-menu").toggleClass("hide");
    if ($(".vertical-menu").hasClass("hide")) {
      $(".window-overlay").fadeOut();
    }
  });

  $(document).click(function (e) {
    if (!$(e.target).closest(".vertical-menu").length && !$(e.target).closest(".menu-wrapper").length) {
      $(".vertical-menu").addClass("hide");
      $(".window-overlay").fadeOut();
    }
  });

  $(".vertical-menu").click(function (e) {
    e.stopPropagation();
  });

  $(".form-close-btn").click(function () {
    $(".window-overlay").fadeOut();
    $(".window-wrapper").removeClass("change");
  });
});


// Contact window
$(document).ready(function () {
  $(".button-style.to-form").click(function (e) {
    e.stopPropagation();
    $(".window-overlay").fadeIn();
    $(".window-wrapper").addClass("change");
  });

  $(window).click(function () {
    if ($(".window-wrapper").hasClass("change")) {
      $(".window-overlay").fadeOut();
      $(".window-wrapper").removeClass("change");
    }
  });

  $(".window-wrapper").click(function (e) {
    e.stopPropagation();
  });

  $(".ai-github-fill").on("click", function () {
    window.open('https://github.com/HellenTamara', '_blank');
  });

  $(".ai-linkedin-fill").on("click", function () {
    window.open('https://www.linkedin.com/in/hellen-tamara-naito/', '_blank');
  });

  $(".form-close-btn").click(function () {
    $(".window-overlay").fadeOut();
    $(".window-wrapper").removeClass("change");
  });
});

// Projects Redirecting Links
$(document).ready(function () {

  // English Version - mobile
  $('.project1').on('click', function () {
    document.location = `project1page.html`;
  });

  $('.project2').on('click', function () {
    document.location = `project2page.html`;
  });

  $('.project3').on('click', function () {
    document.location = `project3page.html`;
  });

  // Portuguese Version - mobile
  $('.project1.lang-pt').on('click', function () {
    document.location = `project1pt.html`;
  });

  $('.project2.lang-pt').on('click', function () {
    document.location = `project2pt.html`;
  });

  $('.project3.lang-pt').on('click', function () {
    document.location = `project3pt.html`;
  });

  // English Version - pc
  $('.arrow-wrap-1').on('click', function () {
    const firstChildClasses = $('.project-background.project-1').children().first().attr('class');
    const match = firstChildClasses.match(/project(\d+)/);
    const projectNumber = parseInt(match[1]);
    document.location = `project${projectNumber}page.html`;
  });

  $('.arrow-wrap-2').on('click', function () {
    const firstChildClasses = $('.project-background.project-2').children().first().attr('class');
    const match = firstChildClasses.match(/project(\d+)/);
    const projectNumber = parseInt(match[1]);
    document.location = `project${projectNumber}page.html`;
  });

  $('.arrow-wrap-3').on('click', function () {
    const firstChildClasses = $('.project-background.project-3').children().first().attr('class');
    const match = firstChildClasses.match(/project(\d+)/);
    const projectNumber = parseInt(match[1]);
    document.location = `project${projectNumber}page.html`;
  });

  // Portuguese Version - pc
  $('.arrow-wrap-1.lang-pt').on('click', function () {
    const firstChildClasses = $('.project-background.project-1.lang-pt').children().first().attr('class');
    const match = firstChildClasses.match(/project(\d+)/);
    const projectNumber = parseInt(match[1]);
    document.location = `project${projectNumber}pt.html`;
  });


  $('.arrow-wrap-2.lang-pt').on('click', function () {
    const firstChildClasses = $('.project-background.project-2.lang-pt').children().first().attr('class');
    const match = firstChildClasses.match(/project(\d+)/);
    const projectNumber = parseInt(match[1]);
    document.location = `project${projectNumber}pt.html`;
  });


  $('.arrow-wrap-3.lang-pt').on('click', function () {
    const firstChildClasses = $('.project-background.project-3.lang-pt').children().first().attr('class');
    const match = firstChildClasses.match(/project(\d+)/);
    const projectNumber = parseInt(match[1]);
    document.location = `project${projectNumber}pt.html`;
  });
});

// I'm feeling lucky button

$(document).ready(function () {
  // English
  $(".lucky-btn").click(function () {
    let number = 1 + Math.floor(Math.random() * 3);
    let randomLink = `.arrow-wrap-${number}`;
    let linkElement = $(randomLink);

    if (linkElement.length) {
      linkElement[0].click();
    }
  });

  // Portuguese
  $(".lucky-btn.lang-pt").click(function () {
    let number = 1 + Math.floor(Math.random() * 3);
    let randomLink = `.arrow-wrap-${number}.lang-pt`;
    let linkElement = $(randomLink);

    if (linkElement.length) {
      linkElement[0].click();
    }
  });
});

// Workshop Page Projects Controls
$(document).ready(function () {
  const $leftControl = $('.projects-left-btn');
  const $rightControl = $('.projects-right-btn');
  const $carousel = $('.carousel-container');

  let axisX = 0;

  $rightControl.on('click', function () {
    $carousel.css('transform', `translateX(${axisX -= 100}vw)`);
    if (axisX < -299) {
      $carousel.css('transform', `translateX(${axisX = 0}vw)`);
    }
  });

  $leftControl.on('click', function () {
    $carousel.css('transform', `translateX(${axisX += 100}vw)`);
    if (axisX > 0) {
      $carousel.css('transform', `translateX(${axisX = -200}vw)`);
    }
  });
});
