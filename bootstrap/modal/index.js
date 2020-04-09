function customDropDownPositioning(dropDown) {
    if (this.label === 'Left-aligned but right aligned when large screen') {
        dropDown.classList.add('dropdown-menu-lg-right');
    }
    else if (this.label === 'Right-aligned but left aligned when large screen') {
        dropDown.classList.add('dropdown-menu-right');
        dropDown.classList.add('dropdown-menu-lg-left');
    }
}

window.onload = function () {
    document.addEventListener('click', function () {
        const target = event.target,
            isButton = event.target.closest('bootstrap-button');

        if (isButton && isButton.getAttribute('data-toggle') === 'modal') {
            const modal = document.querySelector(isButton.getAttribute('data-target')),
                data = isButton.getAttribute('data-whatever'),
                size = isButton.getAttribute('data-size');
				
            if (data) {
                const modalInput = modal.querySelector('.modal-body input');

                if (modalInput) {
                    modalInput.value = data;
                }
            }
			
			 if(size) {
                modal.querySelector('.modal-title').innerHTML = isButton.textContent.trim();
                modal.sizeMode = size;
            }


            if (modal) {
                modal.toggle();
            }
        }
    });

    const modal = document.querySelector('#exampleModal');

    
}