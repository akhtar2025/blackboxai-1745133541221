// Data for modules and quizzes
const modules = [
  {
    id: 'basic-safety-riding',
    title: 'Dasar-Dasar Safety Riding',
    content: `
      <p>Modul ini membahas dasar-dasar keselamatan berkendara sepeda motor, termasuk sikap berkendara yang benar dan perlengkapan keselamatan.</p>
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
      <p>Modul ini membahas teknik pengereman yang aman dan efektif saat berkendara sepeda motor.</p>
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
      <p>Modul ini membahas cara mengantisipasi dan menghadapi kondisi darurat saat berkendara.</p>
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
      <p>Modul ini membahas bahaya microsleep dan cara menghindarinya saat berkendara.</p>
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
      <p>Modul ini membahas tentang blind spot dan cara menghindarinya saat berkendara.</p>
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

  userNameSpan.textContent = currentUser.name;
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
    li.className = 'bg-gray-100 p-3 rounded shadow cursor-pointer hover:bg-gray-200';
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

  alert(`Quiz submitted! Your score: ${score}/100`);
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

// Button event listeners
btnViewStatistics.addEventListener('click', () => {
  showStatistics();
});

// Initialize app on page load
init();
