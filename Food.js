class Food{
    constructor(_size, _x,_y){
        this.size = _size;
        this.x = _x;
        this.y = _y;
        this.score = 3;
        this.img = new Image();
    }
    draw(canvas){
        let pen = canvas.getContext("2d");
        pen.beginPath();
        pen.rect(this.x,this.y,this.size,this.size);
        pen.fillStyle = "red";
        pen.fill();
        pen.closePath();
    }
    showImage(canvas){
        this.img.src = 'coin2.png';
        let pen = canvas.getContext("2d");
        pen.drawImage(this.img,this.x,this.y,this.size,this.size);
    }
}