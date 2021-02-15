IDRegistry.genBlockID("Tort1");
Block.createBlock("Tort1", [{name: "tort", texture:[["tort", 0]], inCreative: true
}]);
IDRegistry.genBlockID("dough");
Block.createBlock("dough", [ {name: "dough", texture: [["dough", 0]], inCreative: true} ]);
TileEntity.registerPrototype(BlockID.dough, {
tick(){
  if(World.getBlockID(this.x, this.y - 1, this.x) == 45 , World.getBlockID(this.x, this.y - 2, this.z) == 51){
  if(World.getThreadTime()%100 == 0)
  
{
     World.setBlock(this.x, this.y, this.z, BlockID.Tort1, 0)
}
  }}
  });

