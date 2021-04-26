class Game {
    constructor(_x,_y,_size, _color) {
        this.x = _x;
        this.y = _y;
        this.size = _size;
        this.color = _color

    }
    draw(canvas){
        let pen = canvas.getContext("2d");
        pen.beginPath();
        pen.rect(this.x,this.y,this.size,this.size);
        pen.font = "50px Arial";
        pen.fillText('GAME OVER', 60, 240);
        pen.fillStyle = this.color;
        pen.fill();
        pen.closePath();
    }

}