// Data for modules and quizzes
const modules = [
  {
    id: 'basic-safety-riding',
    title: 'Dasar-Dasar Safety Riding',
    content: `
      <h3>Definisi Modul</h3>
      <p>Dasar-dasar keselamatan berkendara sepeda motor meliputi sikap berkendara yang benar dan penggunaan perlengkapan keselamatan seperti helm, jaket, dan sepatu.</p>
      <h3>Penyebab</h3>
      <p>Kecelakaan sering terjadi karena kurangnya kesadaran akan keselamatan, penggunaan perlengkapan yang tidak lengkap, dan sikap berkendara yang ceroboh.</p>
      <h3>Pencegahan</h3>
      <p>Selalu gunakan perlengkapan keselamatan, patuhi aturan lalu lintas, dan berkendaralah dengan penuh kewaspadaan.</p>
    `,
    quiz: [
      {
        question: 'Apa tujuan utama dari safety riding?',
        options: [
          'Meningkatkan kecepatan berkendara',
          'Mengurangi risiko kecelakaan',
          'Menghemat bahan bakar',
          'Menunjukkan keahlian berkendara'
        ],
        answer: 1
      },
      {
        question: 'Apa perlengkapan keselamatan yang wajib digunakan?',
        options: [
          'Helm, jaket, dan sepatu',
          'Topi dan sandal',
          'Kacamata hitam dan kaos',
          'Sarung tangan dan celana pendek'
        ],
        answer: 0
      },
      {
        question: 'Bagaimana posisi tangan saat berkendara yang benar?',
        options: [
          'Santai di pangkuan',
          'Memegang setang dengan kuat dan rileks',
          'Satu tangan di setang, satu tangan di saku',
          'Tidak perlu memegang setang'
        ],
        answer: 1
      }
    ]
  },
  {
    id: 'braking-techniques',
    title: 'Teknik Pengereman',
    content: `
      <h3>Definisi Modul</h3>
      <p>Teknik pengereman yang aman melibatkan penggunaan rem depan dan belakang secara bersamaan dengan tekanan yang tepat.</p>
      <h3>Penyebab</h3>
      <p>Pengereman yang tidak tepat dapat menyebabkan tergelincir atau kehilangan kendali kendaraan.</p>
      <h3>Pencegahan</h3>
      <p>Gunakan rem dengan halus dan terkontrol, serta latih teknik pengereman secara rutin.</p>
    `,
    quiz: [
      {
        question: 'Apa teknik pengereman yang benar saat berkendara?',
        options: [
          'Menggunakan rem depan dan belakang secara bersamaan',
          'Hanya menggunakan rem depan',
          'Hanya menggunakan rem belakang',
          'Tidak menggunakan rem'
        ],
        answer: 0
      },
      {
        question: 'Kapan sebaiknya pengereman dilakukan?',
        options: [
          'Saat melihat rintangan jauh',
          'Saat sudah sangat dekat dengan rintangan',
          'Setelah melewati rintangan',
          'Tidak perlu pengereman'
        ],
        answer: 0
      },
      {
        question: 'Apa yang harus dilakukan saat pengereman mendadak?',
        options: [
          'Menarik setang ke kiri',
          'Menekan rem dengan kuat dan stabil',
          'Melepaskan rem secara tiba-tiba',
          'Meningkatkan kecepatan'
        ],
        answer: 1
      }
    ]
  },
  {
    id: 'emergency-anticipation',
    title: 'Antisipasi Kondisi Darurat',
    content: `
      <h3>Definisi Modul</h3>
      <p>Antisipasi kondisi darurat adalah kemampuan untuk mengenali dan merespon situasi berbahaya saat berkendara.</p>
      <h3>Penyebab</h3>
      <p>Kondisi darurat dapat terjadi karena faktor lingkungan, kesalahan pengendara lain, atau gangguan teknis kendaraan.</p>
      <h3>Pencegahan</h3>
      <p>Selalu waspada, jaga jarak aman, dan siapkan rencana tindakan saat menghadapi situasi darurat.</p>
    `,
    quiz: [
      {
        question: 'Apa yang harus dilakukan saat menghadapi kondisi darurat?',
        options: [
          'Tetap tenang dan kendalikan kendaraan',
          'Panik dan berhenti tiba-tiba',
          'Meningkatkan kecepatan',
          'Melepaskan setang'
        ],
        answer: 0
      },
      {
        question: 'Bagaimana cara menghindari kecelakaan di kondisi darurat?',
        options: [
          'Mengamati lingkungan sekitar dan mengambil tindakan cepat',
          'Mengabaikan rintangan',
          'Berhenti di tengah jalan',
          'Menerobos rintangan'
        ],
        answer: 0
      },
      {
        question: 'Apa pentingnya jarak aman saat berkendara?',
        options: [
          'Untuk menghindari tabrakan saat kondisi darurat',
          'Untuk mempercepat perjalanan',
          'Untuk menghemat bahan bakar',
          'Tidak penting'
        ],
        answer: 0
      }
    ]
  },
  {
    id: 'microsleep',
    title: 'Microsleep',
    content: `
      <h3>Definisi Modul</h3>
      <p>Microsleep adalah tidur singkat yang tidak disadari yang dapat terjadi saat berkendara.</p>
      <h3>Penyebab</h3>
      <p>Kurang tidur, kelelahan, dan kurang istirahat dapat menyebabkan microsleep.</p>
      <h3>Pencegahan</h3>
      <p>Pastikan istirahat cukup sebelum berkendara dan hindari mengemudi saat mengantuk.</p>
    `,
    quiz: [
      {
        question: 'Apa itu microsleep?',
        options: [
          'Tidur singkat yang tidak disadari',
          'Tidur panjang di siang hari',
          'Istirahat yang cukup',
          'Meningkatkan konsentrasi'
        ],
        answer: 0
      },
      {
        question: 'Apa tanda-tanda microsleep saat berkendara?',
        options: [
          'Mata mengantuk dan sulit fokus',
          'Kecepatan meningkat',
          'Tangan berkeringat',
          'Mendengarkan musik'
        ],
        answer: 0
      },
      {
        question: 'Bagaimana cara menghindari microsleep?',
        options: [
          'Istirahat cukup sebelum berkendara',
          'Meningkatkan kecepatan',
          'Mengabaikan rasa kantuk',
          'Makan makanan berat'
        ],
        answer: 0
      }
    ]
  },
  {
    id: 'blind-spot',
    title: 'Blind Spot',
    content: `
      <h3>Definisi Modul</h3>
      <p>Blind spot adalah area di sekitar kendaraan yang tidak terlihat oleh pengemudi melalui spion.</p>
      <h3>Penyebab</h3>
      <p>Posisi kendaraan lain yang berada di area blind spot sehingga tidak terlihat oleh pengemudi.</p>
      <h3>Pencegahan</h3>
      <p>Periksa spion dengan benar, lihat ke belakang secara langsung, dan hindari berada di blind spot kendaraan lain.</p>
    `,
    quiz: [
      {
        question: 'Apa itu blind spot?',
        options: [
          'Area yang tidak terlihat oleh pengemudi',
          'Area yang terlihat jelas',
          'Area di depan kendaraan',
          'Area di belakang kendaraan'
        ],
        answer: 0
      },
      {
        question: 'Bagaimana cara menghindari blind spot?',
        options: [
          'Memeriksa spion dan melihat ke belakang',
          'Mengabaikan spion',
          'Meningkatkan kecepatan',
          'Berhenti di tengah jalan'
        ],
        answer: 0
      },
      {
        question: 'Apa pentingnya mengetahui blind spot?',
        options: [
          'Untuk menghindari kecelakaan',
          'Untuk mempercepat perjalanan',
          'Untuk menghemat bahan bakar',
          'Tidak penting'
        ],
        answer: 0
      }
    ]
  }
];

