 
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

        this.ctx.font = '50px arial';

        this.ctx.strokeText(this.underscores, 150, 250);

        this.drawFunctions = [this.drawBase, this.drawRope, this.drawHead, this.drawBody,
        this.drawLeg1, this.drawLeg2, this.drawArms];
    }



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


            this.ctx.beginPath();
            this.drawFunctions[this.guessesWrong](this.ctx);
            this.guessesWrong++;
            if (this.guessesWrong >= 7) {
                this.gameOver = true;
                this.ctx.strokeText(this.word, 250, 450);
            }
            this.ctx.stroke();
            console.log("not contains");
        }


    }

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
