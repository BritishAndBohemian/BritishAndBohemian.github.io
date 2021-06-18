function spin() {

    // For Loop Like C++(var i = 0;i<360;i++){}
    var i = 0;

    do {
        document.getElementById('BBButtonEnter').style.transform = 'rotate('i'deg)';
        i++;
    }while(i < 360)
}