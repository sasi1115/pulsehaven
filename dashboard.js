document.addEventListener("DOMContentLoaded", () => {
  /* =========================================================
     ELEMENTS
  ========================================================= */

  const navItems = document.querySelectorAll(".dashboard-nav-item");
  const sectionButtons = document.querySelectorAll(
    "[data-section]:not(.dashboard-nav-item)",
  );

  const sections = document.querySelectorAll(".dashboard-section");

  

  const sidebar = document.getElementById("dashboardSidebar");
  const overlay = document.getElementById("dashboardOverlay");
  const menuToggle = document.getElementById("dashboardMenuToggle");
  const sidebarClose = document.getElementById("dashboardSidebarClose");

  const profileButton = document.getElementById("dashboardProfileButton");
  const profileDropdown = document.getElementById("dashboardProfileDropdown");

  const profileWrapper = document.querySelector(".dashboard-profile-wrapper");

  /* =========================================================
     LUCIDE
  ========================================================= */

  function refreshIcons() {
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }

  /* =========================================================
     SHOW SECTION
     data-section → data-page
  ========================================================= */

  function showSection(sectionName) {
    if (!sectionName) return;

    /* -----------------------------------------
       Hide every section
    ----------------------------------------- */

    sections.forEach((section) => {
      section.classList.remove("active");
    });

    /* -----------------------------------------
       Find section using data-page
    ----------------------------------------- */

    const targetSection = document.querySelector(
      `.dashboard-section[data-page="${sectionName}"]`,
    );

    /* -----------------------------------------
       Show selected section
    ----------------------------------------- */

    if (targetSection) {
      targetSection.classList.add("active");
    } else {
      console.warn(`Dashboard section not found: ${sectionName}`);
      return;
    }

    /* -----------------------------------------
       Update sidebar active state
    ----------------------------------------- */

    navItems.forEach((item) => {
      if (item.dataset.section === sectionName) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    

    /* -----------------------------------------
       Close mobile sidebar
    ----------------------------------------- */

    closeSidebar();

    /* -----------------------------------------
       Refresh Lucide
    ----------------------------------------- */

    refreshIcons();
  }

  /* =========================================================
     SIDEBAR NAVIGATION
  ========================================================= */

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const sectionName = item.dataset.section;

      showSection(sectionName);
    });
  });

  /* =========================================================
     DASHBOARD BUTTONS
     
     Example:
     Schedule Visit
     View Appointments
     View Vitals History
     View Visit Notes
     Manage Reminders
  ========================================================= */

  sectionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const sectionName = button.dataset.section;

      showSection(sectionName);
    });
  });

  /* =========================================================
     PROFILE DROPDOWN
     
     Sarah / Pulse Haven Patient
  ========================================================= */

  if (profileButton && profileDropdown) {
    profileButton.addEventListener("click", (event) => {
      event.stopPropagation();

      const isOpen = profileDropdown.classList.contains("active");

      profileDropdown.classList.toggle("active");

      profileButton.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  /* =========================================================
     PROFILE DROPDOWN
     MY PROFILE
  ========================================================= */

  const profileMenuItem = document.querySelector(
    '.dashboard-dropdown-item[data-section="profile"]',
  );

  if (profileMenuItem) {
    profileMenuItem.addEventListener("click", () => {
      showSection("profile");

      closeProfileDropdown();
    });
  }

  /* =========================================================
     CLOSE PROFILE DROPDOWN
  ========================================================= */

  function closeProfileDropdown() {
    if (profileDropdown) {
      profileDropdown.classList.remove("active");
    }

    if (profileButton) {
      profileButton.setAttribute("aria-expanded", "false");
    }
  }

  document.addEventListener("click", (event) => {
    if (profileWrapper && !profileWrapper.contains(event.target)) {
      closeProfileDropdown();
    }
  });

  /* =========================================================
     MOBILE / TABLET SIDEBAR
  ========================================================= */

  function openSidebar() {
    if (sidebar) {
      sidebar.classList.add("open");
    }

    if (overlay) {
      overlay.classList.add("active");
    }

    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "true");
    }
  }

  function closeSidebar() {
    if (sidebar) {
      sidebar.classList.remove("open");
    }

    if (overlay) {
      overlay.classList.remove("active");
    }

    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
    }
  }

  /* =========================================================
     MENU BUTTON
  ========================================================= */

  if (menuToggle) {
    menuToggle.addEventListener("click", (event) => {
      event.stopPropagation();

      if (sidebar.classList.contains("open")) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  /* =========================================================
     SIDEBAR CLOSE BUTTON
  ========================================================= */

  if (sidebarClose) {
    sidebarClose.addEventListener("click", () => {
      closeSidebar();
    });
  }

  /* =========================================================
     OVERLAY
  ========================================================= */

  if (overlay) {
    overlay.addEventListener("click", () => {
      closeSidebar();
    });
  }

  /* =========================================================
     ESC KEY
  ========================================================= */

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSidebar();

      closeProfileDropdown();
    }
  });

  /* =========================================================
     LOGOUT
  ========================================================= */

  const logoutButtons = document.querySelectorAll(
    "#dashboardLogout, #dashboardDropdownLogout",
  );

  logoutButtons.forEach((button) => {
    button.addEventListener("click", () => {
       window.location.href = "/home1.html";
    });
  });

  /* =========================================================
     INITIAL STATE
     
     Overview should be visible when page loads.
  ========================================================= */

  showSection("overview");

  refreshIcons();
});
