
var current;

function assert( outcome) { 
    var ans = outcome ? 'pass' : 'fail'; 
    alert(ans);
};

function scaleUp(){
	//alert("increasing image size");
  //var currentValue = current.scale;
	current.scale++;
  //var newValue = current.scale;
  //assert(currentValue < newValue);
};

function scaleDown(){
	//alert("decreasing image size");
	//var currentValue = current.scale;
	current.scale--;
	//var newValue = current.scale;
  //assert(currentValue > newValue);
};

function rotate(){
	//alert("rotating image size");
	//var currentValue = current.rotation;
	current.rotation+=30;
	//var newValue = current.rotation;
	//assert(currentValue < newValue);
};

function moveNorth(){
	//alert("moving north");
	//var currentValue = location1.northing;
	location1.northing++;
	//var newValue = location1.northing;
  //assert(currentValue < newValue);
};

function moveSouth(){
	
	//alert("moving south");
  //var currentValue = location1.northing;
 	location1.northing--;
  //var newValue = location1.northing;
  //assert(currentValue > newValue);
};

function moveEast(){
	//alert("moving east");
	//var currentValue = location1.easting;
	location1.easting++;
	//var newValue = location1.easting;
  //assert(currentValue < newValue);
};

function moveWest(){
	//alert("moving west");
	//var currentValue = location1.easting;
	location1.easting--;
	//var newValue = location1.easting;
  //assert(currentValue > newValue);
};

function moveHigher(){
	//alert("moving up");
	//var currentValue = location1.altitudeDelta;
	location1.altitudeDelta++;
	//var newValue = location1.altitudeDelta;
  //assert(currentValue < newValue);
	
};

function moveLower(){
	//alert("moving down");
	//var currentValue = location1.altitudeDelta;
	location1.altitudeDelta--;
	//var newValue = location1.altitudeDelta;
  //assert(currentValue > newValue);
};

function flip(){
	//alert("image flip");
	//var currentValue = current.rotate.heading;
	current.rotate.heading+=180;
	//var newValue = current.rotate.heading;
  //assert(currentValue < newValue);
};

function deleteObject(){
    var deleteconfirmation = confirm("Delete virtual object?");
    if (deleteconfirmation == true) {
       current.destroy();
    }
    //assert(current.destroyed == true);
};

function showInfo(){
  AR.context.openInBrowser("http://www.ikea.com/us/en/catalog/products/00104291/");
  
}     

	
var image = new AR.ImageDrawable(new AR.ImageResource("assets/coffeetable.png"), 1, {
          enabled: true,
          scale: 2, 
          onClick: function(){
        	  //alert("image selected");
         	  var div = document.getElementById('loadingMessage');
    		    if (div.style.display !== 'none') {
       			  div.style.display = 'none';
    		    }
    		    else {
        		  div.style.display = 'block';
    		    }
         	  current=this;
         	}     
});



var location1 = new AR.RelativeLocation(null, 10, 0, 0);

var geoObject1 = new AR.GeoObject(location1, { 
        drawables: {
           cam: image
        }
});
       

  
       
/*
 var location2 = new AR.RelativeLocation(null, 10, 0, 0);
var geoObject2 = new AR.GeoObject(location2, { 
        drawables: {
                   cam: optionsetting1
                }
       
       });
       
  */ 
  
/*
var optionsetting1 = new AR.ImageDrawable(new AR.ImageResource("assets/plus.png"), 1, {
			enabled: true,
          scale: 1,
       
          onClick: function(obj){
         	
          
          }
          
          });

*/