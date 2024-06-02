document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".increment");
  const speed = 2000000000000;

  const animateCounters = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute("data-target");

        counter.innerText = "0"; //

        const updateCount = () => {
          const count = +counter.innerText;
          const increment = target / speed;

          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      }
    });
  };

  const observer = new IntersectionObserver(animateCounters, {
    threshold: 0.1,
  });

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});

// Toggle mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll(".nav-menu li a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

function toggleFAQ(element) {
  const isActive = element.classList.contains("active");
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.classList.remove("active");
    question.nextElementSibling.style.display = "none";
  });
  if (!isActive) {
    element.classList.add("active");
    element.nextElementSibling.style.display = "block";
  }
}
function toggleFAQ(element) {
  const isActive = element.classList.contains("active");
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.classList.remove("active");
    question.nextElementSibling.style.display = "none";
  });
  if (!isActive) {
    element.classList.add("active");
    element.nextElementSibling.style.display = "block";
  }
}

// Auto resize input
function resizeInput() {
  $(this).attr("size", $(this).val().length);
}

$('input[type="text"], input[type="email"]')
  .keyup(resizeInput)
  .each(resizeInput);

(function () {
  var textareas = document.querySelectorAll(".expanding"),
    resize = function (t) {
      t.style.height = "auto";
      t.style.overflow = "hidden";
      t.style.height = t.scrollHeight + t.offset + "px";
      t.style.overflow = "";
    },
    attachResize = function (t) {
      if (t) {
        t.offset = !window.opera
          ? t.offsetHeight - t.clientHeight
          : t.offsetHeight +
            parseInt(
              window
                .getComputedStyle(t, null)
                .getPropertyValue("border-top-width")
            );
        resize(t);
        if (t.addEventListener) {
          t.addEventListener("input", function () {
            resize(t);
          });
          t.addEventListener("mouseup", function () {
            resize(t);
          });
        }
        t["attachEvent"] &&
          t.attachEvent("onkeyup", function () {
            resize(t);
          });
      }
    };

  // IE7 support
  if (!document.querySelectorAll) {
    function getElementsByClass(searchClass, node, tag) {
      var classElements = new Array();
      node = node || document;
      tag = tag || "*";
      var els = node.getElementsByTagName(tag);
      var elsLen = els.length;
      var pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)");
      for (i = 0, j = 0; i < elsLen; i++) {
        if (pattern.test(els[i].className)) {
          classElements[j] = els[i];
          j++;
        }
      }
      return classElements;
    }
    textareas = getElementsByClass("expanding");
  }
  for (var i = 0; i < textareas.length; i++) {
    attachResize(textareas[i]);
  }
})();

// Sending email from the form
var message = "";
$(".sendButton").click(function () {
  message = $("#contactForm").serialize();
  $.ajax({
    url: "https://formspree.io/soumyajit@soumyajitnayak.com",
    method: "POST",
    data: { message: message },
    dataType: "json",
  });
  $(".alert").show("medium");
  setTimeout(function () {
    $(".alert").hide("medium");
  }, 5000);
  return false;
});

function toggleSemester(className) {
  // Get the specific content elements for the given className
  var specificContents = document.getElementsByClassName(className);
  for (var j = 0; j < specificContents.length; j++) {
    var specificContent = specificContents[j];
    var isOpen = specificContent.style.display === "block";
    specificContent.style.display = isOpen ? "none" : "block";
    var icon = specificContent.previousElementSibling.querySelector("span");
    icon.innerHTML = isOpen ? "&#9660;" : "&#9650;";
  }
}

function toggleContent(id) {
  const content = document.getElementById(id);
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
