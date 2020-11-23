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
  
  
if(
  
  
  World.getBlockID(this.x, this.y + 1, this.z) == 45 && World.getBlockID(this.x, this.y - 1, this.z) == 45 && World.getBlockID(this.x + 1, this.y, this.z + 1) == 45 && World.getBlockID(this.x - 1, this.y, this.z - 1) == 45 && World.getBlockID(this.x, this.y + 1, this.z + 1) == 45 && World.getBlockID(this.x + 1, this.y + 1, this.z) == 45 && World.getBlockID(this.x - 1, this.y + 1, this.z - 1) && World.getBlockID(this.x, this.y - 2, this.z) == 51){
  if(World.getThreadTime()%60 == 0){
World.setBlock(this.x, this.y, this.z, 80, 0)}
    }
}
}); 