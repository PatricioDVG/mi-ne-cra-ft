var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object= "";
var block_image_object="";
function player_update()
{
    fabric.Image.fromURL("messi.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
top:player_y,
left:player_x
        
     });
     canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
top:player_y,
left:player_x
        
     });
     canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("se presiona p y shift al mismo tiempo");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height +10;
        document.getElementById("ancho_actual").innerHTML = block_image_width;
        document.getElementById("altura_actual").innerHTML = block_image_height;
    }
if(e.shiftKey == true && keyPressed == '77')
    {
        console.log("se presiona m y shift al mismo tiempo");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("ancho_actual").innerHTML = block_image_width;
        document.getElementById("altura_actual").innerHTML = block_image_height;
    }
    if(keyPressed =='38')
    {
        up();
        console.log("up");
        }
        if(keyPressed =='40')
        {
            down();
            console.log("down");
        }
        if(keyPressed =='37')
        {
            left();
            console.log("left");
        }
        if(keyPressed =='39')
        {
            right();
            console.log("right");
        }
        if(keyPressed =='87')
        {
          new_image('wall.jpg')  
            console.log("w");
        }
        if(keyPressed =='76')
        {
          new_image('light_green.png')  
            console.log("l");
        }
        if(keyPressed =='84')
        {
          new_image('trunk.jpg')  
            console.log("t");
        }
        if(keyPressed =='82')
        {
          new_image('roof.jpg')  
            console.log("r");
        }
        if(keyPressed =='89')
        {
          new_image('yellow_wall.png')  
            console.log("y");
        }
        if(keyPressed =='68')
        {
          new_image('dark_green.png')  
            console.log("d");
        }
        if(keyPressed =='71')
        {
          new_image('ground.png')  
            console.log("g");
        }
        if(keyPressed =='66')
        {
          new_image('diamante.png')  
            console.log("b");
        }
        if(keyPressed =='90')
        {
          new_image('play.png')  
            console.log("z");
        }
    }
    function up()
    {
        if(player_y >=0)
        {
            player_y = player_y - block_image_height;
            console.log("altura del bloque = " + block_image_height);
            console.log("cuando se presiona la flecha acia arriba, X = " + player_x +", Y ="+player_y );
           canvas.remove(player_object);
           player_update();
        }
        }
        function down()
        {
            if(player_y <=500)
            {
                player_y = player_y + block_image_height;
                console.log("altura del bloque = " + block_image_height);
                console.log("cuando se presiona la flecha acia abajo, X = " + player_x +", Y ="+player_y );
               canvas.remove(player_object);
               player_update();
            }
            }
            function left()
            {
                if(player_x >0)
                {
                    player_x = player_x - block_image_width;
                    console.log("ancho del bloque = " + block_image_width);
                    console.log("cuando se presiona la flecha acia izquierda, X = " + player_x +", Y ="+player_y );
                   canvas.remove(player_object);
                   player_update();
                }
                }
                function right()
                {
                if(player_x <=950)
                {
                    player_x = player_x + block_image_width;
                    console.log("ancho del bloque = " + block_image_width);
                    console.log("cuando se presiona la flecha acia derecha, X = " + player_x +", Y ="+player_y );
                   canvas.remove(player_object);
                   player_update();
                }
                }

        
    
