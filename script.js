const events = [
  {id:1,title:"CodeSprint 2026",category:"TECH",day:"04",month:"NOV",date:"4 Nov 2026",time:"10:00 AM",venue:"Innovation Lab",desc:"A fast-paced coding challenge where teams solve real-world problems."},
  {id:2,title:"Rhythm & Roots",category:"CULTURAL",day:"08",month:"NOV",date:"8 Nov 2026",time:"4:00 PM",venue:"Open Air Theatre",desc:"An evening of music, dance and performances by campus artists."},
  {id:3,title:"Design Thinking Workshop",category:"WORKSHOP",day:"12",month:"NOV",date:"12 Nov 2026",time:"11:30 AM",venue:"Seminar Hall 2",desc:"Learn to turn everyday problems into thoughtful solutions."},
  {id:4,title:"Inter-Department Football",category:"SPORTS",day:"15",month:"NOV",date:"15 Nov 2026",time:"3:00 PM",venue:"College Ground",desc:"Bring your team spirit and cheer for your department."},
  {id:5,title:"Startup Spark",category:"INNOVATION",day:"19",month:"NOV",date:"19 Nov 2026",time:"9:30 AM",venue:"Auditorium",desc:"Pitch your idea, get feedback and meet student founders."},
  {id:6,title:"Photography Walk",category:"COMMUNITY",day:"22",month:"NOV",date:"22 Nov 2026",time:"7:00 AM",venue:"Main Gate",desc:"Explore the campus through your camera lens."}
];

const notices = [
  {id:1,title:"Registration open for semester activities",desc:"Sign up for clubs and student communities before the orientation window closes.",date:"Today · Student Affairs",priority:"IMPORTANT"},
  {id:2,title:"Library timings updated",desc:"The central library will remain open until 8:00 PM on weekdays and digital resources remain accessible 24×7.",date:"Yesterday · Library",priority:"UPDATE"},
  {id:3,title:"Project exhibition submissions",desc:"Final-year teams can submit their project abstracts through their department coordinator by Friday.",date:"28 Oct · Academics",priority:"DEADLINE"},
  {id:4,title:"Aarambh 2.0 Hackathon Demo Day",desc:"Shortlisted teams will present working prototypes in the Main Auditorium at 2:00 PM.",date:"30 Oct · Innovation Cell",priority:"IMPORTANT"}
];

const clubs = [
  {id:0,name:"Coding Club",icon:"⌘",members:"120+ members",desc:"Build, code and compete in hackathons and weekly coding sprints.",lead:"Rohan Verma · Fri 4:30 PM",color:"#eeeaff",ink:"#7657e8"},
  {id:1,name:"Literary Society",icon:"✎",members:"65+ members",desc:"Words, stories, debates, and campus publications.",lead:"Ananya Sen · Wed 4:00 PM",color:"#fff0e5",ink:"#df8a4a"},
  {id:2,name:"Arts & Culture",icon:"✿",members:"90+ members",desc:"Create beyond boundaries with theatre, fine arts, and music.",lead:"Kabir Nair · Thu 5:00 PM",color:"#e8f7ef",ink:"#43a77e"},
  {id:3,name:"Sports Club",icon:"⚑",members:"150+ members",desc:"Play together, grow together across football, cricket, and athletics.",lead:"Vikram Singh · Daily 5:30 PM",color:"#eaf2ff",ink:"#5b91df"},
  {id:4,name:"Photography Club",icon:"◎",members:"48+ members",desc:"Capture campus moments, photo walks, and visual storytelling.",lead:"Meera Joshi · Sat 7:30 AM",color:"#fff0f4",ink:"#d8759b"},
  {id:5,name:"Robotics Society",icon:"⚙",members:"72+ members",desc:"Imagine. Engineer. Innovate with drones, IoT, and autonomous bots.",lead:"Aditya Rao · Tue 4:30 PM",color:"#f0edff",ink:"#8267d9"},
  {id:6,name:"Eco Club",icon:"♧",members:"54+ members",desc:"Small actions, greener future through campus sustainability drives.",lead:"Sana Khan · Wed 3:30 PM",color:"#eaf7e9",ink:"#5b9c55"},
  {id:7,name:"Entrepreneurship Cell",icon:"↗",members:"83+ members",desc:"Turn ideas into impact with founder talks and startup incubation.",lead:"Devansh Gupta · Fri 5:00 PM",color:"#fff4df",ink:"#c18a30"}
];

const facultyList = [
  {id:1,name:"Dr. Arindam Chatterjee",role:"Professor & HOD",dept:"CSE",fullDept:"Computer Science & Engineering",spec:"AI & Distributed Systems",office:"Block A · Room 204 (11 AM – 1 PM)",email:"a.chatterjee@campusconnect.edu"},
  {id:2,name:"Dr. Nidhi Sharma",role:"Associate Professor",dept:"CSE",fullDept:"Computer Science & Engineering",spec:"Full-Stack Web & Cloud Computing",office:"Block A · Room 210 (2 PM – 4 PM)",email:"n.sharma@campusconnect.edu"},
  {id:3,name:"Prof. Rajeshwar Prasad",role:"Professor & HOD",dept:"EE",fullDept:"Electrical Engineering",spec:"Smart Grids & Renewable Energy",office:"Block B · Room 102 (10 AM – 12 PM)",email:"r.prasad@campusconnect.edu"},
  {id:4,name:"Dr. Kavita Menon",role:"Associate Professor",dept:"ECE",fullDept:"Electronics & Communication",spec:"VLSI & Embedded IoT Systems",office:"Block C · Room 305 (1 PM – 3 PM)",email:"k.menon@campusconnect.edu"},
  {id:5,name:"Dr. Sameer Kulkarni",role:"Professor & HOD",dept:"ME",fullDept:"Mechanical Engineering",spec:"Robotics & Thermal Engineering",office:"Block D · Room 110 (11 AM – 1 PM)",email:"s.kulkarni@campusconnect.edu"},
  {id:6,name:"Dr. Farhan Ahmad",role:"Assistant Professor",dept:"CE",fullDept:"Civil Engineering",spec:"Sustainable Urban Infrastructure",office:"Block E · Room 108 (3 PM – 4:30 PM)",email:"f.ahmad@campusconnect.edu"},
  {id:7,name:"Dr. Sunita Deshmukh",role:"Professor & Dean",dept:"SCI",fullDept:"Applied Sciences",spec:"Applied Mathematics & Quantum Physics",office:"Block F · Room 201 (10 AM – 12 PM)",email:"s.deshmukh@campusconnect.edu"},
  {id:8,name:"Prof. Vivek Sinha",role:"Faculty Coordinator",dept:"CSE",fullDept:"Computer Science & Engineering",spec:"Cybersecurity & Student Innovation",office:"Innovation Lab · Room 101 (4 PM – 5 PM)",email:"v.sinha@campusconnect.edu"}
];

