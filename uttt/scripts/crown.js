function crownChange() {
    if(p1.winPoints > p2.winPoints) {
        crown.style.display = 'block';
        crown.style.transform = 'translateX(-5px)';
        crown.style.right = null;
        crown.style.left = 0;
    }
    else if(p2.winPoints > p1.winPoints) {
        crown.style.display = 'block';
        crown.style.transform = 'translateX(5px)';
        crown.style.left = null;
        crown.style.right = 0;
    }
    else crown.style.display = 'none';
}