document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    const themeToggle = document.getElementById("theme-toggle");
    const root = document.documentElement;
    const yearSpan = document.getElementById("year");
  
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      root.setAttribute("data-theme", storedTheme);
      themeToggle.textContent = storedTheme === "dark" ? "🌞" : "🌙";
    }
  
    themeToggle.addEventListener("click", () => {
      const newTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      themeToggle.textContent = newTheme === "dark" ? "🌞" : "🌙";
    });
  
    yearSpan.textContent = new Date().getFullYear();
  
    const projects = [
      {
        title: "Rendering projects",
        link: "projects/journal/index.html",
        image: "images/rendering.png"
      },
      {
        title: "Chess Move Predictor",
        link: "projects/chess.html",
        image: "images/chess.jpeg"
      },
      {
        title: "2D Platformer Game",
        link: "projects/platformer.html",
        image: "images/platformer.png"
      },
      {
        title: "Coq Logic Environment",
        link: "projects/coq.html",
        image: "images/coq_program.png"
      },
      {
        title: "Audio Scene Classifier",
        link: "projects/ML_Project.pdf",
        image: "images/audio.png"
      },
      {
        title: "Algorithm Practice",
        link: "projects/algorithms.html",
        image: "images/python.jpg"
      },
      {
        title : "Tic-Tac-Toe in C",
        link: "projects/tic-tac-toe.html",
        image: "images/tictactoe.png" 
      }
    ];
  
    const slider = document.getElementById("projects-slider");
    const counter = document.getElementById("slide-counter");

    const track = document.createElement("div");
    track.className = "slider-track";
  
    projects.forEach(p => {
      const slide = document.createElement("a");
      slide.className = "slide";
      slide.href = p.link;
      slide.innerHTML = `
        <img src="${p.image}" alt="${p.title}" class="slide-img" />
        <div class="overlay"><h3>${p.title}</h3></div>
        `;
      track.appendChild(slide);
    });
  
    slider.appendChild(track);
  
    const prev = document.createElement("button");
    prev.className = "slider-btn prev";
    prev.innerHTML = "←";
    const next = document.createElement("button");
    next.className = "slider-btn next";
    next.innerHTML = "→";
    slider.append(prev, next);
  
    let index = 0;
    const updateSlide = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
      counter.textContent = `${index + 1} / ${projects.length}`;
    };
    

  
    prev.addEventListener("click", () => {
      index = (index - 1 + projects.length) % projects.length;
      updateSlide();
    });
  
    next.addEventListener("click", () => {
      index = (index + 1) % projects.length;
      updateSlide();
    });
  
    updateSlide();
  
    const skills = [
      "C", "C++", "Python", "JavaScript", "LaTeX",
      "HTML", "CSS", "GitHub", "RStudio",
      "NumPy", "Pandas", "Coq"
    ];
  
    const skillsList = document.getElementById("skills-list");
    skills.forEach(s => {
      const li = document.createElement("li");
      li.textContent = s;
      skillsList.appendChild(li);
    });

  });
  