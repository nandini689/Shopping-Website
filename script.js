document.addEventListener('DOMContentLoaded', function () {
    const optionBoxes = document.querySelectorAll('.option-box');
    const totalPriceDisplay = document.querySelector('.total-price strong');

    const prices = {
        option1: '$10.00 USD',
        option2: '$18.00 USD',
        option3: '$24.00 USD',
    };

    function updateSelection(selectedBox) {
        optionBoxes.forEach(box => {
            const radio = box.querySelector('.option-radio');
            const isSelected = box === selectedBox;

            radio.checked = isSelected;
            box.classList.toggle('expanded', isSelected);
        });

        const selectedId = selectedBox.dataset.option;
        totalPriceDisplay.textContent = prices[selectedId];
    }

    optionBoxes.forEach(box => {
        box.addEventListener('click', function(event) {
            if (event.target.tagName.toLowerCase() !== 'select') {
                updateSelection(this);
            }
        });
    });

    const initialSelected = document.querySelector('.option-box.expanded');
    if (initialSelected) {
        updateSelection(initialSelected);
    }
});