const departments = [
  {name:"Computer Science & Engineering",code:"CSE",symbol:"⌘",hod:"Dr. Arindam Chatterjee",labs:"AI & ML Lab, Cloud & Web Studio, Cybersecurity Cell",seats:"180 Intake · B.Tech & M.Tech"},
  {name:"Electrical Engineering",code:"EE",symbol:"ϟ",hod:"Prof. Rajeshwar Prasad",labs:"Power Systems Lab, Smart Grid Research Center",seats:"120 Intake · B.Tech"},
  {name:"Mechanical Engineering",code:"ME",symbol:"⚙",hod:"Dr. Sameer Kulkarni",labs:"CAD/CAM Studio, Robotics & Mechatronics Workshop",seats:"120 Intake · B.Tech"},
  {name:"Civil Engineering",code:"CE",symbol:"⌂",hod:"Dr. Farhan Ahmad",labs:"Structural Testing Lab, Geotechnical & GIS Studio",seats:"90 Intake · B.Tech"},
  {name:"Electronics & Communication",code:"ECE",symbol:"◉",hod:"Dr. Kavita Menon",labs:"VLSI Design Lab, Embedded IoT & Signal Processing Lab",seats:"120 Intake · B.Tech"},
  {name:"Applied Sciences",code:"SCI",symbol:"∑",hod:"Dr. Sunita Deshmukh",labs:"Physics & Photonics Lab, Computational Mathematics Center",seats:"Core Foundation & Research"}
];

function loadStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {}
}

const customEvents = loadStorage("cc_custom_events", []);
customEvents.forEach(ev => {
  if (!events.some(x => x.id === ev.id)) events.unshift(ev);
});
const customNotices = loadStorage("cc_custom_notices", []);
customNotices.forEach(no => {
  if (!notices.some(x => x.id === no.id)) notices.unshift(no);
});

const registered = new Set(loadStorage("cc_registered", [1]));
const joinedClubIds = new Set(loadStorage("cc_clubs", [0]));
let darkMode = loadStorage("cc_dark_mode", false);
let profile = loadStorage("cc_profile", {
  name: "Pragya Kumar",
  dept: "Computer Science & Engineering",
  sem: "Sem 5"
});

let activeEventCategory = "ALL";
let activeNoticePriority = "ALL";
let activeFacultyDept = "ALL";
let currentSearchQuery = "";

const $ = (s) => document.querySelector(s);
const eventList = $("#eventList"), noticeList = $("#noticeList"), clubGrid = $("#clubGrid"), facultyGrid = $("#facultyGrid");

function renderEventFilters() {
  const categories = ["ALL", "TECH", "CULTURAL", "WORKSHOP", "SPORTS", "INNOVATION", "COMMUNITY"];
  $("#eventFilters").innerHTML = categories.map(cat =>
    `<button type="button" class="filter-chip ${activeEventCategory === cat ? "active" : ""}" data-event-cat="${cat}">${cat === "ALL" ? "All (" + events.length + ")" : cat}</button>`
  ).join("");
}

function renderNoticeFilters() {
  const priorities = ["ALL", "IMPORTANT", "UPDATE", "DEADLINE"];
  $("#noticeFilters").innerHTML = priorities.map(p =>
    `<button type="button" class="filter-chip ${activeNoticePriority === p ? "active" : ""}" data-notice-pri="${p}">${p === "ALL" ? "All" : p}</button>`
  ).join("");
}

function renderFacultyFilters() {
  const depts = ["ALL", "CSE", "ECE", "EE", "ME", "CE", "SCI"];
  $("#facultyFilters").innerHTML = depts.map(d =>
    `<button type="button" class="filter-chip ${activeFacultyDept === d ? "active" : ""}" data-faculty-dept="${d}">${d === "ALL" ? "All Depts" : d}</button>`
  ).join("");
}

function getFilteredEvents() {
  const q = currentSearchQuery.toLowerCase();
  return events.filter(e => {
    const matchCat = activeEventCategory === "ALL" || e.category === activeEventCategory;
    const matchQ = !q || (e.title + e.category + e.venue + e.desc).toLowerCase().includes(q);
    return matchCat && matchQ;
  });
}

function getFilteredNotices() {
  const q = currentSearchQuery.toLowerCase();
  return notices.filter(n => {
    const matchPri = activeNoticePriority === "ALL" || n.priority === activeNoticePriority;
    const matchQ = !q || (n.title + n.desc + n.date + n.priority).toLowerCase().includes(q);
    return matchPri && matchQ;
  });
}

function getFilteredClubs() {
  const q = currentSearchQuery.toLowerCase();
  return clubs.filter(c => !q || (c.name + c.desc + c.lead).toLowerCase().includes(q));
}

function getFilteredFaculty() {
  const q = currentSearchQuery.toLowerCase();
  return facultyList.filter(f => {
    const matchDept = activeFacultyDept === "ALL" || f.dept === activeFacultyDept;
    const matchQ = !q || (f.name + f.fullDept + f.spec + f.role).toLowerCase().includes(q);
    return matchDept && matchQ;
  });
}

function getCountdownLabel(dayStr, monthStr) {
  const months = {JAN:0,FEB:1,MAR:2,APR:3,MAY:4,JUN:5,JUL:6,AUG:7,SEP:8,OCT:9,NOV:10,DEC:11};
  const m = months[(monthStr || "NOV").toUpperCase()] ?? 10;
  const d = parseInt(dayStr, 10) || 4;
  const target = new Date(2026, m, d);
  const now = new Date(2026, 9, 30);
  const diff = Math.round((target - now) / (1000 * 60 * 60 * 24));
  if (diff <= 0) return "Today";
  if (diff === 1) return "Tomorrow";
  return `In ${diff} days`;
}

function renderEvents(list = getFilteredEvents()) {
  if (!list.length) {
    eventList.innerHTML = `<p class="empty-state">No events match your current filter.</p>`;
    return;
  }
  eventList.innerHTML = list.map(e =>
    `<article class="event-item">
      <div class="event-date"><b>${e.day}</b><small>${e.month}</small></div>
      <button type="button" class="event-info-btn" data-event-detail="${e.id}">
        <strong>${e.title}</strong>
        <small>◷ ${e.time} &nbsp; · &nbsp; ◉ ${e.venue}</small>
      </button>
      <span class="countdown-badge">${getCountdownLabel(e.day, e.month)}</span>
      <span class="event-category">${e.category}</span>
      <button type="button" class="register-btn ${registered.has(e.id) ? "registered" : ""}" data-register="${e.id}">${registered.has(e.id) ? "Joined ✓" : "Join"}</button>
    </article>`
  ).join("");
}

