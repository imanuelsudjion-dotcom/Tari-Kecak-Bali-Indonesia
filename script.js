/* Reset dan Font */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background: #f4f4f4;
}

/* Navbar */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    z-index: 1000;
}
.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}
.nav-menu {
    list-style: none;
    display: flex;
}
.nav-menu li {
    margin-left: 2rem;
}
.nav-menu a {
    color: white;
    text-decoration: none;
}

/* Hero Section */
.hero {
    height: 100vh;
    background: url('img/hero.jpg') no-repeat center center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: white;
    text-align: center;
}
#particles-js {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
}
.hero-content {
    z-index: 2;
    max-width: 600px;
}
.hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}
.subheading {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}
.play-btn {
    background: #ff4500;
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s;
}
.play-btn:hover {
    background: #e63900;
}

/* Glitch Effect */
.glitch {
    position: relative;
    animation: glitch 2s infinite;
}
.glitch::before, .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.glitch::before {
    animation: glitch-1 0.5s infinite;
    color: #ff0000;
    z-index: -1;
}
.glitch::after {
    animation: glitch-2 0.5s infinite;
    color: #00ff00;
    z-index: -2;
}
@keyframes glitch {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
}
@keyframes glitch-1 {
    0%, 100% { transform: translate(0); }
    10% { transform: translate(-1px, -1px); }
}
@keyframes glitch-2 {
    0%, 100% { transform: translate(0); }
    10% { transform: translate(1px, 1px); }
}

/* Gallery */
.gallery {
    padding: 4rem 2rem;
    text-align: center;
}
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
}
.gallery img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s;
}
.gallery img:hover {
    transform: scale(1.1);
}

/* Content */
.content {
    padding: 4rem 2rem;
    background: white;
}
.content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}
.content-item {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
}

/* Maps */
.maps {
    padding: 4rem 2rem;
    background: #f4f4f4;
}
.maps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}
.map-card {
    padding: 1rem;
    background: white;
    border-radius: 5px;
    cursor: pointer;
    transition: box-shadow 0.3s;
}
.map-card:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Responsive */
@media (max-width: 768px) {
    .hero h1 { font-size: 2rem; }
    .nav-menu { display: none; } /* Sederhana, bisa tambah hamburger menu */
    .gallery-grid, .content-grid, .maps-grid { grid-template-columns: 1fr; }
}