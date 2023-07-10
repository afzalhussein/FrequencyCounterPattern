function validAnagram(src, target){
  // add whatever parameters you deem necessary - good luck!
  if (src.split("").sort().join("")==target.split("").sort().join("")) return true;
  else return false;
}