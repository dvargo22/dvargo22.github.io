document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".table-wrapper").forEach(wrapper => {
        let table = wrapper.querySelector("table");
        if (table) {
            wrapper.replaceWith(table); // Remove the wrapper
        }
    });
});
