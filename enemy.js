class Enemy {
    constructor(_size, _x, _y,_level=10,_color) {
        this.size = _size;
        this.x = _x;
        this.y = _y;
        this.speed = 1;
        this.direction = "right";
        this.level = _level;
        this.color = _color;
        this.img = new Image();
    }

    // Vẽ trên thẻ canvas html
    draw(canvas) {
        let pen = canvas.getContext("2d");
        pen.beginPath();
        pen.rect(this.x, this.y, this.size, this.size);
        pen.fillStyle = this.color;
        pen.fill();
        pen.closePath();
    }

    checkWall(canvas) {
        if (this.x > canvas.width) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = canvas.width;
        }
        if (this.y > canvas.height) {
            this.y = 0
        } else if (this.y < 0) {
            this.y = canvas.height;
        }
    }

    move() {
        this.direction = this.randomDirection();
        switch (this.direction) {
            case "up":
                this.y -= this.speed;
                break;
            case "down":
                this.y += this.speed;
                break;
            case "left":
                this.x -= this.speed;
                break;
            case "right":
                this.x += this.speed;
        }

    }
    randomDirection(){
        // let curs = [this.direction,this.direction,this.direction,this.direction,this.direction];
        let curs = new Array(this.level*100).fill(this.direction);
        let dirs = ['up','down','right','left'];
        dirs = dirs.concat(curs);
        let rand = Math.floor(Math.random()*dirs.length);
        return dirs[rand];
    }
showImg(canvas){
        this.img.src = 'ghost.png';
        let pen = canvas.getContext("2d");
        pen.drawImage(this.img,this.x,this.y,this.size,this.size);

}
}