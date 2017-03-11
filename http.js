const http = (function()
{
	let _result;
	let _error;

	const _promise = {
		then: function(callback){
			if(_result !== undefined)
				callback(_result);
		},
		error: function(callback){
			if(_error !== undefined)
				callback(_error);
		}
	};

	return {
		get: function(url){
			const reqObj = new XMLHttpRequest();
			reqObj.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					_result = this.responseText;
					_error = undefined;
				}
				else{
					_error = this.status;
					_result = undefined;
				}
			};
			reqObj.open("GET", url, true);
			reqObj.send();
			return _promise;
		}
	}
})();