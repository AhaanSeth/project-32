class BoxPink {

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        //NameSpacing(renaming width and height)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
     //NameSpacing(renaming position of Ground)
        var pos = this.body.position;
        strokeWeight(2);
        fill("pink");
        rect(pos.x, pos.y, this.width, this.height);

        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility)
        rect(999,999,this.width, this.height);
        pop();


    }
}

score()
    if(this.Visibility<0 && this.Visibility >-105){
     
       score++;
    }