function renderNotices(list = getFilteredNotices()) {
  if (!list.length) {
    noticeList.innerHTML = `<p class="empty-state">No notices found for this filter.</p>`;
    return;
  }
  noticeList.innerHTML = list.map(n =>
    `<article class="notice-item">
      <span class="notice-marker"></span>
      <div class="notice-content"><strong>${n.title}</strong><p>${n.desc}</p><span class="notice-meta">${n.date}</span></div>
      <span class="priority">${n.priority}</span>
    </article>`
  ).join("");
}

function renderClubs(list = getFilteredClubs()) {
  if (!list.length) {
    clubGrid.innerHTML = `<p class="empty-state">No clubs match your search.</p>`;
    return;
  }
  clubGrid.innerHTML = list.map(c =>
    `<article class="club-card">
      <div class="club-icon" style="background:${c.color};color:${c.ink}">${c.icon}</div>
      <strong>${c.name}</strong>
      <p>${c.members} · ${joinedClubIds.has(c.id) ? "Member ✓" : "Open"}</p>
      <button type="button" data-club="${c.id}">${joinedClubIds.has(c.id) ? "View / Leave club →" : "Explore & Join →"}</button>
    </article>`
  ).join("");
}

function renderFaculty(list = getFilteredFaculty()) {
  if (!list.length) {
    facultyGrid.innerHTML = `<p class="empty-state">No faculty members match this filter.</p>`;
    return;
  }
  facultyGrid.innerHTML = list.map(f => {
    const initials = f.name.split(" ").filter(w => !w.includes(".")).map(w => w[0]).join("").slice(0, 2);
    return `<article class="faculty-card">
      <div class="faculty-top">
        <div class="faculty-avatar">${initials}</div>
        <div>
          <span class="faculty-role">${f.dept} · ${f.role}</span>
          <strong>${f.name}</strong>
        </div>
      </div>
      <p>${f.spec}</p>
      <button type="button" data-faculty="${f.id}">Office hours & contact →</button>
    </article>`;
  }).join("");
}

function renderDepartments() {
  $("#departmentGrid").innerHTML = departments.map((d, i) =>
    `<button type="button" class="department-item" data-dept="${i}">
      <span class="department-symbol">${d.symbol}</span>
      <div><strong>${d.name}</strong><small>HOD: ${d.hod} · View details →</small></div>
    </button>`
  ).join("");
}

function updateProfileUI() {
  const initials = profile.name.trim().split(/\s+/).map(w => w[0] || "").join("").toUpperCase().slice(0, 2) || "PK";
  const firstName = profile.name.trim().split(/\s+/)[0] || "Student";
  $("#welcomeName").textContent = firstName;
  $("#sideStudentName").textContent = profile.name;
  $("#sideAvatar").textContent = initials;
  $("#topAvatarBtn").textContent = initials;
  $("#dashAvatar").textContent = initials;
  $("#dashName").textContent = profile.name;
  $("#dashMeta").textContent = `Student · ${profile.dept} · ${profile.sem}`;
}

$("#eventCount").textContent = String(events.length).padStart(2, "0");
$("#clubCount").textContent = String(clubs.length).padStart(2, "0");
$("#noticeCount").textContent = String(notices.length).padStart(2, "0");
$("#navNoticeBadge").textContent = String(notices.length);
$("#deptCount").textContent = String(departments.length).padStart(2, "0");

renderEventFilters();
renderNoticeFilters();
renderFacultyFilters();
renderEvents();
renderNotices();
renderClubs();
renderFaculty();
renderDepartments();
updateProfileUI();

$("#todayDate").textContent = new Date().toLocaleDateString("en-IN", {weekday:"short",day:"numeric",month:"short",year:"numeric"});