// Global state
let currentUser = null;
let currentModule = null;

// DOM elements
const loginSection = document.getElementById('login-section');
const dashboardSection = document.getElementById('dashboard-section');
const moduleSection = document.getElementById('module-section');
const statisticsSection = document.getElementById('statistics-section');

const loginForm = document.getElementById('login-form');
const userNameSpan = document.getElementById('user-name');
const userDepartmentSpan = document.getElementById('user-department');
const userNpkSpan = document.getElementById('user-npk');

const moduleList = document.getElementById('module-list');
const moduleTitle = document.getElementById('module-title');
const moduleContent = document.getElementById('module-content');
const quizForm = document.getElementById('quiz-form');

const statMostParticipated = document.getElementById('stat-most-participated');
const statPerformanceList = document.getElementById('stat-performance-list');
const statAverageScore = document.getElementById('stat-average-score');
const statCompletionRate = document.getElementById('stat-completion-rate');

const btnLogout = document.getElementById('btn-logout');
const btnViewStatistics = document.getElementById('btn-view-statistics');
const btnBackDashboard = document.getElementById('btn-back-dashboard');
const btnBackDashboardFromStat = document.getElementById('btn-back-dashboard-from-stat');
const allStatisticsDiv = document.getElementById('all-statistics');

// Utility functions for localStorage
function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function loadUsers() {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
}

