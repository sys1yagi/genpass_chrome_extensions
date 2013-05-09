
var GenPass = (function(){
	function GenPass(container){
		this.container = container;
	};
	GenPass.prototype.length = 8;
	GenPass.prototype.count = 8;
	GenPass.prototype.set = [
		//記号
		//'!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','{','|','}','~','[','\\',']','^','_','`',
		//数字
		'0','1','2','3','4','5','6','7','8','9',
		//小文字
		'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
		//大文字
		'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
	];
	GenPass.prototype.gen = function(){
		for(var i = 0; i < GenPass.prototype.count; i++){
			var pass = "";
			for(var j = 0; j < GenPass.prototype.length; j++){
				pass += ""+this.set[Math.floor(Math.random() * this.set.length)];
			}
			this.container.append("<input value='"
				+ pass
				+ "'>"
				+ "</input>"
			);

		}	
	};
	return GenPass;
})();
window.onload = function(){
	var genpass = new GenPass($("#container"));
	genpass.gen();
}

