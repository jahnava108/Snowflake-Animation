class Snow{
    constructor(){
        var options = {
            friction: 0.05,
            density: 0.8,
            isStatic: false
        }
        this.body = Bodies.rectangle(random(10,690),10,20,20,options)
        this.snowflakeImg = loadImage("snow4.webp")
        World.add(world,this.body)
    }
    display() {
        var pos = this.body.position
        image(this.snowflakeImg,pos.x,pos.y,20,20)
    }
}
