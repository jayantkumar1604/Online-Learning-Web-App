/* ================= LOGIN ================= */
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("msg");

    if (!username || !password) {
        msg.innerText = "Please enter username and password";
        return;
    }

    const auth = btoa(username + ":" + password);

    fetch("/api/courses", {
        method: "GET",
        headers: {
            "Authorization": "Basic " + auth
        }
    })
        .then(res => {
            if (res.status === 401) {
                throw new Error("Unauthorized");
            }
            return res.json();
        })
        .then(() => {
            sessionStorage.setItem("auth", auth);
            window.location.href = "dashboard.html";
        })
        .catch(() => {
            msg.innerText = "Invalid username or password";
        });
}

/* ================= LOGOUT ================= */
function logout() {
    sessionStorage.clear();
    window.location.href = "login.html";
}

/* ================= LOAD COURSES ================= */
document.addEventListener("DOMContentLoaded", () => {
    const auth = sessionStorage.getItem("auth");
    const grid = document.getElementById("courseGrid");

    if (grid && !auth) {
        window.location.href = "login.html";
        return;
    }

    if (grid && auth) {
        fetch("/api/courses", {
            method: "GET",
            headers: {
                "Authorization": "Basic " + auth
            }
        })
            .then(res => {
                if (res.status === 401) {
                    throw new Error("Unauthorized");
                }
                return res.json();
            })
            .then(data => {
                grid.innerHTML = "";
                data.forEach(course => {
                    const div = document.createElement("div");
                    div.className = "course";
                    div.innerHTML = `
                    <h4>${course.title}</h4>
                    <p>${course.description}</p>
                `;
                    grid.appendChild(div);
                });
            })
            .catch(() => {
                alert("Session expired. Please login again.");
                logout();
            });
    }
});
