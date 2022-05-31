class Regulator{
    check(){
        for(let i = 0; i < grassArr.length; i++){
            if(grassArr.length < 10){
                let j = 0;
                while(j < 10){
                    var y = Math.floor(Math.random() * matrix.length) 
                    var x = Math.floor(Math.random() * matrix[y].length)
                    if (matrix[y][x] == 0) { 
                        matrix[y][x] = 1
                        let newGrass = new Grass(x, y)
                        grassArr.push(newGrass)
                        j++
                    } 
                }
            }
        }
        for(let i = 0; i < grassEaterArr.length; i++){
            if(grassEaterArr.length < 10){
                let j = 0;
                while(j < 10){
                    var y = Math.floor(Math.random() * matrix.length) 
                    var x = Math.floor(Math.random() * matrix[y].length)
                    if (matrix[y][x] == 0) { 
                        matrix[y][x] = 2
                        let newGrassEater = new GrassEater(x, y)
                        grassEaterArr.push(newGrassEater)
                        j++
                    } 
                }
            }
        }
        for(let i = 0; i < predatorArr.length; i++){
            if(predatorArr.length < 10){
                let j = 0;
                while(j < 10){
                    var y = Math.floor(Math.random() * matrix.length) 
                    var x = Math.floor(Math.random() * matrix[y].length)
                    if (matrix[y][x] == 0) { 
                        matrix[y][x] = 3
                        let newPredator = new Predator(x, y)
                        predatorArr.push(newPredator)
                        j++
                    } 
                }
            }
        }
         for(let i = 0; i < humanArr.length; i++){
            if(humanArr.length < 10){
                let j = 0;
                while(j < 10){
                    var y = Math.floor(Math.random() * matrix.length) 
                    var x = Math.floor(Math.random() * matrix[y].length) 
                    if (matrix[y][x] == 0) { 
                        matrix[y][x] = 4
                        let newHuman = new Human(x, y)
                        humanArr.push(newHuman)
                        j++
                    } 
                }
            }
        }
        for(let i = 0; i < homeArr.length; i++){
            if(homeArr.length > 150){
                let j = 0;
                while(j < 20){
                    homeArr.splice(homeArr.length-1, 1)
                    j++
                }
            }
        }
    }
}