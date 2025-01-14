document.addEventListener('DOMContentLoaded', function () {

    var dropdownBtns = document.querySelectorAll('.dropdown-btn');


    dropdownBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {

            this.classList.toggle('active');


            var dropdownContent = this.nextElementSibling;


            document.querySelectorAll('.dropdown-content').forEach(function (content) {

                if (content !== dropdownContent) {
                    content.style.display = 'none';
                }
            });


            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            } else {
                dropdownContent.style.display = 'block';
            }
        });
    });
});
