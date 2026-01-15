// UI State Management - Toggle states for demonstration

const uiState = {
  // Toggle: Просрочка > 2 суток
  toggleOverdue(carId, show) {
    const car = getCarById(carId);
    if (!car) return;

    const alertElement = document.querySelector('.alert--overdue');
    const badgeElement = document.getElementById('carStatusBadge');
    const statusBadgeInMain = document.querySelector('#carMainInfo .badge');

    if (show) {
      if (alertElement) {
        alertElement.style.display = 'block';
      }
      if (badgeElement) {
        badgeElement.textContent = 'Просрочка';
        badgeElement.className = 'badge badge--danger';
      }
      if (statusBadgeInMain) {
        statusBadgeInMain.textContent = 'Просрочка';
        statusBadgeInMain.className = 'badge badge--danger';
      }
      car.status = 'Просрочка';
    } else {
      if (alertElement) {
        alertElement.style.display = 'none';
      }
      const originalStatus = car.status === 'Просрочка' ? 'На линии' : car.status;
      if (badgeElement) {
        badgeElement.textContent = originalStatus;
        badgeElement.className = `badge ${getStatusBadgeClass(originalStatus)}`;
      }
      if (statusBadgeInMain) {
        statusBadgeInMain.textContent = originalStatus;
        statusBadgeInMain.className = `badge ${getStatusBadgeClass(originalStatus)}`;
      }
      car.status = originalStatus;
    }
  },

  // Toggle: Страховка истекает
  toggleInsuranceExpiring(carId, show) {
    const car = getCarById(carId);
    if (!car) return;

    const alertElement = document.querySelector('.alert--insurance');
    const insuranceAlert = document.getElementById('insuranceAlert');
    const insuranceEndDate = document.getElementById('insuranceEndDate');

    if (show) {
      if (alertElement) {
        alertElement.style.display = 'block';
        alertElement.textContent = 'Страховка истекает через 5 дней';
      }
      if (insuranceAlert) {
        insuranceAlert.style.display = 'block';
      }
      car.insuranceExpiringDays = 5;
      if (insuranceEndDate) {
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 5);
        insuranceEndDate.textContent = formatDate(endDate.toISOString().split('T')[0]);
      }
    } else {
      if (alertElement) {
        alertElement.style.display = 'none';
      }
      if (insuranceAlert) {
        insuranceAlert.style.display = 'none';
      }
      car.insuranceExpiringDays = 45;
      if (insuranceEndDate) {
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 45);
        insuranceEndDate.textContent = formatDate(endDate.toISOString().split('T')[0]);
      }
    }
  },

  // Toggle: Есть задолженность
  toggleDebt(driverId, show) {
    const driver = getDriverById(driverId);
    if (!driver) return;

    const bannerElement = document.querySelector('.debt-banner');
    const balanceElement = document.getElementById('currentBalance');

    if (show) {
      if (bannerElement) {
        bannerElement.style.display = 'block';
      }
      driver.debtAmount = 15000;
      driver.balanceAmount = -5000;
      if (balanceElement) {
        balanceElement.textContent = formatCurrency(-5000);
      }
    } else {
      if (bannerElement) {
        bannerElement.style.display = 'none';
      }
      driver.debtAmount = 0;
      driver.balanceAmount = 15000;
      if (balanceElement) {
        balanceElement.textContent = formatCurrency(15000);
      }
    }
  },

  // Toggle: Есть штрафы
  toggleFines(carId, show) {
    const car = getCarById(carId);
    if (!car) return;

    if (show) {
      car.hasFines = true;
    } else {
      car.hasFines = false;
    }
  },
};

// Initialize UI state toggles
function initUIStateToggles() {
  // Overdue toggle buttons
  document.querySelectorAll('[data-toggle="overdue"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const carId = btn.dataset.carId;
      const isActive = btn.classList.contains('active');
      uiState.toggleOverdue(carId, !isActive);
      btn.classList.toggle('active');
    });
  });

  // Insurance toggle buttons
  document.querySelectorAll('[data-toggle="insurance"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const carId = btn.dataset.carId;
      const isActive = btn.classList.contains('active');
      uiState.toggleInsuranceExpiring(carId, !isActive);
      btn.classList.toggle('active');
    });
  });

  // Debt toggle buttons
  document.querySelectorAll('[data-toggle="debt"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const driverId = btn.dataset.driverId;
      const isActive = btn.classList.contains('active');
      uiState.toggleDebt(driverId, !isActive);
      btn.classList.toggle('active');
    });
  });

  // Fines toggle buttons
  document.querySelectorAll('[data-toggle="fines"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const carId = btn.dataset.carId;
      const isActive = btn.classList.contains('active');
      uiState.toggleFines(carId, !isActive);
      btn.classList.toggle('active');
    });
  });
}
