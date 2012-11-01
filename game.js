//グローバル
var several = Math.pow(2, 14) * 100;//配列の長さ
var count = 100;//試行回数
document.write("アルゴリズムとデータ構造#5<br>");

//シャッフル
Array.prototype.shuffle = function(){
  var i = this.length;
  while(i){
    var j = Math.floor(Math.random() * i);
    var t = this[--i];
    this[i] = this[j];
    this[j] = t;
  }
  return this;
}

//リニアサーチ
function linearsearch(arr){
  var start = +new Date();//開始時間の取得
  var hit = 1;//探したい値
  for(var i = 0; i < arr.length; i++){
    if(hit == arr[i])break;
  }
  var end = +new Date() - start;//経過時間の取得
  return end;
}



//メイン
document.write("サーチする回数：" + count + "回<br>配列の長さ" + several + "<br>");
//配列に代入
var arr = new Array(several);
for(var i = 0; i < arr.length; i++){
  arr[i] = i;
}
var date = new Date();
for(var i = 0; i < count; i++){
  arr.shuffle();
  var end = linearsearch(arr);
  document.write(end + ",");
}