document.addEventListener('DOMContentLoaded', function () {
    const filterBtn = document.querySelector('.filter-btn');
    const extendedFilters = document.querySelectorAll('.extended-filter');

    if (filterBtn) {
        filterBtn.addEventListener('click', function () {
            const isExpanded = document.querySelector('.extended-filter').classList.contains('show');
            const hiddenFilters = document.querySelectorAll('.filter-hide');
            const extendedFilters = document.querySelectorAll('.extended-filter');

            if (isExpanded) {
                hiddenFilters.forEach(filter => {
                    filter.classList.remove('show');
                });
                extendedFilters.forEach(filter => {
                    filter.classList.remove('show');
                });
            } else {
                hiddenFilters.forEach(filter => {
                    filter.classList.add('show');
                });
                extendedFilters.forEach(filter => {
                    filter.classList.add('show');
                });
            }

            // Update button text
            if (isExpanded) {
                this.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
                    </svg>
                    More Filters
                `;
            } else {
                this.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
                    </svg>
                    Less Filters
                `;
            }
        });
    }

    // Update the clearFilters function to clear all filters
    window.clearFilters = function () {
        // Clear all dropdowns
        const dropdowns = document.querySelectorAll('.dropdown button');
        dropdowns.forEach(dropdown => {
            const defaultText = dropdown.dataset.defaultText || dropdown.textContent.trim();
            dropdown.textContent = defaultText;
        });

        // Clear all hidden inputs
        const inputs = document.querySelectorAll('input[type="hidden"]');
        inputs.forEach(input => {
            input.value = '';
        });

        // Reset Model and Variant dropdowns
        const modelDropdown = document.getElementById('modelDropdown');
        const variantDropdown = document.getElementById('variantDropdown');
        if (modelDropdown) {
            modelDropdown.disabled = true;
            modelDropdown.textContent = 'Select Model';
        }
        if (variantDropdown) {
            variantDropdown.disabled = true;
            variantDropdown.textContent = 'Select Variant';
        }
    };
});