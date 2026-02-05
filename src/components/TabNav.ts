export function TabNav(): string {
	return `
    <div class="form-section" style="padding: 8px; margin-bottom: 16px;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 8px;">
        <button id="registerTab" class="tab-button active" data-tab="register">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6z"/>
          </svg> 
          Register 
        </button>
        <button id="loginTab" class="tab-button" data-tab="login">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"/>
          </svg> 
          Check In 
        </button>
        <button id="qrScanTab" class="tab-button" data-tab="qrscan">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm13-1h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3z"/>
          </svg> 
          QR Scanner 
        </button>
        <button id="adminTab" class="tab-button" data-tab="admin">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
          </svg> 
          Admin 
        </button>
      </div>
    </div>
  `;
}
