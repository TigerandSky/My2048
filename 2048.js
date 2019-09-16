var grid =[];
var txt;
twocount = 2;
pastgrid = grid;
p1ontext = false;
score = 0;
highscore = 0;
gridname = "4";
hasstarted = false;
function updategrid(){
    noStroke();
    for (i = 0; i <gridname; i++){
        for (j = 0; j <gridname; j++){
            if(gridname > 6 && grid[i][j]!= 0){
                textSize(75*4/(gridname*2));
            }
             if(grid[i][j]!= 0){
                textSize(75*4/(gridname));
            if (grid[i][j] == 2){
                fill(238,228,218);  
            }
            else if (grid[i][j] == 4){
                fill(237,224,200);  
            }
            else if(grid[i][j] == 8){
                fill(242,177,121);
            }
            else if(grid[i][j] == 16){
                fill(245,149,99);
            }
            else if(grid[i][j] == 32){
                fill(246,124,95);
            }
            else if(grid[i][j] == 64){
                fill(246,94,59);
            }
            else if(grid[i][j] == 128){
                fill(237,207,114);
                textSize(75*4/(gridname*1.3));
            }
            else{
                fill(237,204,97);  
                textSize(75*4/(gridname*1.3));
            }
            rect(50+i*(600/gridname),50+j*(600/gridname),600/gridname,600/gridname);
            textAlign(CENTER,CENTER);
            
            fill(50)
            text(grid[i][j],50+i*(600/gridname)+(600/(gridname*2)),50+j*(600/gridname)+(600/(gridname*2)) )
        }
        }
    }
    stroke(0)
    }

function preload(){
    try{
    txt = loadStrings("highscores.js")}
    catch{
        txt = ["0","0","0","0","0","0","0","0","0","0","0","0","0","0"]
    }
}
function setup(){
   
    createCanvas(700,775);
    //gridname
    
}

function draw(){
    if(score > highscore){
        highscore = score;
    }
    background(35,35,35);
    
    if(hasstarted){
    
    fill(175);
    
    rect(50,50,600,600);
    updategrid();
    fill(175);
    stroke(150);
    strokeWeight(14*4/gridname);
    //noStroke();
    for(i=0; i < gridname+1; i++){
        line(50,50+i*(600/gridname), 650, 50+i*(600/gridname));
    }
    for(i=0; i < gridname+1; i++){
        line(50+i*(600/gridname),50, 50+i*(600/gridname), 650);
    }
    noStroke();
    stroke(0)
    strokeWeight(0)
    textSize(48)
    fill(238,228,218);
    text("Score: "+score, 150, 720)
    text("Best: "+highscore, 500, 720)
}
    else{
        stroke(0)
        strokeWeight(0)
        textSize(64)
        fill(238,228,218);
        text("GridSize: ", 225, 250)
        fill(238,228,218);
        textSize(120)
        fill(237,204,97);
        text("2048", 225, 150)
        textSize(80)
        stroke(0)
        strokeWeight(5)
        fill(125,125,125)
        rect(225,270,250,110)
        if(mouseX>= 100 && mouseX<= 600 && mouseY >= 450  && mouseY<= 600){
            fill(246,124,95);
            stroke(242,177,121)
            rect(100,450,500,150)
            textSize(100)
            fill(237,207,114);
            strokeWeight(0)
            stroke(0)
            text("Generate", 140, 560)
            }
        else{
            fill(246,94,59);
            stroke(246,124,95)
            rect(100,450,500,150)
            textSize(100)
            fill(237,204,97);
            strokeWeight(0)
            stroke(0)
            text("Generate", 140, 560)
        }
        fill(237,224,200)
        
        linemovement = 0
        bluexsub = 0 
                for(i = 0; i < gridname.length; i++){
                   
                    
                    if (gridname[i]){
                        linemovement += 15
                        bluexsub -= 8
                   
                    
                }}
        bluexdis = gridname.length*(-17)+bluexsub+25
        text(gridname, 326+bluexdis , 120+240)
        if(p1ontext){
            
            
            if(keyIsPressed){
                if(key != "1" &&key != "2" &&key != "3" &&key != "4" &&key != "5" &&key != "6" &&key != "7" &&key != "8" &&key != "9" &&key != "0" &&key != "Backspace"){
                   
                }
                else if ( key == "Backspace"){
                    prevename = gridname
                    gridname = ""
                    for (i = 0; i < prevename.length -1; i++){
                        gridname += prevename[i]
                    }
                }
                else{
                    if(gridname.length < 2){
                gridname += key}}
                print(gridname)
                
                key = ""
            }
            
        }
        fill(0,0,200)
        
        
    }
    }
    


