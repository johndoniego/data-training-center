import "./style.css";
import { Header } from "./components/Header";
import { TabNav } from "./components/TabNav";
import { RegistrationForm, setupRegistrationForm } from "./components/RegistrationForm";
import { CheckInForm, setupCheckInForm, setCheckInUserId } from "./components/CheckInForm";
import { QRScanner, setupQRScanner, checkUrlParams } from "./components/QRScanner";
import { AdminDashboard, setupAdminDashboard } from "./components/AdminDashboard";
import { showRegistrationComplete } from "./components/RegistrationSuccess";
import { switchTab } from "./utils";

function renderApp(): void {
	const app = document.getElementById("app");
	if (!app) return;

	app.innerHTML = `
    <div class="h-full overflow-auto">
      <div class="max-w-4xl mx-auto p-6">
        ${Header()}
        ${TabNav()}
        ${RegistrationForm()}
        ${CheckInForm()}
        ${QRScanner()}
        ${AdminDashboard()}
        <div id="toastContainer"></div>
      </div>
    </div>
  `;

	// Setup tab navigation
	document.querySelectorAll(".tab-button").forEach((btn) => {
		btn.addEventListener("click", () => {
			const tab = (btn as HTMLElement).dataset.tab;
			if (tab) switchTab(tab);
		});
	});

	// Setup registration form
	setupRegistrationForm((userId: string) => {
		showRegistrationComplete(userId, () => {
			switchTab("login");
			setCheckInUserId(userId);
		});
	});

	// Setup check-in form
	setupCheckInForm();

	// Setup QR scanner
	setupQRScanner((userId: string) => {
		switchTab("login");
		setCheckInUserId(userId);
	});

	// Setup admin dashboard
	setupAdminDashboard();

	// Check URL params for auto-fill
	const autoFillUserId = checkUrlParams();
	if (autoFillUserId) {
		switchTab("login");
		setCheckInUserId(autoFillUserId);
	}
}

// Initialize app
renderApp();
