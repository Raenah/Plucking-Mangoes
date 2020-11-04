class Throw {
    constructor (bodyA,pointB) {
     var option = {
         bodyA:bodyA,
         pointB:pointB,
         'stiffness':0.01,
         'length':10
     }
     this.pointB=pointB
     this.throw=Matter.Constraint.create(option)
     World.add(world,this.throw)
    }
}