function demcoy(grid){
    //print(grid);
    decoy = []
    for (i = 0; i <gridname; i++){
        placeholder = []
        for (j = 0; j <gridname; j++){
            if(grid[i][j] != 0){
                append(placeholder, grid[i][j]);
            }
        }
        append(decoy,placeholder)
    }
    //print(decoy);
    return decoy;  
}
function conversion(grid){
    //print(grid);
    newgrid = []
        for(i = 0;i<gridname;i++){
            placeholder = []
            for(j = 0; j < gridname; j++){
               append(placeholder, grid[j][i])
            }
            append(newgrid, placeholder);
        }
        print(newgrid);
    
    return newgrid;
}
function addone(){
    for(k = 0; k<numspawned; k++){
        
    added = false
    openslot = 0;
    for (i=0;i<gridname;i++){
        for (j=0;j<gridname;j++){
            if(grid[i][j] == 0){
                
                openslot += 1
            }
        }
    }
    if(openslot >0){
    while (!added){
        randompos1 = int(random(0,gridname))
        randompos2 = int(random(0,gridname))
        if(grid[randompos1][randompos2] == 0){
            grid[randompos1][randompos2] = 2;
            added = true;
        }
    }}}
}
function convert(grid){
    newg = []
    for(i =0; i < grid.length;i++){
        for(j=0; j < grid[i].length;j++){
            append(newg, grid[i][j]);
        }
    }
    return newg;
}
function keyReleased(){
    if(hasstarted){
    if(keyCode == UP_ARROW){
        decoy = demcoy(grid);
        for(i = 0; i <gridname; i++){
            znum = gridname-decoy[i].length;
            for(znum; znum >0;znum--){
                append(decoy[i],0);
                
            }
            
        }
        for(i = 0; i<gridname;i++){
            for(j = 0; j<gridname-1;j++){
                if(decoy[i][j]==decoy[i][j+1]&& decoy[i][j] != 0){
                    decoy[i][j] = decoy[i][j]*2
                    score += decoy[i][j]
                    decoy[i].splice(j+1,1);
                    append(decoy[i], 0);
                }
            }
        }
        grid = decoy;
        gridcopy = convert(grid);
        badboys = 0;
        for(i = 0; i < grid.length; i++){
            for(j = 0; j < grid[i].length; j++){
                if(gridcopy[i*gridname+j]!= pastgrid[i*gridname+j]){
                    badboys ++;
                }
            }
        }
        if(badboys!= 0){
            addone();}
           pastgrid = convert(grid); 
        
        //print(grid)
    }
    else if(keyCode == DOWN_ARROW){
        
        decoy = grid;

        decoy = demcoy(decoy);
        
        for(i = 0; i <gridname; i++){
            znum = gridname-decoy[i].length;
            placeholder = []
            for(znum; znum >0;znum--){
                append(placeholder,0);
            }
            if(placeholder.length<gridname){
                for(j = 0; j<decoy[i].length; j++){
                    append(placeholder,decoy[i][j]);
                }
            }
            decoy[i] = placeholder;
            
        }
        for(i = 0; i<gridname;i++){
            for(j = gridname-1; j>0;j--){
                if(decoy[i][j]==decoy[i][j-1]&& decoy[i][j] != 0){
                    decoy[i][j] = decoy[i][j]*2
                    score += decoy[i][j]
                    decoy[i].splice(j-1,1);
                    for(x = gridname-1; x >0; x--){
                        
                        decoy[i][x] = decoy[i][x-1]
                    }
                    decoy[i][0] = 0;
                }
            }
        }

        
        
            grid = decoy;
        gridcopy = convert(grid);
        badboys = 0;
        for(i = 0; i < grid.length; i++){
            for(j = 0; j < grid[i].length; j++){
                if(gridcopy[i*gridname+j]!= pastgrid[i*gridname+j]){
                    badboys ++;
                }
            }
        }
        if(badboys!= 0){
            addone();}
           pastgrid = convert(grid); 
        
        
    }
    else if(keyCode == LEFT_ARROW){
        
       decoy = conversion(grid);
       decoy = demcoy(decoy);
       for(i = 0; i <gridname; i++){
            znum = gridname-decoy[i].length;
            for(znum; znum >0;znum--){
                append(decoy[i],0);
            
            }
            
            }
        for(i = 0; i<gridname;i++){
            for(j = 0; j<gridname-1;j++){
                if(decoy[i][j]==decoy[i][j+1]&& decoy[i][j] != 0){
                    decoy[i][j] = decoy[i][j]*2
                    score += decoy[i][j]
                    decoy[i].splice(j+1,1);
                    append(decoy[i], 0);
                }
            }
        }
        grid = conversion(decoy);
        gridcopy = convert(grid);
        badboys = 0;
        for(i = 0; i < grid.length; i++){
            for(j = 0; j < grid[i].length; j++){
                if(gridcopy[i*gridname+j]!= pastgrid[i*gridname+j]){
                    badboys ++;
                }
            }
        }
        if(badboys!= 0){
            addone();}
           pastgrid = convert(grid); 
        
        
    
        
    }
    else if(keyCode == RIGHT_ARROW){
        decoy = conversion(grid);
        decoy = demcoy(decoy);
        for(i = 0; i <gridname; i++){
            znum = gridname-decoy[i].length;
            placeholder = []
            for(znum; znum >0;znum--){
                append(placeholder,0);
            }
            if(placeholder.length<gridname){
                for(j = 0; j<decoy[i].length; j++){
                    append(placeholder,decoy[i][j]);
                }
            }
            decoy[i] = placeholder;
        }
        for(i = 0; i<gridname;i++){
            for(j = gridname-1; j>0;j--){
                if(decoy[i][j]==decoy[i][j-1]&& decoy[i][j] != 0){
                    decoy[i][j] = decoy[i][j]*2
                    score += decoy[i][j]
                    decoy[i].splice(j-1,1);
                    for(x = gridname-1; x >0; x--){
                        decoy[i][x] = decoy[i][x-1]
                    }
                    decoy[i][0] = 0;
                }
            }
        }
        grid = conversion(decoy);
        gridcopy = convert(grid);
        badboys = 0;
        for(i = 0; i < grid.length; i++){
            for(j = 0; j < grid[i].length; j++){
                if(gridcopy[i*gridname+j]!= pastgrid[i*gridname+j]){
                    badboys ++;
                }
            }
        }
        if(badboys!= 0){
            addone();}
           pastgrid = convert(grid); 
     }
    }
}
function mouseReleased(){
    rect(225,270,250,110)
    if( mouseX <= 475&& mouseX >= 225 && mouseY >= 270&& mouseY< 380){
        if(!p1ontext){
            p1ontext = true}
        else{
            p1ontext = false
        }
    }
    else{
        p1ontext = false;
    }
    if(mouseX>= 100 && mouseX<= 600 && mouseY >= 450  && mouseY<= 600){
        if(int(gridname)>2&& int(gridname)<17)
        {
        hasstarted = true
        gridname = int(gridname)
        highscore = int(txt[gridname-3])
        for (i = 0; i<gridname; i++)
        {
            var placeholder = [];
            for(j=0; j<gridname; j++){
                append(placeholder,0)
            }
            append(grid, placeholder);
        }
        while (twocount != 0 ){
            twocount = 2;
            
            grid[int(random(0,gridname))][int(random(0,gridname))] = 2; 
            
            grid[int(random(0,gridname))][int(random(0,gridname))] = 2; 
            for (i = 0; i <gridname; i++){
                for (j = 0; j <gridname; j++){
                    if (grid[i][j] == 2){
                        twocount --;
                    }
                }
            }
            }
            print(grid);
        }
        numspawned = int(gridname>=3)+int(gridname>=8)+int(gridname>=12)+int(gridname>=16);
        print(numspawned);
    }
}