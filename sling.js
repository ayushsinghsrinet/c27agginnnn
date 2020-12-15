class sling{
    constructor(bodyA,pointB){
        var ok={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.1,
            length:300
        }
        this.sling=Constraint.create(ok)
        World.add(world,this.sling)
    }
    display(){
        fill(0)
        var posa=this.sling.bodyA.position
        var posb=this.sling.pointB
        line(posa.x,posa.y,posb.x,posb.y)
    }
}