function saveCurrentUser(user) {
  localStorage.setItem('currentUser', JSON.stringify(user));
}

function loadCurrentUser() {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
}

// Initialize app
function init() {
  currentUser = loadCurrentUser();
  if (currentUser) {
    showDashboard();
  } else {
    showLogin();
  }
}

// Show/hide sections
function showLogin() {
  loginSection.classList.remove('hidden');
  dashboardSection.classList.add('hidden');
  moduleSection.classList.add('hidden');
  statisticsSection.classList.add('hidden');
}

function showDashboard() {
  loginSection.classList.add('hidden');
  dashboardSection.classList.remove('hidden');
  moduleSection.classList.add('hidden');
  statisticsSection.classList.add('hidden');

  userNameSpan.textContent = `Selamat Datang ${currentUser.name} Salam Sehat & Selamat`;
  userDepartmentSpan.textContent = currentUser.department;
  userNpkSpan.textContent = currentUser.npk;

  renderModules();
  renderStatisticsSummary();
}

function showModule(moduleId) {
  currentModule = modules.find(m => m.id === moduleId);
  if (!currentModule) return;

  loginSection.classList.add('hidden');
  dashboardSection.classList.add('hidden');
  moduleSection.classList.remove('hidden');
  statisticsSection.classList.add('hidden');

  moduleTitle.textContent = currentModule.title;
  moduleContent.innerHTML = currentModule.content;

  renderQuiz();
}

function showStatistics() {
  loginSection.classList.add('hidden');
  dashboardSection.classList.add('hidden');
  moduleSection.classList.add('hidden');
  statisticsSection.classList.remove('hidden');

  renderAllStatistics();
}

// Render modules list on dashboard
function renderModules() {
  moduleList.innerHTML = '';
  modules.forEach(mod => {
    const li = document.createElement('li');
    const completed = currentUser.quizResults && currentUser.quizResults[mod.id] !== undefined;
    li.className = completed
      ? 'bg-green-100 p-3 rounded shadow cursor-pointer hover:bg-green-200'
      : 'bg-red-100 p-3 rounded shadow cursor-pointer hover:bg-red-200';
    li.textContent = mod.title;
    li.addEventListener('click', () => showModule(mod.id));
    moduleList.appendChild(li);
  });
}

