export function Header(): string {
	return `
    <div class="header-banner">
      <div class="logo-container">
        <img src="https://imgur.com/hcMvsXb.png" alt="DTC Tuguegarao Logo" loading="lazy" 
          onerror="console.error('Logo failed to load'); this.style.background='#0ea5e9'; this.innerHTML='🏢';" 
          style="width: 60px; height: 60px; object-fit: contain;">
      </div>
      <h1 class="text-2xl md:text-3xl font-bold mb-2">DTC Tuguegarao Cagayan</h1>
      <p class="text-lg opacity-90">DTC Tuguegarao Attendance System</p>
    </div>
  `;
}
