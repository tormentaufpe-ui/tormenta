let prevScrollpos = window.pageYOffset;
const navBar = document.querySelector('nav');
 <script>
        let prevScrollpos = window.pageYOffset;
        const navBar = document.querySelector('nav');
        const navHeight = navBar.offsetHeight;

        window.onscroll = function() {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                navBar.style.top = "0";
            } else {
                navBar.style.top = `-${navHeight}px`;
            }
            prevScrollpos = currentScrollPos;
        }
    </script>