function toast(message) {
  const t = $("#toast");
  t.textContent = message;
  t.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

function openModal(title, desc, body, confirmText, callback, eyebrow = "CAMPUSCONNECT") {
  $("#modalTitle").textContent = title;
  $("#modalDescription").textContent = desc;
  $("#modalBody").innerHTML = body;
  $("#modalEyebrow").textContent = eyebrow;
  $("#modalConfirm").textContent = confirmText + " →";
  $("#modalConfirm").onclick = (e) => {
    e.preventDefault();
    callback();
    $("#actionModal").close();
  };
  $("#actionModal").showModal();
}

$("#modalCloseBtn").addEventListener("click", () => $("#actionModal").close());
$("#modalCancelBtn").addEventListener("click", () => $("#actionModal").close());

document.addEventListener("click", e => {
  const evCat = e.target.closest("[data-event-cat]");
  if (evCat) {
    activeEventCategory = evCat.dataset.eventCat;
    renderEventFilters();
    renderEvents();
    return;
  }

  const noPri = e.target.closest("[data-notice-pri]");
  if (noPri) {
    activeNoticePriority = noPri.dataset.noticePri;
    renderNoticeFilters();
    renderNotices();
    return;
  }

  const facDept = e.target.closest("[data-faculty-dept]");
  if (facDept) {
    activeFacultyDept = facDept.dataset.facultyDept;
    renderFacultyFilters();
    renderFaculty();
    return;
  }

  const reg = e.target.closest("[data-register]");
  if (reg) {
    const id = Number(reg.dataset.register);
    if (registered.has(id)) {
      registered.delete(id);
      toast("Event registration cancelled.");
    } else {
      registered.add(id);
      toast("You're registered! Added to My Dashboard.");
    }
    saveStorage("cc_registered", [...registered]);
    renderEvents();
    renderDashboard();
    return;
  }

  const clubBtn = e.target.closest("[data-club]");
  if (clubBtn) {
    const c = clubs[Number(clubBtn.dataset.club)];
    const isMember = joinedClubIds.has(c.id);
    openModal(
      c.name,
      c.desc,
      `<p class="muted">${c.members} · Coordinator: ${c.lead}</p>
       <p style="font-size:12px;line-height:1.7;color:#687387;margin-top:10px">Meet like-minded students, participate in campus events, and collaborate on hands-on projects every week.</p>`,
      isMember ? "Leave club" : "Join club",
      () => {
        if (isMember) {
          joinedClubIds.delete(c.id);
          toast(`Left ${c.name}.`);
        } else {
          joinedClubIds.add(c.id);
          toast(`Joined ${c.name}! Visible in My Dashboard.`);
        }
        saveStorage("cc_clubs", [...joinedClubIds]);
        renderClubs();
        renderDashboard();
      },
      "CLUB EXPLORER"
    );
    return;
  }

  const facBtn = e.target.closest("[data-faculty]");
  if (facBtn) {
    const f = facultyList.find(item => item.id === Number(facBtn.dataset.faculty));
    if (!f) return;
    openModal(
      f.name,
      `${f.role} · ${f.fullDept}`,
      `<div style="display:grid;gap:8px;margin-top:12px;font-size:12px;color:#4a5568;background:#f7f8fc;padding:12px;border-radius:8px">
        <div><strong>Specialization:</strong> ${f.spec}</div>
        <div><strong>Office Hours:</strong> ${f.office}</div>
        <div><strong>Email:</strong> ${f.email}</div>
      </div>`,
      "Request meeting slot",
      () => toast(`Meeting request sent to ${f.name}.`),
      "FACULTY DIRECTORY"
    );
    return;
  }

  const deptBtn = e.target.closest("[data-dept]");
  if (deptBtn) {
    const d = departments[Number(deptBtn.dataset.dept)];
    const deptFaculty = facultyList.filter(f => f.dept === d.code);
    openModal(
      d.name,
      `Head of Department: ${d.hod}`,
      `<div style="display:grid;gap:8px;margin-top:12px;font-size:12px;color:#4a5568;background:#f7f8fc;padding:12px;border-radius:8px">
        <div><strong>Key Labs & Facilities:</strong> ${d.labs}</div>
        <div><strong>Program Intake:</strong> ${d.seats}</div>
        <div><strong>Faculty Members:</strong> ${deptFaculty.map(f => f.name).join(", ") || "View in Faculty Directory"}</div>
      </div>`,
      "Filter faculty by " + d.code,
      () => {
        activeFacultyDept = d.code;
        renderFacultyFilters();
        renderFaculty();
        document.getElementById("faculty").scrollIntoView({behavior:"smooth"});
      },
      "ACADEMIC DEPARTMENT"
    );
  }
});

function renderDashboard() {
  const chosenEvents = events.filter(e => registered.has(e.id));
  const evBox = $("#registeredEvents");
  evBox.innerHTML = chosenEvents.length
    ? `<div class="event-list">` + chosenEvents.map(e =>
        `<div class="event-item">
          <div class="event-date"><b>${e.day}</b><small>${e.month}</small></div>
          <div class="event-info"><strong>${e.title}</strong><small>${e.date} · ${e.venue}</small></div>
          <button type="button" class="register-btn registered" data-register="${e.id}">Joined ✓</button>
        </div>`
      ).join("") + `</div>`
    : `<p class="empty-state">You haven't registered for any events yet. Explore upcoming events to get started.</p>`;

  const chosenClubs = clubs.filter(c => joinedClubIds.has(c.id));
  const clBox = $("#joinedClubs");
  clBox.innerHTML = chosenClubs.length
    ? `<div class="event-list">` + chosenClubs.map(c =>
        `<div class="event-item">
          <div class="club-icon" style="background:${c.color};color:${c.ink};margin:0">${c.icon}</div>
          <div class="event-info"><strong>${c.name}</strong><small>${c.lead}</small></div>
          <button type="button" class="register-btn registered" data-club="${c.id}">Member ✓</button>
        </div>`
      ).join("") + `</div>`
    : `<p class="empty-state">You haven't joined any clubs yet. Click a club card to join.</p>`;
}

function showSection(id) {
  const home = $("#home"), dash = $("#dashboard");
  if (id === "dashboard") {
    home.classList.add("hidden");
    dash.classList.remove("hidden");
    renderDashboard();
    window.scrollTo({top: 0, behavior: "smooth"});
  } else {
    home.classList.remove("hidden");
    dash.classList.add("hidden");
    if (id !== "home") {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({behavior:"smooth", block:"start"});
    } else {
      window.scrollTo({top: 0, behavior: "smooth"});
    }
  }
  document.querySelectorAll(".nav-link").forEach(a => a.classList.toggle("active", a.dataset.section === id));
  $("#crumb").textContent = id === "dashboard" ? "My Dashboard" : id.charAt(0).toUpperCase() + id.slice(1);
  $("#sidebar").classList.remove("open");
}

document.querySelectorAll(".nav-link").forEach(a =>
  a.addEventListener("click", e => {
    e.preventDefault();
    showSection(a.dataset.section);
  })
);

$("#sidebarProfileBtn").addEventListener("click", () => showSection("dashboard"));
$("#topAvatarBtn").addEventListener("click", () => showSection("dashboard"));
$("#menuBtn").addEventListener("click", () => $("#sidebar").classList.toggle("open"));

$("#collegeInfoBtn").onclick = () => openModal(
  "Aarav Institute of Technology",
  "Official Campus Directory & Student Guide",
  `<div style="display:grid;gap:8px;margin-top:10px;font-size:12px;color:#4a5568;background:#f7f8fc;padding:12px;border-radius:8px">
    <div><strong>Accreditation:</strong> NAAC A+ · Autonomous Engineering & Sciences Campus</div>
    <div><strong>Academic Blocks:</strong> Block A (CSE), Block B (EE), Block C (ECE), Block D (ME), Block E (Civil), Block F (Sciences)</div>
    <div><strong>Student Helpdesk:</strong> Ground Floor, Admin Wing · Ext. 104</div>
    <div><strong>Emergency Medical Room:</strong> Near Gate 2 (24×7 Ambulance)</div>
  </div>`,
  "Got it",
  () => {},
  "COLLEGE INFORMATION"
);

$("#viewAllEvents").onclick = (e) => {
  e.preventDefault();
  openModal(
    "All campus events",
    "Explore every upcoming campus activity this semester.",
    `<div style="display:grid;gap:9px;margin-top:10px">${events.map(x =>
      `<div style="font-size:11px;padding:8px 10px;background:#f7f6fc;border-radius:6px">
        <b>${x.title}</b> <span style="color:#687387">(${x.venue})</span>
        <span style="float:right;color:#8065df;font-weight:700">${x.date}</span>
      </div>`
    ).join("")}</div>`,
    "Done",
    () => {},
    "EVENT CALENDAR"
  );
};

$("#viewAllNotices").onclick = (e) => {
  e.preventDefault();
  openModal(
    "All campus notices",
    "Important announcements and academic deadlines.",
    notices.map(n =>
      `<p style="font-size:11px;margin:10px 0;padding-bottom:8px;border-bottom:1px solid #eef0f5">
        <b>[${n.priority}] ${n.title}</b><br>
        <span style="color:#687387">${n.desc}</span><br>
        <small style="color:#929bad">${n.date}</small>
      </p>`
    ).join(""),
    "Done",
    () => {},
    "NOTICE BOARD"
  );
};

$("#viewAllClubs").onclick = (e) => {
  e.preventDefault();
  $("#clubs").scrollIntoView({behavior:"smooth"});
};

$("#suggestBtn").onclick = () => openModal(
  "Share your idea",
  "Tell us how we can improve campus life.",
  `<textarea class="modal-field" id="feedbackText" rows="4" placeholder="I think CampusConnect could..."></textarea>`,
  "Send feedback",
  () => {
    const v = $("#feedbackText").value.trim();
    if (v) toast("Thanks! Your feedback has been shared with Student Affairs.");
    else toast("Please write your idea first.");
  },
  "YOUR VOICE MATTERS"
);

$("#editProfile").onclick = () => openModal(
  "Edit student profile",
  "Update your student details shown across CampusConnect.",
  `<input class="modal-field" id="studentNameInput" value="${profile.name}" placeholder="Your full name">
   <input class="modal-field" id="studentDeptInput" value="${profile.dept}" placeholder="Department">
   <input class="modal-field" id="studentSemInput" value="${profile.sem}" placeholder="Semester / Year (e.g. Sem 5)">`,
  "Save changes",
  () => {
    const nameVal = $("#studentNameInput").value.trim();
    const deptVal = $("#studentDeptInput").value.trim();
    const semVal = $("#studentSemInput").value.trim();
    if (nameVal) profile.name = nameVal;
    if (deptVal) profile.dept = deptVal;
    if (semVal) profile.sem = semVal;
    saveStorage("cc_profile", profile);
    updateProfileUI();
    toast("Student profile updated!");
  },
  "PROFILE SETTINGS"
);

$("#notificationBtn").onclick = () => openModal(
  "Campus notifications",
  "You have 2 active reminders for this week.",
  `<div style="display:grid;gap:8px;margin-top:10px;font-size:11px;color:#4a5568">
    <div style="padding:9px;background:#f6f3ff;border-radius:7px"><b>● Aarambh 2.0 Hackathon:</b> Prototype submission & demo today at 2:00 PM.</div>
    <div style="padding:9px;background:#f7f8fc;border-radius:7px"><b>● Library Notice:</b> Extended weekday hours (till 8:00 PM) now active.</div>
  </div>`,
  "Mark all read",
  () => toast("Notifications marked as read."),
  "NOTIFICATIONS"
);

function searchAll(query) {
  currentSearchQuery = query.trim();
  renderEvents();
  renderNotices();
  renderClubs();
  renderFaculty();
  if (typeof renderHelpboard === "function") renderHelpboard();
  if (typeof renderCampusMap === "function") renderCampusMap();
}

$("#globalSearch").addEventListener("input", e => {
  searchAll(e.target.value);
});

$("#globalSearch").addEventListener("keydown", e => {
  if (e.key === "Enter") {
    searchAll(e.target.value);
    showSection("home");
    toast(currentSearchQuery ? `Showing matches for "${currentSearchQuery}"` : "Showing all campus items");
  }
});

document.addEventListener("keydown", e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    $("#globalSearch").focus();
  }
});

