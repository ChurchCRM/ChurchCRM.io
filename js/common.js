document.addEventListener('DOMContentLoaded', function() {
    // Standard navbar HTML
    const navbarHTML = `
    <div class="container-lg">
        <a class="navbar-brand" href="index.html" title="ChurchCRM">
            <img src="media/logo-churchcrm.png" alt="ChurchCRM" style="height: 32px; width: auto; margin-right: 0.5rem;">
            <span style="color: #212529;">Church<strong style="color: #667eea;">CRM</strong></span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="demo.html">Demo</a></li>
                <li class="nav-item"><a class="nav-link" href="install.html">Get Started</a></li>
                <li class="nav-item"><a class="nav-link" href="connect.html">Connect</a></li>
                <li class="nav-item"><a class="nav-link" href="https://github.com/ChurchCRM/CRM" target="_blank"><i class="fab fa-github"></i> GitHub</a></li>
            </ul>
        </div>
    </div>`;

    // Standard footer HTML
    const footerHTML = `
    <div class="container-lg">
        <div class="footer-links">
            <a href="https://github.com/ChurchCRM/CRM" target="_blank" title="GitHub">
                <i class="fab fa-github"></i> GitHub
            </a>
            <a href="https://github.com/ChurchCRM/CRM/issues" target="_blank" title="Report Issues">
                <i class="fas fa-bug"></i> Issues
            </a>
            <a href="https://github.com/ChurchCRM/CRM/wiki" target="_blank" title="Documentation">
                <i class="fas fa-book"></i> Docs
            </a>
            <a href="https://poeditor.com/join/project/RABdnDSqAt" target="_blank" title="Help Translate">
                <i class="fas fa-globe"></i> Translations
            </a>
            <a href="https://www.facebook.com/getChurchCRM" target="_blank" title="Facebook">
                <i class="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://www.instagram.com/getchurchcrm/" target="_blank" title="Instagram">
                <i class="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://x.com/getChurchCRM" target="_blank" title="X">
                <i class="fab fa-x"></i> X
            </a>
            <a href="https://www.linkedin.com/company/getchurchcrm/" target="_blank" title="LinkedIn">
                <i class="fab fa-linkedin-in"></i> LinkedIn
            </a>
            <a href="mailto:info@ChurchCRM.io" title="Email">
                <i class="fas fa-envelope"></i> Contact
            </a>
        </div>
        <p>&copy; 2026 ChurchCRM. All rights reserved.</p>
        <p class="footer-credit">Open source software built for churches. Made with ❤️ by the community.</p>
    </div>`;

    // Replace existing navbars with standard navbar
    document.querySelectorAll('nav.navbar').forEach(nav => {
        nav.innerHTML = navbarHTML;
    });

    // Replace existing footers with standard footer
    document.querySelectorAll('footer').forEach(ft => {
        ft.innerHTML = footerHTML;
    });

    // Add floating buttons (only once)
    if (!document.querySelector('.help-fab')) {
        const help = document.createElement('a');
        help.href = 'https://gitter.im/ChurchCRM/CRM';
        help.target = '_blank';
        help.className = 'help-fab';
        help.title = 'Get Help on Gitter';
        help.innerHTML = '<i class="fas fa-comments"></i><span class="d-none d-sm-inline">Get Help</span>';
        document.body.appendChild(help);
    }

    if (!document.querySelector('.demo-fab')) {
        const demo = document.createElement('a');
        demo.href = 'demo.html';
        demo.className = 'demo-fab';
        demo.title = 'Try Demo';
        demo.innerHTML = '<i class="fas fa-play"></i><span class="d-none d-sm-inline">Try Demo</span>';
        document.body.appendChild(demo);
    }

    // Mark active nav link
    const path = window.location.pathname.split('/').pop();
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if ((href === path) || (path === '' && href === 'index.html') || (href === window.location.pathname)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Helper to allow manual re-init if needed
window.ChurchCRMCommon = { init: function(){ document.dispatchEvent(new Event('DOMContentLoaded')); } };
