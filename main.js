/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/



// file: pech.js

/*
 * 
 *
 *
*Block.createBlockWithRotation("dough", [
*	{name: "dough", texture: [], inCreative: true}
*]);

*/

IDRegistry.genBlockID("dough");
Block.createBlockWithRotation("dough", [
{    name: "grass", 
    texture: [
        ["dirt", 0], // bottom
        ["r", 0], // top 
        ["grassa", 0], // back
        ["grassa", 0], // front
        ["grassa", 0], // left
        ["grassa", 0]  // right 
    ], 
    inCreative: true //(добавлять ли данную вариацию блока в креатив)
}
]);




TileEntity.registerPrototype(BlockID.dough, {
tick(){
  
  

let Pat = [
[0, 1, 0],
[0, -1, 0],
[1, 0, 1],
[-1, 0, -1],
[0, 1, 1],
[1, 1, 0],
[-1 , 1, -1],
]
if(World.getThreadTime()%60==0){
for(let i in Pat){
let coord = Pat[i];
if(this.blockSource.getBlockID(this.x + coord[0], this.y + coord[1], this.z + coord[2]) !== 45){return};
}
if(this.blockSource.getBlockID(this.x, this.y - 2, this.z) == 51){return};
this.blockSource.setBlock(this.z, this.y, this.z, 80, 0);
}.
  
}});
/*
000
000
000

000
000
000

0х0
000
000

World.getBlockID(this.x + 1, this.y, this.z + 1) == 45*/

var render = new ICRender.Model();
var model = BlockRenderer.createModel();
 model.addBox(8/16, 8/16, 8/16, 8/16, 8/16, 8/16, [["ttt", 0]]); //undefined
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.dough, 0, render);



/*
World.getBlockID(this.x, this.y + 1, this.z) == 45
World.getBlockID(this.x, this.y - 1, this.z) == 45
World.getBlockID(this.x, this.y + 1, this.z + 1) == 45
World.getBlockID(this.x, this.y + 1, this.z - 1) == 45
World.getBlockID(this.x + 1, this.y + 1, this.z + 1) == 45
World.getBlockID(this.x - 1, this.y + 1, this.z + 1) == 45
World.getBlockID(this.x + 1, this.y + 1, this.z) == 45
World.getBlockID(this.x - 1, this.y + 1, this.z) == 45
World.getBlockID(this.x - 1, this.y + 1, this.z - 1) == 45
World.getBlockID(this.x + 1, this.y + 1, this.z - 1) == 45
/*

111
111
111

000
000
000

000
010
000
*/