renderDashboard();
function applyTheme() {
  document.body.classList.toggle("dark-mode", Boolean(darkMode));
  const btn = $("#themeToggleBtn");
  if (btn) btn.textContent = darkMode ? "☀" : "☾";
}
applyTheme();

$("#themeToggleBtn").addEventListener("click", () => {
  darkMode = !darkMode;
  saveStorage("cc_dark_mode", darkMode);
  applyTheme();
  toast(darkMode ? "Dark mode enabled" : "Light mode enabled");
});

$("#addEventBtn").addEventListener("click", () => {
  openModal(
    "Create campus event",
    "Add a new activity or workshop to the campus calendar.",
    `<input class="modal-field" id="newEvTitle" placeholder="Event title (e.g. AI Hackathon 2026)">
     <div class="modal-row">
       <select class="modal-field" id="newEvCat">
         <option value="TECH">TECH</option>
         <option value="CULTURAL">CULTURAL</option>
         <option value="WORKSHOP">WORKSHOP</option>
         <option value="SPORTS">SPORTS</option>
         <option value="INNOVATION">INNOVATION</option>
         <option value="COMMUNITY">COMMUNITY</option>
       </select>
       <input class="modal-field" id="newEvTime" value="3:00 PM" placeholder="Time (e.g. 3:00 PM)">
     </div>
     <div class="modal-row">
       <input class="modal-field" id="newEvDay" value="26" placeholder="Day (e.g. 26)">
       <input class="modal-field" id="newEvMonth" value="NOV" placeholder="Month (e.g. NOV)">
     </div>
     <input class="modal-field" id="newEvVenue" placeholder="Venue (e.g. Seminar Hall 1)">
     <textarea class="modal-field" id="newEvDesc" rows="2" placeholder="Short description of the event..."></textarea>`,
    "Publish event",
    () => {
      const title = $("#newEvTitle").value.trim();
      const category = $("#newEvCat").value;
      const time = $("#newEvTime").value.trim() || "4:00 PM";
      const day = ($("#newEvDay").value.trim() || "28").padStart(2, "0").slice(0, 2);
      const month = ($("#newEvMonth").value.trim() || "NOV").toUpperCase().slice(0, 3);
      const venue = $("#newEvVenue").value.trim() || "Main Auditorium";
      const desc = $("#newEvDesc").value.trim() || "Student-organized campus activity open to all departments.";
      if (!title) {
        toast("Please enter an event title.");
        return;
      }
      const newEvent = {
        id: Date.now(),
        title,
        category,
        day,
        month,
        date: `${Number(day)} ${month.charAt(0) + month.slice(1).toLowerCase()} 2026`,
        time,
        venue,
        desc
      };
      events.unshift(newEvent);
      customEvents.unshift(newEvent);
      saveStorage("cc_custom_events", customEvents);
      $("#eventCount").textContent = String(events.length).padStart(2, "0");
      activeEventCategory = "ALL";
      renderEventFilters();
      renderEvents();
      toast(`Published "${title}" to Upcoming Events!`);
    },
    "NEW CAMPUS EVENT"
  );
});

