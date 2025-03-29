function loadProject(type) {
    let content = document.getElementById('project-content');
    content.innerHTML = "";

    if (type === "research") {
        content.innerHTML = `
            <h2>งานวิจัย</h2>
            <div class="project-item">
                <img src="img/research1.jpg" alt="งานวิจัย">
                <p><a href="#">งานวิจัยที่ 1</a></p>
            </div>
        `;
    } else if (type === "app") {
        content.innerHTML = `
            <h2>งานพัฒนาแอป</h2>
            <div class="project-item">
                <img src="img/app1.jpg" alt="แอปพลิเคชัน">
                <p><a href="#">แอปพลิเคชันที่ 1</a></p>
            </div>
        `;
    } else if (type === "edit") {
        content.innerHTML = `
            <h2>งานตัดต่อ</h2>
            <div class="project-item">
                <img src="img/edit1.jpg" alt="งานตัดต่อ">
                <p><a href="#">วิดีโอตัดต่อที่ 1</a></p>
            </div>
        `;
    }
}