// Render quiz questions for current module
function renderQuiz() {
  quizForm.innerHTML = '';
  currentModule.quiz.forEach((q, idx) => {
    const fieldset = document.createElement('fieldset');
    fieldset.className = 'border border-gray-300 p-3 rounded mb-4 bg-white';

    const legend = document.createElement('legend');
    legend.className = 'font-semibold mb-2';
    legend.textContent = `Q${idx + 1}. ${q.question}`;
    fieldset.appendChild(legend);

    q.options.forEach((opt, i) => {
      const label = document.createElement('label');
      label.className = 'block mb-1 cursor-pointer';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `question-${idx}`;
      input.value = i;
      input.required = true;
      input.className = 'mr-2';

      label.appendChild(input);
      label.appendChild(document.createTextNode(opt));
      fieldset.appendChild(label);
    });

    quizForm.appendChild(fieldset);
  });

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.className = 'w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition';
  submitBtn.textContent = 'Submit Quiz';
  quizForm.appendChild(submitBtn);
}

// Handle login form submission
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const npk = loginForm.npk.value.trim();
  const name = loginForm.name.value.trim();
  const department = loginForm.department.value;

  if (!npk || !name || !department) {
    alert('Please fill all fields.');
    return;
  }

  currentUser = { npk, name, department, quizResults: {} };
  saveCurrentUser(currentUser);

  // Save user if new
  let users = loadUsers();
  const existingUserIndex = users.findIndex(u => u.npk === npk);
  if (existingUserIndex >= 0) {
    users[existingUserIndex] = currentUser;
  } else {
    users.push(currentUser);
  }
  saveUsers(users);

  showDashboard();
});

// Handle logout
btnLogout.addEventListener('click', () => {
  // Check if user has completed all quizzes
  const completedModules = Object.keys(currentUser.quizResults || {});
  if (completedModules.length < modules.length) {
    alert('Anda harus menyelesaikan semua quiz sebelum logout.');
    return;
  }
  currentUser = null;
  localStorage.removeItem('currentUser');
  showLogin();
});

// Handle back to dashboard from module
btnBackDashboard.addEventListener('click', () => {
  currentModule = null;
  showDashboard();
});

// Handle back to dashboard from statistics
btnBackDashboardFromStat.addEventListener('click', () => {
  showDashboard();
});

// Handle quiz submission
quizForm.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(quizForm);
  let score = 0;
  currentModule.quiz.forEach((q, idx) => {
    const userAnswer = formData.get(`question-${idx}`);
    if (userAnswer !== null && parseInt(userAnswer) === q.answer) {
      score += 100 / currentModule.quiz.length;
    }
  });
  score = Math.round(score);

  // Save quiz result for current user and module
  currentUser.quizResults[currentModule.id] = score;
  saveCurrentUser(currentUser);

  // Update users list
  let users = loadUsers();
  const userIndex = users.findIndex(u => u.npk === currentUser.npk);
  if (userIndex >= 0) {
    users[userIndex] = currentUser;
  } else {
    users.push(currentUser);
  }
  saveUsers(users);

  // alert(`Quiz submitted! Your score: ${score}/100`);
  currentModule = null;
  showDashboard();
});

// Render statistics summary on dashboard
function renderStatisticsSummary() {
  const users = loadUsers();
  if (users.length === 0) {
    statMostParticipated.textContent = '-';
    statPerformanceList.innerHTML = '<li>No data</li>';
    statAverageScore.textContent = '-';
    statCompletionRate.textContent = '-';
    return;
  }

  // Calculate most participated module
  const participationCount = {};
  modules.forEach(m => {
    participationCount[m.id] = 0;
  });
  users.forEach(u => {
    Object.keys(u.quizResults).forEach(modId => {
      participationCount[modId] = (participationCount[modId] || 0) + 1;
    });
  });
  const mostParticipatedModuleId = Object.entries(participationCount).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
  const mostParticipatedModule = modules.find(m => m.id === mostParticipatedModuleId);
  statMostParticipated.textContent = mostParticipatedModule ? mostParticipatedModule.title : '-';

  // Performance per module (average score)
  const performance = {};
  modules.forEach(m => {
    performance[m.id] = [];
  });
  users.forEach(u => {
    Object.entries(u.quizResults).forEach(([modId, score]) => {
      if (performance[modId]) {
        performance[modId].push(score);
      }
    });
  });
  statPerformanceList.innerHTML = '';
  modules.forEach(m => {
    const scores = performance[m.id];
    const avgScore = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    const li = document.createElement('li');
    li.textContent = `${m.title}: ${avgScore}/100`;
    statPerformanceList.appendChild(li);
  });

  // Average quiz score overall
  const allScores = [];
  users.forEach(u => {
    Object.values(u.quizResults).forEach(score => {
      allScores.push(score);
    });
  });
  const avgScoreOverall = allScores.length ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length) : 0;
  statAverageScore.textContent = `${avgScoreOverall}/100`;

  // Module completion rate (percentage of modules completed by all users)
  const totalModules = modules.length * users.length;
  const completedModules = allScores.length;
  const completionRate = totalModules ? Math.round((completedModules / totalModules) * 100) : 0;
  statCompletionRate.textContent = `${completionRate}%`;
}

