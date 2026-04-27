/* ================= LOGIN ================= */
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("msg");

    if (!username || !password) {
        msg.innerText = "Enter username and password";
        return;
    }

    const auth = btoa(username + ":" + password);

    fetch("/api/courses", {
        headers: { "Authorization": "Basic " + auth }
    })
        .then(res => {
            if (res.status === 401) throw new Error();
            sessionStorage.setItem("auth", auth);
            window.location.href = "dashboard.html";
        })
        .catch(() => {
            msg.innerText = "Invalid credentials (admin/admin123)";
        });
}

/* ================= LOGOUT ================= */
function logout() {
    sessionStorage.clear();
    window.location.href = "login.html";
}

/* ================= LOAD COURSES ================= */
document.addEventListener("DOMContentLoaded", () => {

    const grid = document.getElementById("courseGrid");
    const auth = sessionStorage.getItem("auth");

    if (grid && !auth) {
        window.location.href = "login.html";
        return;
    }

    if (grid) {
        fetch("/api/courses", {
            headers: { "Authorization": "Basic " + auth }
        })
            .then(res => res.json())
            .then(data => {

                grid.innerHTML = "";

                if (data.length === 0) {
                    document.getElementById("emptyMsg").style.display = "block";
                    return;
                }

                data.forEach(course => {
                    const div = document.createElement("div");
                    div.className = "course";

                    div.innerHTML = `
                    <h4>${course.title}</h4>
                    <p>${course.description}</p>
                    <button onclick="openCourse(${course.id})">Open</button>
                `;

                    grid.appendChild(div);
                });
            });
    }

    loadTopics(); // for topics page
});

/* ================= OPEN COURSE ================= */
function openCourse(id) {
    sessionStorage.setItem("courseId", id);
    window.location.href = "topics.html";
}

/* ================= YOUTUBE FIX ================= */
function getYouTubeId(url) {
    if (!url) return "";

    // watch?v=
    if (url.includes("v=")) {
        return url.split("v=")[1].split("&")[0];
    }

    // youtu.be/
    if (url.includes("youtu.be/")) {
        return url.split("youtu.be/")[1].split("?")[0];
    }

    // embed/
    if (url.includes("embed/")) {
        return url.split("embed/")[1].split("?")[0];
    }

    return "";
}

/* ================= LOAD TOPICS ================= */
function loadTopics() {
    const container = document.getElementById("topics");
    if (!container) return;

    const auth = sessionStorage.getItem("auth");
    const courseId = sessionStorage.getItem("courseId");

    fetch(`/api/topics/${courseId}`, {
        headers: { "Authorization": "Basic " + auth }
    })
        .then(res => res.json())
        .then(data => {

            container.innerHTML = "";

            data.forEach(topic => {

                const videoId = getYouTubeId(topic.youtubeUrl);

                const div = document.createElement("div");

                div.innerHTML = `
                <h3>${topic.title}</h3>

                ${
                    videoId
                        ? `<div style="position:relative;padding-bottom:56.25%;height:0;">
                        <iframe 
                            src="https://www.youtube.com/embed/${videoId}"
                            style="position:absolute;width:100%;height:100%;"
                            frameborder="0"
                            allowfullscreen>
                        </iframe>
                       </div>`
                        : `<p style="color:red;">Invalid YouTube URL</p>`
                }

                <p>${topic.notes || ""}</p>
                <hr>
            `;

                container.appendChild(div);
            });
        });
}

/* ================= SAVE NOTE ================= */
function saveNote() {
    const content = document.getElementById("note").value;
    const auth = sessionStorage.getItem("auth");

    if (!content.trim()) {
        alert("Write something first!");
        return;
    }

    fetch("/api/notepad", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic " + auth
        },
        body: JSON.stringify({ content })
    })
        .then(() => {
            alert("Note saved");
            document.getElementById("note").value = "";
        });
}

/* ================= SEARCH ================= */
function filterCourses() {
    const search = document.getElementById("search").value.toLowerCase();
    const courses = document.querySelectorAll(".course");

    let visible = 0;

    courses.forEach(c => {
        if (c.innerText.toLowerCase().includes(search)) {
            c.style.display = "block";
            visible++;
        } else {
            c.style.display = "none";
        }
    });

    document.getElementById("emptyMsg").style.display =
        visible === 0 ? "block" : "none";
}