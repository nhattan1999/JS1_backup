var listsinhvien =[{name:'Dong Phuong',mssv:125,sdt:999}];

function sinhvien (name,mssv,sdt){

	this.name=name;
	this.mssv=mssv;
	this.sdt=sdt;

}

function addsv (){
	var sv = new sinhvien();
	sv.name = document.getElementById("ten").value;
	sv.mssv = document.getElementById("mssv").value;
	sv.sdt = document.getElementById("sdt").value;	
	listsinhvien.push(sv);
	document.getElementById("layout-thongtinsv").style.display = "none";
	return listsinhvien;
		
}

function deletesv(){
	var mssvCanDelete = document.getElementById("mssvxoa").value;
  	var mssvCanDeleteInt=parseInt(mssvCanDelete);
  	for(var i=0;i<listsinhvien.length;i++)
  	{
    	if(listsinhvien[i].mssv==mssvCanDeleteInt)
    	{
    	 listsinhvien.splice(i,1);
		}
	}
	document.getElementById("layout-delete").style.display = "none";
}
function editsv(){
	var sdtCanEdit=document.getElementById("sdtedit").value;
	var sdtCanEditInt=parseInt(sdtCanEdit);
	for(var i=0;i<listsinhvien.length;i++)
	{
	 	if(listsinhvien[i].sdt == sdtCanEditInt)
	  	{
	      var sdtNew = document.getElementById("sdtnew").value;
	      listsinhvien[i].sdt=parseInt(sdtNew);
	    }
	  }
	document.getElementById("layout-edit").style.display = "none";
}

function showsv(){
	var listsinhvienString=JSON.stringify(listsinhvien);    	
	document.getElementById("list").innerText = listsinhvienString;
}

window.onload=function () {
	var luachonbtn =document.getElementById("luachonbtn");
	luachonbtn.onclick=function(){
		var luachon =document.getElementById("luachonText").value;
	     switch (luachon)
		{
		    case '1' : {
		    	document.getElementById("layout-thongtinsv").style.display = "block";
		    	addbtn.onclick=function(){
		    			addsv();
		    	}
	        	break;
		    }
		    case '2' : {
		       	document.getElementById("layout-delete").style.display = "block";
		    	delbtn.onclick=function(){
		    			deletesv();
		    	}
			    break;
		    }
		    case '3' : {
		    	document.getElementById("layout-edit").style.display = "block";
		    	editbtn.onclick=function(){	
		    		editsv();
		    	}
		   		break;
		    }
		    case '4' : {
		    	showsv();
		   		break;
		    }
		    default : {
		        
		    }
	 	}
	 }
}



