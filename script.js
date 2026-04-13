// ===== ANIMAÇÃO AO SCROLL =====
const elements = document.querySelectorAll('.about, .projects, .project-list img');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

elements.forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});


// ===== DARK / LIGHT MODE =====
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});


// ===== EFEITO DIGITAÇÃO =====
const title = document.querySelector(".main h1");
const text = title.innerHTML;
title.innerHTML = "";

let i = 0;

function typeEffect(){
    if(i < text.length){
        title.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 60);
    }
}

typeEffect();


// ===== NAVBAR SOMBRA AO SCROLL =====
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");

    if(window.scrollY > 50){
        nav.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.5)";
    } else {
        nav.style.boxShadow = "none";
    }
});

// efeito de brilho nos cards de habilidades
const skills = document.querySelectorAll('.skills-list div');

skills.forEach(skill => {
    skill.addEventListener('mousemove', (e) => {
        skill.style.boxShadow = "0 0 15px rgba(227,6,19,0.7)";
    });

    skill.addEventListener('mouseleave', () => {
        skill.style.boxShadow = "none";
    });
});

const socials = document.querySelectorAll('.socials a');

socials.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.boxShadow = "0 0 10px rgba(255,255,255,0.5)";
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.boxShadow = "none";
    });
});

const action = document.querySelectorAll('.action');

action.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.boxShadow = "0 0 10px rgba(227,6,19,0.7)";
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.boxShadow = "none";
    });
});