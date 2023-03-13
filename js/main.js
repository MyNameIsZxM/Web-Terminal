const folders = document.querySelector("#folders");
const foldersContent = document.querySelector("#folders-content");
const about = document.querySelector("#about");
const socials = document.querySelector("#socials");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const socialsContent = document.querySelector("#socials-content");
const contactContent = document.querySelector("#contact-content");

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    // modal: true,
    width: "400px",
    height: "400px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

socials.addEventListener("click", () => {
  const socialsBox = new WinBox({
    title: "My Socials",
    // modal: true,
    width: "400px",
    height: "400px",
    top: 150,
    right: 150,
    bottom: 150,
    left: 150,
    mount: socialsContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Contact Me",
    // modal: true,
    width: "400px",
    height: "400px",
    top: 250,
    right: 250,
    bottom: 250,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
