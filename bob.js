class Bob{
    constructor (x,y,r){
        var options= {
            isStatic: false,
            restitution: 0.3 ,
            friction: 0.2,
            density: 0.8
        }
        this.body=Bodies.circle(x,y,r,options)
        this.r=r
        
        World.add(world,this.body)
    }
    display () {
        var pos=this.body.position
        fill("pink")
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.r,this.r)
    
    }
}