$("#addNoticeBtn").addEventListener("click", () => {
  openModal(
    "Post campus notice",
    "Share an official announcement or deadline with students.",
    `<input class="modal-field" id="newNoTitle" placeholder="Notice headline (e.g. Mid-Semester Exam Schedule)">
     <div class="modal-row">
       <select class="modal-field" id="newNoPri">
         <option value="IMPORTANT">IMPORTANT</option>
         <option value="UPDATE">UPDATE</option>
         <option value="DEADLINE">DEADLINE</option>
       </select>
       <input class="modal-field" id="newNoDept" value="Academics" placeholder="Issued by (e.g. Academics)">
     </div>
     <textarea class="modal-field" id="newNoDesc" rows="3" placeholder="Write the full announcement details..."></textarea>`,
    "Post announcement",
    () => {
      const title = $("#newNoTitle").value.trim();
      const priority = $("#newNoPri").value;
      const issuer = $("#newNoDept").value.trim() || "Campus Admin";
      const desc = $("#newNoDesc").value.trim() || "Please check with your department coordinator for complete details.";
      if (!title) {
        toast("Please enter a notice headline.");
        return;
      }
      const newNotice = {
        id: Date.now(),
        title,
        desc,
        date: `Just now · ${issuer}`,
        priority
      };
      notices.unshift(newNotice);
      customNotices.unshift(newNotice);
      saveStorage("cc_custom_notices", customNotices);
      $("#noticeCount").textContent = String(notices.length).padStart(2, "0");
      $("#navNoticeBadge").textContent = String(notices.length);
      activeNoticePriority = "ALL";
      renderNoticeFilters();
      renderNotices();
      toast("Notice posted to Campus Bulletin!");
    },
    "CAMPUS BULLETIN"
  );
});
const weeklyTimetable = {
  MON: [
    {time:"09:00 AM", subject:"Data Structures & Algorithms", prof:"Dr. Arindam Chatterjee", room:"Block A · 204"},
    {time:"11:00 AM", subject:"Full-Stack Web Development Lab", prof:"Dr. Nidhi Sharma", room:"Web Studio · 102"},
    {time:"02:00 PM", subject:"Operating Systems", prof:"Prof. Vivek Sinha", room:"Block A · 208"}
  ],
  TUE: [
    {time:"10:00 AM", subject:"Database Management Systems", prof:"Dr. Nidhi Sharma", room:"Block A · 210"},
    {time:"01:30 PM", subject:"Computer Networks", prof:"Dr. Arindam Chatterjee", room:"Block A · 204"},
    {time:"04:30 PM", subject:"Robotics & IoT Open Lab", prof:"Club Activity", room:"Innovation Lab"}
  ],
  WED: [
    {time:"09:00 AM", subject:"Artificial Intelligence Foundations", prof:"Dr. Arindam Chatterjee", room:"AI Lab · 301"},
    {time:"11:30 AM", subject:"Software Engineering", prof:"Prof. Vivek Sinha", room:"Seminar Hall 2"}
  ],
  THU: [
    {time:"10:00 AM", subject:"Cloud Computing Architecture", prof:"Dr. Nidhi Sharma", room:"Block A · 210"},
    {time:"02:00 PM", subject:"Mini Project Mentorship", prof:"Department Faculty", room:"Innovation Lab"}
  ],
  FRI: [
    {time:"09:30 AM", subject:"Cybersecurity & Cryptography", prof:"Prof. Vivek Sinha", room:"Block A · 105"},
    {time:"02:00 PM", subject:"Aarambh 2.0 Hackathon Sprint", prof:"Innovation Cell", room:"Main Auditorium"}
  ]
};

const quickLinks = [
  {id:"exam", icon:"▤", title:"Exam Seat & Schedule", sub:"Mid-Sem & End-Sem Hall Tickets", body:"<strong>Upcoming Assessment:</strong> Mid-Semester Examinations begin 16 Nov 2026.<br><br><strong>Allocated Room:</strong> Block A, Examination Hall 202 (Seat #C-14).<br><strong>Reporting Time:</strong> 9:30 AM with Student ID Card."},
  {id:"library", icon:"◈", title:"Digital Library Pass", sub:"2 Books Issued · 0 Overdue", body:"<strong>Student Library ID:</strong> LIB-2026-PK09<br><br><strong>Currently Issued:</strong><br>• <em>Clean Code</em> — Due 14 Nov 2026<br>• <em>Designing Data-Intensive Applications</em> — Due 21 Nov 2026"},
  {id:"hostel", icon:"⌂", title:"Campus Mess & Cafeteria", sub:"Today's Menu & Timings", body:"<strong>Today's Special:</strong> Paneer Butter Masala, Jeera Rice, Dal Tadka & Salad.<br><br><strong>Timings:</strong> Breakfast (7:30–9:00 AM) · Lunch (12:30–2:15 PM) · Snacks (5:00 PM) · Dinner (7:45–9:15 PM)."},
  {id:"calendar", icon:"▦", title:"Academic Calendar", sub:"Holidays & Key Semester Dates", body:"<strong>Nov 04–22:</strong> Campus Tech & Cultural Fest Window<br><strong>Nov 16–24:</strong> Mid-Semester Theory Exams<br><strong>Dec 10–18:</strong> Final Project Viva & Exhibitions<br><strong>Dec 22:</strong> Winter Semester Break Starts"}
];

let activeTimetableDay = "MON";

function renderTimetable() {
  const days = ["MON", "TUE", "WED", "THU", "FRI"];
  const dayBox = $("#dayFilters");
  if (dayBox) {
    dayBox.innerHTML = days.map(d =>
      `<button type="button" class="filter-chip ${activeTimetableDay === d ? "active" : ""}" data-day-tab="${d}">${d}</button>`
    ).join("");
  }
  const listBox = $("#timetableList");
  if (listBox) {
    const slots = weeklyTimetable[activeTimetableDay] || [];
    listBox.innerHTML = slots.map(s =>
      `<div class="timetable-item">
        <span class="timetable-time">${s.time}</span>
        <div class="timetable-subject"><strong>${s.subject}</strong><small>${s.prof}</small></div>
        <span class="timetable-room">${s.room}</span>
      </div>`
    ).join("");
  }
}

function renderQuickLinks() {
  const grid = $("#quickLinksGrid");
  if (!grid) return;
  grid.innerHTML = quickLinks.map(q =>
    `<button type="button" class="quick-link-card" data-quick-link="${q.id}">
      <span class="quick-link-icon">${q.icon}</span>
      <strong>${q.title}</strong>
      <small>${q.sub} →</small>
    </button>`
  ).join("");
}

document.addEventListener("click", e => {
  const evDetail = e.target.closest("[data-event-detail]");
  if (evDetail) {
    const ev = events.find(x => x.id === Number(evDetail.dataset.eventDetail));
    if (!ev) return;
    const isReg = registered.has(ev.id);
    openModal(
      ev.title,
      `${ev.category} · ${getCountdownLabel(ev.day, ev.month)}`,
      `<p style="font-size:12px;line-height:1.7;color:#687387;margin-top:8px">${ev.desc}</p>
       <div style="display:grid;gap:7px;margin-top:12px;font-size:12px;color:#4a5568;background:#f7f8fc;padding:12px;border-radius:8px">
         <div><strong>Date & Time:</strong> ${ev.date} at ${ev.time}</div>
         <div><strong>Venue:</strong> ${ev.venue}</div>
         <div><strong>Registration Status:</strong> ${isReg ? "Registered ✓" : "Open for students"}</div>
       </div>`,
      isReg ? "Cancel registration" : "Register now",
      () => {
        if (isReg) {
          registered.delete(ev.id);
          toast("Event registration cancelled.");
        } else {
          registered.add(ev.id);
          toast(`Registered for ${ev.title}!`);
        }
        saveStorage("cc_registered", [...registered]);
        renderEvents();
        renderDashboard();
      },
      "EVENT DETAILS"
    );
    return;
  }

  const dayTab = e.target.closest("[data-day-tab]");
  if (dayTab) {
    activeTimetableDay = dayTab.dataset.dayTab;
    renderTimetable();
    return;
  }

  const qLink = e.target.closest("[data-quick-link]");
  if (qLink) {
    const item = quickLinks.find(x => x.id === qLink.dataset.quickLink);
    if (!item) return;
    openModal(
      item.title,
      item.sub,
      `<div style="margin-top:12px;font-size:12px;line-height:1.7;color:#4a5568;background:#f7f8fc;padding:12px;border-radius:8px">${item.body}</div>`,
      "Close",
      () => {},
      "STUDENT SERVICES"
    );
  }
});