// Render all user statistics in table
function renderAllStatistics() {
  const users = loadUsers();
  if (users.length === 0) {
    allStatisticsDiv.innerHTML = '<p>No user data available.</p>';
    return;
  }

  let html = '<table class="w-full border border-gray-300 text-left">';
  html += '<thead><tr class="bg-gray-200">';
  html += '<th class="border border-gray-300 p-2">NPK</th>';
  html += '<th class="border border-gray-300 p-2">Name</th>';
  html += '<th class="border border-gray-300 p-2">Department</th>';
  modules.forEach(m => {
    html += `<th class="border border-gray-300 p-2">${m.title}</th>`;
  });
  html += '</tr></thead><tbody>';

  users.forEach(u => {
    html += '<tr>';
    html += `<td class="border border-gray-300 p-2">${u.npk}</td>`;
    html += `<td class="border border-gray-300 p-2">${u.name}</td>`;
    html += `<td class="border border-gray-300 p-2">${u.department}</td>`;
    modules.forEach(m => {
      const score = u.quizResults[m.id];
      html += `<td class="border border-gray-300 p-2">${score !== undefined ? score : '-'}</td>`;
    });
    html += '</tr>';
  });

  html += '</tbody></table>';
  allStatisticsDiv.innerHTML = html;
}

const btnExportData = document.getElementById('btn-export-data');
const importFileInput = document.getElementById('import-file');

// Button event listeners
btnViewStatistics.addEventListener('click', () => {
  showStatistics();
});

btnExportData.addEventListener('click', () => {
  const users = loadUsers();
  if (users.length === 0) {
    alert('No data to export.');
    return;
  }

  // Prepare worksheet data
  const worksheetData = users.map(user => {
    const row = {
      NPK: user.npk,
      Name: user.name,
      Department: user.department,
    };
    modules.forEach(mod => {
      row[mod.title] = user.quizResults && user.quizResults[mod.id] !== undefined ? user.quizResults[mod.id] : '';
    });
    return row;
  });

  // Create worksheet and workbook
  const worksheet = XLSX.utils.json_to_sheet(worksheetData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'E-Learning Data');

  // Generate XLSX file and trigger download
  XLSX.writeFile(workbook, 'e-learning-safety-riding-data.xlsx');
});

importFileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const importedUsers = JSON.parse(e.target.result);
      if (!Array.isArray(importedUsers)) {
        alert('Invalid data format.');
        return;
      }
      // Merge imported users with existing users
      const existingUsers = loadUsers();
      const mergedUsers = [...existingUsers];
      importedUsers.forEach(importedUser => {
        const index = mergedUsers.findIndex(u => u.npk === importedUser.npk);
        if (index >= 0) {
          mergedUsers[index] = importedUser;
        } else {
          mergedUsers.push(importedUser);
        }
      });
      saveUsers(mergedUsers);
      alert('Data imported successfully. Please refresh the page.');
    } catch (err) {
      alert('Failed to import data: ' + err.message);
    }
  };
  reader.readAsText(file);
});

// Statistics summary toggle and charts
const btnToggleStatisticsSummary = document.getElementById('btn-toggle-statistics-summary');
const statisticsSummaryDiv = document.getElementById('statistics-summary');
let participationChart = null;
let performanceChart = null;
let completionChart = null;

