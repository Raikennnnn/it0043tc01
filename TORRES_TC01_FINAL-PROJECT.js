document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready!');

    const buttons = document.querySelectorAll('.filters button');
    const projects = document.querySelectorAll('.projects .project');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            projects.forEach(project => {
                if (filter === 'all' || project.classList.contains(filter)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});
