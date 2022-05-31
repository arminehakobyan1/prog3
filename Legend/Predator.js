class Predator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
        this.energy = 12;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(ch) {
        this.getNewCoordinates()
        var found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
     move() {
        
        let emptyCell1 = this.chooseCell(1) 
        let emptyCell0 = this.chooseCell(0) 

        let arr = emptyCell0.concat(emptyCell1) 

        let newCell = arr[Math.floor(Math.random() * arr.length)]; 
        if (newCell && this.energy > 0) {
            this.energy--;
            if (newCell == 0) {
                let newX = newCell[0];
                let newY = newCell[1];
                matrix[newY][newX] = 3
                matrix[this.y][this.x] = 0;
                this.x = newX
                this.y = newY
            } else if (newCell == 1) {
                let newX = newCell[0];
                let newY = newCell[1];
                matrix[newY][newX] = 3
                matrix[this.y][this.x] = 1;
                this.x = newX
                this.y = newY
            }
        }
        else if (this.energy <= 0) {
            this.die();
        }
    }
    mul() {
        let emptyCell= this.chooseCell(0)
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)];
        if (newCell && this.energy >= 15) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 3;
            let newPredator = new Predator(newX, newY)
            predatorArr.push(newPredator);
            this.energy -= 4;
        }
        else {
            this.eat();
        }
    }
    eat() {
        let emptyCell0 = this.chooseCell(2)
        let emptyCell = this.chooseCell(4).concat(emptyCell0)
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)];
        if (newCell) {
            this.energy += 2
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            if(newCell == 2){
            for (let i = 0; i < grassEaterArr.length; i++) {
                if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                    grassEaterArr.splice(i, 1);
                }
            }
        }
        if(newCell == 4){
            for (let i = 0; i < humanArr.length; i++) {
                if (humanArr[i].x == this.x && humanArr[i].y == this.y) {
                    humanArr.splice(i, 1);
                }
            }
        }
            this.x = newX
            this.y = newY
        }
        else {
            this.move();
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (let i = 0; i < predatorArr.length; i++) {
            if (predatorArr[i].x == this.x && predatorArr[i].y == this.y) {
                predatorArr.splice(i, 1);
            }
        }

    }
}