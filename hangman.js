
class Hangman {
    constructor(word, ctx) {
        this.ctx = ctx;
        this.word = word;
        this.copyword = word;
        this.underscores = "";
        this.gameOver = false;
        this.guessed = new Array(this.word.length);
        for (let i = 0; i < this.word.length; i++) {
            this.display += "  ";
            this.underscores += "_ ";
            this.guessed[i] = false;
        }
        this.guessesWrong = 0;
        //this.guessesLeft = ;
        this.ctx.font = '50px arial';
        //this.ctx.strokeText("b a n a n a", 150, 250);
        this.ctx.strokeText(this.underscores, 150, 250);
        //an array that holds functions
        //we will use them to draw
        this.drawFunctions = [this.drawBase, this.drawRope, this.drawHead, this.drawBody,
            this.drawLeg1, this.drawLeg2, this.drawArms]; 
    }

    //improvements:
    //stop allowing guesses when the games over

    //more user interaction


    guess(letter) {
        if (this.gameOver) return;

        if (this.word.includes(letter)) {
            console.log("contains");
            let s = "";
            for (let c of this.word) {
                if (c === letter) {
                    s += letter + " ";
                } else {
                    s += "   ";
                }
            }
            this.ctx.strokeText(s, 150, 250);
            this.copyword = this.copyword.replaceAll(letter, "");
            if (this.copyword.length === 0) {
                ctx.strokeText("YOU WIN!!!", 150, 350)
                this.gameOver = true;
            }
        } else {
            
            //the first thing we draw is at 9 guess left
            //call the function inside our drawFunctions array
            this.ctx.beginPath();
            this.drawFunctions[this.guessesWrong](this.ctx);
            this.guessesWrong++;
            if (this.guessesWrong >= 7) {
                this.gameOver = true;
            }
            this.ctx.stroke();
            console.log("not contains");
        }

        
    }

    //what do we want to name them?
    drawBase(ctx) {
        //BASE
        ctx.moveTo(200, 200);
        ctx.lineTo(100, 200);

        //BEAM
        ctx.lineTo(100, 50);

        //HANGING BEAM
        ctx.lineTo(175, 50);
    }

    drawRope(ctx) {
        //ROPE
        ctx.moveTo(175, 50);
        ctx.lineTo(175, 60);
    }
    drawHead(ctx) {
        //HEAD
        //center
        //x   y  rad   start radians    ending radians
        ctx.arc(175, 70, 10, 1.5 * Math.PI, 3.5 * Math.PI);
    }

    drawBody(ctx) {
        //BODY
        ctx.moveTo(175, 80);
        ctx.lineTo(175, 125);
    }
    
    drawLeg1(ctx) {
        //LEG1
        ctx.moveTo(175, 125);
        ctx.lineTo(190, 140);
    }

    drawLeg2(ctx) {
        //LEG2
        ctx.moveTo(175, 125);
        ctx.lineTo(160, 140);
    }


    drawArms(ctx) {
        //Arms
        ctx.moveTo(190, 100);
        ctx.lineTo(160, 100);

        ctx.strokeText("YOU LOSE", 150, 350);
        
    }

}