renderTimetable();
renderQuickLinks();
const defaultHelpPosts = [
  {id:101,category:"LOST & FOUND",title:"Found calculator in Seminar Hall 2",desc:"Casio fx-991EX scientific calculator left on row 3 after the Design Thinking Workshop.",author:"Aman (ECE · Sem 3)",contact:"Desk #2, Innovation Lab"},
  {id:102,category:"STUDY GROUP",title:"Need 1 teammate for CodeSprint 2026",desc:"We have 2 backend/UI builders and are looking for someone comfortable with JavaScript or Python.",author:"Riya (CSE · Sem 5)",contact:"Coding Club Lounge · 4 PM"},
  {id:103,category:"ASK SENIORS",title:"Tips for Mid-Sem DSA & OS practicals?",desc:"Looking for previous year lab viva questions and reference notes for Semester 5 CSE.",author:"Karan (CSE · Sem 5)",contact:"Central Library Reading Room"}
];

const customHelpPosts = loadStorage("cc_help_posts", []);
const helpPosts = [...customHelpPosts, ...defaultHelpPosts];
let activeHelpCat = "ALL";

function renderHelpFilters() {
  const cats = ["ALL", "LOST & FOUND", "STUDY GROUP", "ASK SENIORS"];
  const box = $("#helpFilters");
  if (!box) return;
  box.innerHTML = cats.map(c =>
    `<button type="button" class="filter-chip ${activeHelpCat === c ? "active" : ""}" data-help-cat="${c}">${c === "ALL" ? "All" : c}</button>`
  ).join("");
}

function renderHelpboard() {
  const grid = $("#helpboardGrid");
  if (!grid) return;
  const q = currentSearchQuery.toLowerCase();
  const filtered = helpPosts.filter(p => {
    const matchCat = activeHelpCat === "ALL" || p.category === activeHelpCat;
    const matchQ = !q || (p.title + p.desc + p.author + p.category).toLowerCase().includes(q);
    return matchCat && matchQ;
  });
  if (!filtered.length) {
    grid.innerHTML = `<p class="empty-state">No helpboard posts match this filter.</p>`;
    return;
  }
  grid.innerHTML = filtered.map(p => {
    const tagClass = p.category === "LOST & FOUND" ? "lost" : (p.category === "STUDY GROUP" ? "study" : "");
    return `<article class="helpboard-card">
      <div class="helpboard-top">
        <span class="help-tag ${tagClass}">${p.category}</span>
        <small style="font-size:9px;color:#9aa2b1">${p.author}</small>
      </div>
      <strong>${p.title}</strong>
      <p>${p.desc}</p>
      <div class="helpboard-footer">
        <span>📍 ${p.contact}</span>
        <button type="button" data-help-reply="${p.id}">Respond →</button>
      </div>
    </article>`;
  }).join("");
}

function copyTextSafe(text) {
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    return true;
  } catch (e) {
    return false;
  }
}

$("#addHelpPostBtn").addEventListener("click", () => {
  openModal(
    "Post to Campus Helpboard",
    "Report a lost/found item, find study partners, or ask peers a question.",
    `<input class="modal-field" id="helpTitleInput" placeholder="Headline (e.g. Lost Blue Water Bottle in Library)">
     <div class="modal-row">
       <select class="modal-field" id="helpCatInput">
         <option value="LOST & FOUND">LOST & FOUND</option>
         <option value="STUDY GROUP">STUDY GROUP</option>
         <option value="ASK SENIORS">ASK SENIORS</option>
       </select>
       <input class="modal-field" id="helpContactInput" placeholder="Meetup spot / Contact info">
     </div>
     <textarea class="modal-field" id="helpDescInput" rows="3" placeholder="Add helpful details..."></textarea>`,
    "Publish post",
    () => {
      const title = $("#helpTitleInput").value.trim();
      const category = $("#helpCatInput").value;
      const contact = $("#helpContactInput").value.trim() || "Student Activity Center";
      const desc = $("#helpDescInput").value.trim() || "Reach out on campus to connect regarding this post.";
      if (!title) {
        toast("Please enter a post headline.");
        return;
      }
      const newPost = {
        id: Date.now(),
        category,
        title,
        desc,
        author: `${profile.name.split(" ")[0]} (${profile.sem})`,
        contact
      };
      helpPosts.unshift(newPost);
      customHelpPosts.unshift(newPost);
      saveStorage("cc_help_posts", customHelpPosts);
      activeHelpCat = "ALL";
      renderHelpFilters();
      renderHelpboard();
      toast("Your post is now live on the Campus Helpboard!");
    },
    "PEER HELPBOARD"
  );
});

$("#eventPassBtn").addEventListener("click", () => {
  const chosenEvents = events.filter(e => registered.has(e.id));
  const chosenClubs = clubs.filter(c => joinedClubIds.has(c.id));
  const evLines = chosenEvents.length
    ? chosenEvents.map(e => `• ${e.title} (${e.date} · ${e.venue})`).join("<br>")
    : "• No events registered yet";
  const clLines = chosenClubs.length
    ? chosenClubs.map(c => c.name).join(", ")
    : "None joined yet";
  const summaryText = `CAMPUSCONNECT PASS [CC-2026-PK09]\nStudent: ${profile.name} (${profile.dept}, ${profile.sem})\nRegistered Events: ${chosenEvents.map(e => e.title + " on " + e.date).join("; ") || "None"}\nClubs: ${clLines}`;
  openModal(
    "Digital Student Event Pass",
    "Show this pass at campus venues or copy your schedule summary.",
    `<div class="pass-ticket">
       <div class="pass-header">
         <div>
           <strong style="font-size:14px;display:block">${profile.name}</strong>
           <small style="color:#c6b8ff;font-size:10px">${profile.dept} · ${profile.sem}</small>
         </div>
         <span class="pass-id">CC-2026-PK09</span>
       </div>
       <div class="pass-list">
         <strong style="color:#c6b8ff;font-size:10px;letter-spacing:1px">REGISTERED EVENTS (${chosenEvents.length})</strong><br>
         ${evLines}
         <br><br>
         <strong style="color:#c6b8ff;font-size:10px;letter-spacing:1px">ACTIVE CLUBS (${chosenClubs.length})</strong><br>
         ${clLines}
       </div>
     </div>`,
    "Copy pass summary",
    () => {
      copyTextSafe(summaryText);
      toast("Event pass summary copied to clipboard!");
    },
    "VERIFIED STUDENT PASS"
  );
});

