export function Header(): string {
	return `
    <div class="header-banner">
      <div class="header-decoration"></div>
      <div class="header-content">
        <div class="logo-container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/DICT_Agency_Seal.svg/1200px-DICT_Agency_Seal.svg.png" 
               alt="DICT Region 2 Logo" 
               loading="lazy" 
               onerror="this.src='https://imgur.com/hcMvsXb.png';">
        </div>
        <div class="header-text">
          <div class="header-badge">Region 2 - Cagayan Valley</div>
          <h1>Data Training Center</h1>
          <p>Department of Information and Communications Technology</p>
        </div>
      </div>
      <div class="header-tagline">
        <span class="tagline-icon">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </span>
        Attendance & Registration System
      </div>
    </div>
  `;
}
