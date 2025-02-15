document.addEventListener("DOMContentLoaded", function() {
    // جلب كل الأزرار اللي فيها قوائم منسدلة
    document.querySelectorAll(".dropdown-container").forEach(container => {
        const dropdown = container.querySelector(".dropdown");

        container.addEventListener("click", (event) => {
            // إغلاق جميع القوائم الأخرى
            document.querySelectorAll(".dropdown").forEach(d => {
                if (d !== dropdown) {
                    d.style.display = "none";
                }
            });

            // التبديل بين الفتح والغلق للقائمة المحددة
            dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";

            // ضبط z-index لجعل القائمة تظهر فوق كل شيء
            dropdown.style.zIndex = "1000";

            // منع انتقال الضغط للأعلى وإغلاق القائمة مباشرةً
            event.stopPropagation();
        });
    });

    // إغلاق القوائم عند الضغط في أي مكان خارجها
    document.addEventListener("click", () => {
        document.querySelectorAll(".dropdown").forEach(dropdown => {
            dropdown.style.display = "none";
        });
    });
});
