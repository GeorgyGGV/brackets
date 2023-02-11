module.exports = function check(str, bracketsConfig) {
  for(let i=0; i < bracketsConfig.length; i++) {
    //console.log( bracketsConfig[i].join('') ); 
  if(str.indexOf(bracketsConfig[i].join('')) > -1){
          while(str.indexOf(bracketsConfig[i].join('')) > -1){
          str = str.replace(bracketsConfig[i].join('') , '');
          i = 0;
          } 
  }
} 
if(str == ''){
  return true;
} else return false;
}
