function updateProfile() {
    var name = document.getElementById("nameInput").value;
    var bio = document.getElementById("bioInput").value;

    if (name !== "") {
        document.getElementById("displayName").innerText = name;
    }

    if (bio !== "") {
        document.getElementById("displayBio").innerText = bio;
    }
}
