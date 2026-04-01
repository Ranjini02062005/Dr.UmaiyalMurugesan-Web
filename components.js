// ===== SHARED COMPONENTS (Navbar + Footer) =====

const NAVBAR_HTML = `
<nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container">
    <a class="navbar-brand" href="index.html">
      Dr. Umaiyal Murugesan
      <span>Service · Care · Commitment</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navMenu">
      <ul class="navbar-nav gap-1">
        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
        <li class="nav-item"><a class="nav-link" href="initiatives.html">Initiatives</a></li>
        <li class="nav-item"><a class="nav-link" href="gallery.html">Gallery</a></li>
        <li class="nav-item"><a class="nav-link" href="news.html">News</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        <li class="nav-item ms-2"><a class="nav-link" href="landing.html" style="background:rgba(255,255,255,0.08);border-radius:4px;font-size:0.75rem;padding:0.4rem 0.9rem!important;color:var(--accent-light)!important;"><i class="bi bi-house-door me-1"></i>Landing</a></li>
        <li class="nav-item d-flex align-items-center ms-2 gap-2">
          <a href="https://www.facebook.com/people/Nari-Sakthi-Umaiyal/61586030729723/" target="_blank" rel="noopener" style="width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.12);display:inline-flex;align-items:center;justify-content:center;color:#fff;font-size:0.95rem;text-decoration:none;transition:background 0.2s;" onmouseover="this.style.background='#1877F2'" onmouseout="this.style.background='rgba(255,255,255,0.12)'"><i class="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/narisakthiumaiyal/" target="_blank" rel="noopener" style="width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.12);display:inline-flex;align-items:center;justify-content:center;color:#fff;font-size:0.95rem;text-decoration:none;transition:background 0.2s;" onmouseover="this.style.background='#E1306C'" onmouseout="this.style.background='rgba(255,255,255,0.12)'"><i class="bi bi-instagram"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer-main">
  <div class="container">
    <div class="row g-4">
      <div class="col-lg-4 col-md-6">
        <div class="footer-brand">Nari Sakthi Umaiyal</div>
        <div class="footer-brand-sub">Dr. Umaiyal Murugesan</div>
        <p class="footer-desc">A platform dedicated to empowering women and building a responsible, inclusive society through service and commitment.</p>
        <div class="mt-3 d-flex gap-2">
          <a href="https://www.facebook.com/people/Nari-Sakthi-Umaiyal/61586030729723/" class="social-link"><i class="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/narisakthiumaiyal/" class="social-link"><i class="bi bi-instagram"></i></a>
        </div>
      </div>
      <div class="col-lg-2 col-md-6">
        <div class="footer-heading">Quick Links</div>
        <a href="landing.html" class="footer-link">Landing Page</a>
        <a href="index.html" class="footer-link">Home</a>
        <a href="about.html" class="footer-link">About</a>
        <a href="initiatives.html" class="footer-link">Initiatives</a>
        <a href="gallery.html" class="footer-link">Gallery</a>
        <a href="news.html" class="footer-link">News</a>
        <a href="contact.html" class="footer-link">Contact</a>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="footer-heading">Our Initiatives</div>
        <a href="initiatives.html" class="footer-link">Women Empowerment</a>
        <a href="initiatives.html" class="footer-link">Health Awareness</a>
        <a href="initiatives.html" class="footer-link">Community Development</a>
        <a href="initiatives.html" class="footer-link">Leadership Programs</a>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="footer-heading">Contact</div>
        <p class="footer-link"><i class="bi bi-geo-alt me-2" style="color:var(--p3);"></i>Virudhunagae,Tamil Nadu</p>
        <p class="footer-link"><i class="bi bi-envelope me-2" style="color:var(--p3);"></i>narisakthiumaiyal@gmail.com</p>
        <p class="footer-link"><i class="bi bi-telephone me-2" style="color:var(--p3);"></i>+91 98849 22577</p>
      </div>
    </div>
    <div class="footer-bottom d-flex flex-wrap justify-content-between align-items-center gap-2">
      <p>© 2026 Nari Sakthi Umaiyal. All Rights Reserved.</p>
      <div>
        <a href="#" class="footer-link d-inline me-3">Privacy Policy</a>
        <a href="#" class="footer-link d-inline">Terms of Use</a>
      </div>
    </div>
  </div>
</footer>`;

// Inject navbar
const navPlaceholder = document.getElementById('navbar-placeholder');
if (navPlaceholder) navPlaceholder.innerHTML = NAVBAR_HTML;

// Inject footer
const footerPlaceholder = document.getElementById('footer-placeholder');
if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;