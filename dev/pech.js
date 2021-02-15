IMPORT("DungeonAPI");
var pech = new DungeonAPI("pech.json");
pech.setPrototype({
 isSetBlock: function(x, y, z, id, data, identification) {
  return true;
 }
});
