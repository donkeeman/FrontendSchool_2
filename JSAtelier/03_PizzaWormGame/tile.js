class Tile {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.posX = this.col * tileSize;
        this.posY = this.row * tileSize;
    }

    renderTile(bg = "green") {
        ctx.fillStyle = bg;
        ctx.fillRect(this.posX, this.posY, tileSize, tileSize);
    }

    renderImg(bg = "./pizza.png") {
        // img 요소를 생성 후, 캔버스에 그리기
        const image = new Image(tileSize, tileSize);
        image.src = bg;
        image.addEventListener("load", () => {
            ctxBg.drawImage(image, this.posX, this.posY, tileSize, tileSize);
        });
    }

    collisionCheck(target) {
        return this.col === target.col && this.row === target.row;
    }
}
