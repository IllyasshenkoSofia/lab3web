window.addEventListener('load', function () {
 document.write ('<style>\n')
		document.write ('body {text-align: center; font:21px Tahoma; margin: 15px 15px 15px 15px; overflow-x: scroll}\n');
		document.write ('</style>\n');
		document.write ('<body>\n');
    var arr = [
        {value: 100, type: 'USD'},
        {value: 215, type: 'EUR'},
        {value: 7, type: 'EUR'},	
        {value: 99, type: 'USD'},
        {value: 354, type: 'USD'},
        {value: 12, type: 'EUR'},
        {value: 77, type: 'USD'},
    ];
	var s=0;
	for( i =0; i<arr.length; i++){
        if(arr[i].type == 'USD' && arr[i].value<100)
            s+=arr[i].value;
        
    }
	document.write (" сумма USD<100 =  " + s + ".");
	document.write(' <br/>');document.write(' <br/>');
	
	var EUR=[];
	var se=0;
	 for( j =0; j<arr.length; j++){
        if(arr[j].type == 'EUR'){
           se+= arr[j].value*2;
            
        }
    }
	 
	 
	document.write (" EUR * 2 =  " + se + ".");
	
	
	
	})
	