btnToggleStatisticsSummary.addEventListener('click', () => {
  if (statisticsSummaryDiv.classList.contains('hidden')) {
    statisticsSummaryDiv.classList.remove('hidden');
    btnToggleStatisticsSummary.textContent = 'Hide Statistics Summary';
    renderCharts();
  } else {
    statisticsSummaryDiv.classList.add('hidden');
    btnToggleStatisticsSummary.textContent = 'Show Statistics Summary';
  }
});

function renderCharts() {
  const users = loadUsers();
  if (users.length === 0) {
    // Clear charts if no data
    if (participationChart) participationChart.destroy();
    if (performanceChart) performanceChart.destroy();
    if (completionChart) completionChart.destroy();
    return;
  }

  // Calculate participation count per module
  const participationCount = {};
  modules.forEach(m => {
    participationCount[m.title] = 0;
  });
  users.forEach(u => {
    Object.keys(u.quizResults).forEach(modId => {
      const mod = modules.find(m => m.id === modId);
      if (mod) participationCount[mod.title]++;
    });
  });

  // Calculate average score per module
  const performance = {};
  modules.forEach(m => {
    performance[m.title] = [];
  });
  users.forEach(u => {
    Object.entries(u.quizResults).forEach(([modId, score]) => {
      const mod = modules.find(m => m.id === modId);
      if (mod) performance[mod.title].push(score);
    });
  });
  const avgScores = {};
  Object.entries(performance).forEach(([title, scores]) => {
    avgScores[title] = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  });

  // Calculate module completion rate
  const totalModules = modules.length * users.length;
  const completedModules = users.reduce((acc, u) => acc + Object.keys(u.quizResults).length, 0);
  const completionRate = totalModules ? Math.round((completedModules / totalModules) * 100) : 0;

  // Update average quiz score text
  const allScores = [];
  users.forEach(u => {
    Object.values(u.quizResults).forEach(score => {
      allScores.push(score);
    });
  });
  const avgScoreOverall = allScores.length ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length) : 0;
  statAverageScore.textContent = `${avgScoreOverall}/100`;

  // Destroy existing charts if any
  if (participationChart) participationChart.destroy();
  if (performanceChart) performanceChart.destroy();
  if (completionChart) completionChart.destroy();

  // Create participation chart
  const ctxParticipation = document.getElementById('participationChart').getContext('2d');
  participationChart = new Chart(ctxParticipation, {
    type: 'bar',
    data: {
      labels: Object.keys(participationCount),
      datasets: [{
        label: 'Jumlah Peserta',
        data: Object.values(participationCount),
        backgroundColor: 'rgba(54, 162, 235, 0.6)'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
        title: { display: true, text: 'Jumlah Peserta per Modul' }
      },
      scales: {
        y: { beginAtZero: true, precision: 0 }
      }
    }
  });

  // Create performance chart
  const ctxPerformance = document.getElementById('performanceChart').getContext('2d');
  performanceChart = new Chart(ctxPerformance, {
    type: 'bar',
    data: {
      labels: Object.keys(avgScores),
      datasets: [{
        label: 'Rata-rata Skor',
        data: Object.values(avgScores),
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
        title: { display: true, text: 'Rata-rata Skor Quiz per Modul' }
      },
      scales: {
        y: { beginAtZero: true, max: 100 }
      }
    }
  });

  // Create completion rate chart
  const ctxCompletion = document.getElementById('completionChart').getContext('2d');
  completionChart = new Chart(ctxCompletion, {
    type: 'doughnut',
    data: {
      labels: ['Selesai', 'Belum Selesai'],
      datasets: [{
        label: 'Persentase Penyelesaian Modul',
        data: [completionRate, 100 - completionRate],
        backgroundColor: ['rgba(153, 102, 255, 0.6)', 'rgba(201, 203, 207, 0.6)']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' },
        title: { display: true, text: 'Persentase Penyelesaian Modul' }
      }
    }
  });
}

// Initialize app on page load
init();
