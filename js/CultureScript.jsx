    //Get Width
    function bodyWidth() {

        const width = window.innerWidth || document.documentElement.clientWidth ||
            document.body.clientWidth;

        return width;
    };

    //Get Width
    function bodyHeight() {
        const height = window.innerHeight || document.documentElement.clientHeight ||
            document.body.clientHeight;

        return height;
    };

    //Find Current Width of window Globale

    const width = bodyWidth();
    //Find Current Height of window
    const height = bodyHeight();


    //Quick Size of the badge on load of the

    function SizeBadge() {

        //Find Current width of window
        if (width < 360) {
            var cultureBadge = document.getElementById('cultureBadge');
            cultureBadge.style.width = "80px";
        }


    };



    //Java Script is modular you can build libaries in this thing blank AF
    function detectSize() {


        //Find Current width of window
        if (width < 360) {
            window.location.href = "cultureSmallCss-BBBritish.html";
        }

    };