// Common helpers and utilities

// Format date
function formatDate(dateString) {
  if (!dateString) return '-';
  const date = new Date(dateString);
  return date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

// Format date and time
function formatDateTime(dateString) {
  if (!dateString) return '-';
  const date = new Date(dateString);
  return date.toLocaleString('ru-RU', { 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// Format currency
function formatCurrency(amount) {
  if (amount === null || amount === undefined) return '-';
  return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(amount);
}

// Format number
function formatNumber(num) {
  if (num === null || num === undefined) return '-';
  return new Intl.NumberFormat('ru-RU').format(num);
}

// Get status badge class
function getStatusBadgeClass(status) {
  const statusMap = {
    'Свободен': 'badge--success',
    'Свободна': 'badge--success',
    'На линии': 'badge--info',
    'В ремонте': 'badge--warning',
    'Просрочка': 'badge--danger',
    'Забронировано': 'badge--warning',
    'Архив': 'badge--neutral',
    'Активен': 'badge--success',
    'Работает': 'badge--success',
    'Неактивен': 'badge--neutral',
    'Новый': 'badge--neutral',
    'Начислен': 'badge--warning',
    'Оплачен': 'badge--success',
    'В работе': 'badge--info',
    'Завершён': 'badge--success',
    'Ожидает оплаты': 'badge--warning'
  };
  return statusMap[status] || 'badge--neutral';
}

// Initialize tabs
function initTabs(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const tabs = container.querySelectorAll('.tab');
  // Find tab contents in the parent container or document
  const parentContainer = container.parentElement || document;
  const tabContents = parentContainer.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.dataset.tab;

      // Remove active class from all tabs and contents
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Add active class to clicked tab and corresponding content
      tab.classList.add('active');
      const targetContent = parentContainer.querySelector(`.tab-content[data-tab="${targetTab}"]`);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

// Initialize modal
function initModal(modalSelector, openSelector, closeSelector) {
  const modal = document.querySelector(modalSelector);
  if (!modal) return;

  const openButtons = document.querySelectorAll(openSelector);
  const closeButton = modal.querySelector(closeSelector);

  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('active');
    });
  });

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

// Filter table rows
function filterTable(tableSelector, filterFn) {
  const table = document.querySelector(tableSelector);
  if (!table) return;

  const rows = table.querySelectorAll('tbody tr');
  rows.forEach(row => {
    if (filterFn(row)) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

// Search in table
function searchTable(tableSelector, searchInputSelector, searchColumns) {
  const searchInput = document.querySelector(searchInputSelector);
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filterTable(tableSelector, (row) => {
      if (!searchTerm) return true;
      return searchColumns.some(colIndex => {
        const cell = row.cells[colIndex];
        if (cell) {
          return cell.textContent.toLowerCase().includes(searchTerm);
        }
        return false;
      });
    });
  });
}

// Generate CSV from data
function generateCSV(data, filename) {
  if (!data || data.length === 0) return;

  const headers = Object.keys(data[0]);
  const csvContent = [
    headers.join(','),
    ...data.map(row => headers.map(header => {
      const value = row[header];
      return typeof value === 'string' && value.includes(',') ? `"${value}"` : value;
    }).join(','))
  ].join('\n');

  const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Get URL parameter
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Set active menu item
function setActiveMenuItem(menuSelector, activePath) {
  const menuItems = document.querySelectorAll(menuSelector);
  menuItems.forEach(item => {
    const link = item.querySelector('a');
    if (link && link.getAttribute('href') === activePath) {
      item.classList.add('active');
    }
  });
}