document.addEventListener("click", e => {
  const hCat = e.target.closest("[data-help-cat]");
  if (hCat) {
    activeHelpCat = hCat.dataset.helpCat;
    renderHelpFilters();
    renderHelpboard();
    return;
  }

  const hReply = e.target.closest("[data-help-reply]");
  if (hReply) {
    const post = helpPosts.find(p => p.id === Number(hReply.dataset.helpReply));
    if (!post) return;
    openModal(
      `Respond: ${post.title}`,
      `Posted by ${post.author} · ${post.category}`,
      `<p style="font-size:12px;color:#687387;margin-top:6px">${post.desc}</p>
       <input class="modal-field" id="helpReplyInput" placeholder="Write a quick reply or contact note...">`,
      "Send response",
      () => {
        const msg = $("#helpReplyInput").value.trim();
        toast(msg ? `Response sent to ${post.author}!` : `Pinged ${post.author} regarding "${post.title}".`);
      },
      "HELPBOARD RESPONSE"
    );
  }
});

renderHelpFilters();
renderHelpboard();
const campusZones = [
  {id:"zone-a",code:"ZONE A · NORTH",category:"ACADEMIC",name:"Block A & Innovation Lab",venueMatch:"Innovation Lab",hours:"8:00 AM – 8:00 PM",floors:"G: Innovation Lab · 1F: Web Studio · 2F: CSE Classrooms & AI Lab",facilities:"High-Speed Wi-Fi, 3D Printer Bay, Projector Rooms",status:"Open · 2 Active Events"},
  {id:"zone-b",code:"ZONE B · EAST",category:"ACADEMIC",name:"Blocks B, C & Seminar Halls",venueMatch:"Seminar Hall 2",hours:"8:00 AM – 6:00 PM",floors:"G: Seminar Hall 1 & 2 · 1F: Electrical Labs · 2F: ECE & VLSI Studio",facilities:"Smart Podiums, 180-Seat Seminar Hall, Faculty Cabins",status:"Open · Workshop Venue"},
  {id:"zone-lib",code:"ZONE C · CENTER",category:"AMENITIES",name:"Central Library & Digital Hub",venueMatch:"Library",hours:"8:00 AM – 8:00 PM (Digital Lab 24×7)",floors:"G: Circulation & Periodicals · 1F: Quiet Reading Hall · 2F: E-Library",facilities:"50,000+ Volumes, Group Discussion Pods, Printing Kiosk",status:"Open · Quiet Hours Active"},
  {id:"zone-aud",code:"ZONE D · WEST",category:"LABS & VENUES",name:"Main Auditorium & Open Air Theatre",venueMatch:"Auditorium",hours:"9:00 AM – 9:00 PM",floors:"Main Stage (800 Seats) · Open Air Amphitheatre (1,200 Capacity)",facilities:"Dolby Acoustics, Green Rooms, Live Streaming Rig",status:"Open · Aarambh 2.0 Demo Venue"},
  {id:"zone-spo",code:"ZONE E · SOUTH",category:"LABS & VENUES",name:"College Ground & Sports Complex",venueMatch:"College Ground",hours:"6:00 AM – 8:30 PM",floors:"Outdoor Football & Cricket Turf · Indoor Badminton & Gym Arena",facilities:"Floodlights, Equipment Locker, First-Aid Kiosk",status:"Open · Football Practice 4 PM"},
  {id:"zone-hub",code:"ZONE F · GATE 1",category:"AMENITIES",name:"Student Activity Center, Cafeteria & Medical",venueMatch:"Main Gate",hours:"7:30 AM – 9:30 PM (Medical 24×7)",floors:"G: Campus Cafeteria & Helpdesk · 1F: Club Lounges & Music Room",facilities:"24×7 Medical & Ambulance, ATM, Stationery Shop, Club Rooms",status:"Open · All Services Active"}
];

let activeMapCat = "ALL";
let selectedZoneId = "zone-a";

function renderMapFilters() {
  const cats = ["ALL", "ACADEMIC", "LABS & VENUES", "AMENITIES"];
  const box = $("#mapFilters");
  if (!box) return;
  box.innerHTML = cats.map(c =>
    `<button type="button" class="filter-chip ${activeMapCat === c ? "active" : ""}" data-map-cat="${c}">${c === "ALL" ? "All Zones" : c}</button>`
  ).join("");
}

function renderCampusMap() {
  const bp = $("#campusBlueprint");
  const detail = $("#mapZoneDetail");
  if (!bp || !detail) return;
  const q = currentSearchQuery.toLowerCase();
  const visible = campusZones.filter(z => {
    const matchCat = activeMapCat === "ALL" || z.category === activeMapCat;
    const matchQ = !q || (z.name + z.floors + z.facilities + z.code).toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  if (!visible.length) {
    bp.innerHTML = `<p class="empty-state" style="grid-column:1/-1">No campus zones match this filter.</p>`;
    detail.innerHTML = `<p class="empty-state">Select a filter to view building details.</p>`;
    return;
  }

  if (!visible.some(z => z.id === selectedZoneId)) {
    selectedZoneId = visible[0].id;
  }

  bp.innerHTML = visible.map(z =>
    `<button type="button" class="map-pin ${z.id === selectedZoneId ? "active" : ""}" data-zone-id="${z.id}">
      <span class="map-pin-code">${z.code}</span>
      <strong>${z.name}</strong>
      <small>${z.status}</small>
    </button>`
  ).join("");

  const activeZone = campusZones.find(z => z.id === selectedZoneId) || visible[0];
  detail.innerHTML = `
    <div>
      <span class="eyebrow">${activeZone.code} · ${activeZone.category}</span>
      <h3>${activeZone.name}</h3>
      <div class="map-meta-list">
        <div><strong>🕒 Timings:</strong> ${activeZone.hours}</div>
        <div><strong>🏢 Floor Guide:</strong> ${activeZone.floors}</div>
        <div><strong>✦ Key Facilities:</strong> ${activeZone.facilities}</div>
        <div><strong>● Status:</strong> <span style="color:#39a77b;font-weight:700">${activeZone.status}</span></div>
      </div>
    </div>
    <button type="button" class="primary-button" data-zone-events="${activeZone.venueMatch}">Show events near this zone <span>→</span></button>
  `;
}

document.addEventListener("click", e => {
  const mCat = e.target.closest("[data-map-cat]");
  if (mCat) {
    activeMapCat = mCat.dataset.mapCat;
    renderMapFilters();
    renderCampusMap();
    return;
  }

  const zPin = e.target.closest("[data-zone-id]");
  if (zPin) {
    selectedZoneId = zPin.dataset.zoneId;
    renderCampusMap();
    return;
  }

  const zEv = e.target.closest("[data-zone-events]");
  if (zEv) {
    const venueKeyword = zEv.dataset.zoneEvents;
    activeEventCategory = "ALL";
    $("#globalSearch").value = venueKeyword;
    searchAll(venueKeyword);
    document.getElementById("events").scrollIntoView({behavior:"smooth"});
    toast(`Filtered campus items for "${venueKeyword}"`);
  }
});

renderMapFilters();
renderCampusMap();
