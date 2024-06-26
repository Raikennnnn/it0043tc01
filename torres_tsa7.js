document.addEventListener('DOMContentLoaded', () => {
    const gapInput = document.getElementById('gap');
    const directionLabels = document.querySelectorAll('.control-group:nth-of-type(1) .violet-label');
    const justifyContentLabels = document.querySelectorAll('.control-group:nth-of-type(2) .violet-label');
    const alignItemsLabels = document.querySelectorAll('.control-group:nth-of-type(3) .violet-label');
    const growInputs = document.querySelectorAll('input[type="number"]');
    const resetButton = document.getElementById('reset-grow');
    const growAllButton = document.getElementById('grow-all');
    const resetFlexboxButton = document.getElementById('reset-flexbox');
    const flexContainer = document.getElementById('flex-container');

    let flexDirection = 'row';
    let justifyContent = 'flex-start';
    let alignItems = 'flex-start';

    function updateFlexbox() {
        const gap = gapInput.value + 'px';

        flexContainer.style.gap = gap;
        flexContainer.style.flexDirection = flexDirection;
        flexContainer.style.justifyContent = justifyContent;
        flexContainer.style.alignItems = alignItems;

        document.getElementById('item1').style.flexGrow = document.getElementById('grow1').value;
        document.getElementById('item2').style.flexGrow = document.getElementById('grow2').value;
        document.getElementById('item3').style.flexGrow = document.getElementById('grow3').value;
    }

    gapInput.addEventListener('input', updateFlexbox);

    directionLabels.forEach(label => {
        label.addEventListener('click', () => {
            directionLabels.forEach(lbl => lbl.classList.remove('active'));
            label.classList.add('active');
            flexDirection = label.dataset.value;
            updateFlexbox();
        });
    });

    justifyContentLabels.forEach(label => {
        label.addEventListener('click', () => {
            justifyContentLabels.forEach(lbl => lbl.classList.remove('active'));
            label.classList.add('active');
            justifyContent = label.dataset.value;
            updateFlexbox();
        });
    });

    alignItemsLabels.forEach(label => {
        label.addEventListener('click', () => {
            alignItemsLabels.forEach(lbl => lbl.classList.remove('active'));
            label.classList.add('active');
            alignItems = label.dataset.value;
            updateFlexbox();
        });
    });

    growInputs.forEach(input => input.addEventListener('input', updateFlexbox));

    resetButton.addEventListener('click', () => {
        document.getElementById('grow1').value = 0;
        document.getElementById('grow2').value = 0;
        document.getElementById('grow3').value = 0;
        updateFlexbox();
    });

    growAllButton.addEventListener('click', () => {
        document.getElementById('grow1').value = 1;
        document.getElementById('grow2').value = 1;
        document.getElementById('grow3').value = 1;
        updateFlexbox();
    });

    resetFlexboxButton.addEventListener('click', () => {
        gapInput.value = 0;
        flexDirection = 'row';
        justifyContent = 'flex-start';
        alignItems = 'flex-start';
        document.getElementById('grow1').value = 0;
        document.getElementById('grow2').value = 0;
        document.getElementById('grow3').value = 0;
        directionLabels.forEach(lbl => lbl.classList.remove('active'));
        justifyContentLabels.forEach(lbl => lbl.classList.remove('active'));
        alignItemsLabels.forEach(lbl => lbl.classList.remove('active'));
        document.querySelector('.control-group:nth-of-type(1) .violet-label[data-value="row"]').classList.add('active');
        document.querySelector('.control-group:nth-of-type(2) .violet-label[data-value="flex-start"]').classList.add('active');
        document.querySelector('.control-group:nth-of-type(3) .violet-label[data-value="flex-start"]').classList.add('active');
        updateFlexbox();
    });

    document.querySelector('.control-group:nth-of-type(1) .violet-label[data-value="row"]').classList.add('active');
    document.querySelector('.control-group:nth-of-type(2) .violet-label[data-value="flex-start"]').classList.add('active');
    document.querySelector('.control-group:nth-of-type(3) .violet-label[data-value="flex-start"]').classList.add('active');
    updateFlexbox();
});
