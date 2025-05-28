import React, { useMemo, useState } from "react";

export const FindBomb = () => {
  var gridsize = 5;
  var totaltiles = gridsize * gridsize; //16
  const [clickedTiles, setclickedTiles] = useState([]) //[24]
  const [gameOver, setgameOver] = useState(false)
  //var bombPos = Math.floor(Math.random()*totaltiles)
  var bombPos = useMemo(()=>{
    return Math.floor(Math.random()*totaltiles)
  },[])
  console.log("bomb pos",bombPos)

  const handleClick =(index)=>{
    //spread operator...
    console.log("before..",clickedTiles)
    var x = [...clickedTiles,index]
    console.log("after...",x)
    setclickedTiles(x)
    if(bombPos == index){
        setgameOver(true)
    }
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>FindBomb</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridsize}, 50px)`,
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: totaltiles }).map((_, index) => {
          return (
            <div
              onClick={()=>{handleClick(index)}}
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
                //   backgroundColor: clickedTiles.includes(index) ? "#ddd" : "#fff",
                backgroundColor:clickedTiles.includes(index)?"#ddd":"#fff",
                //backgroundColor: "#fff",
                cursor: "pointer",
              }}
            >
                {
                    gameOver && index==bombPos ? "💣":  index+1
                }
            </div>
          );
        })}
      </div>
    </div>
  );
};
