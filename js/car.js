AFRAME.registerComponent("car", {
    schema:{
        model_obj: {type:"string", default:"./assets/Car/tinker.obj"},
        model_mtl: {type:"string", default:"./assets/Car/obj.mtl"},
        clicks: {type:"number", default: 0}
    },
    init: function(){
        this.el.setAttribute("position", {x: 0, y: 0, z: 0})
        this.el.setAttribute("rotation", {x: -90, y: 0, z: 0})
        
        this.el.setAttribute("obj-model", {
            obj: this.data.model_obj,
            mtl: this.data.model_mtl
        });

        var scale = .5 + " "
        this.el.setAttribute("scale", scale+scale+scale)
    },
    update: function(){
        window.document.addEventListener("click", (e)=>{
            this.data.clicks+=1
            const {clicks} = this.data

            const rotation = {}
            rotation.x = -90
            rotation.z = 0

            if (clicks%8 === 0){
                rotation.y = 0
            } else if (clicks%8 === 1) {
                rotation.y = 45
            } else if (clicks%8 === 2) {
                rotation.y = 90
            } else if (clicks%8 === 3) {
                rotation.y = 135
            } else if (clicks%8 === 4) {
                rotation.y = 180
            } else if (clicks%8 === 5) {
                rotation.y = 225
            } else if (clicks%8 === 6) {
                rotation.y = 270
            } else if (clicks%8 === 7) {
                rotation.y = 315
            }

            //console.log(clicks)
            this.el.setAttribute("rotation", rotation)
        })  
    }
})