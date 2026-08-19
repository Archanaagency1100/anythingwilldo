// Load Navbar
fetch("template/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    // re-activate Bootstrap scroll + toggler after load
    const script = document.createElement("script");
    script.src = "/static/bootstrap-5.3.8-dist/js/bootstrap.bundle.min.js";
    document.body.appendChild(script);
  });

// Load Footer
// fetch("footer.html")
//   .then(res => res.text())
//   .then(data => {
//     document.getElementById("footer").innerHTML = data;
//   });
