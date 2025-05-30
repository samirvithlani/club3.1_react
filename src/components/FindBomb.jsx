import React, { useMemo, useState } from "react";

export const FindBomb = () => {
  var gridsize = 5;
  var totaltiles = gridsize * gridsize; //16
  const [clickedTiles, setclickedTiles] = useState([]) //[24]
  const [gameOver, setgameOver] = useState(false)
  const [amount, setamount] = useState() //10
  const [winningAmount, setwinningAmount] = useState(0)
  //var bombPos = Math.floor(Math.random()*totaltiles)

  var bombPos = useMemo(()=>{
    return Math.floor(Math.random()*totaltiles)
  },[])
  console.log("bomb pos",bombPos)

  const handleClick =(index)=>{
    //spread operator...
    console.log("before..",clickedTiles)
    var x = [...clickedTiles,index]
    console.log(x)
    console.log("after...",x)
    setclickedTiles(x) //1
   
    if(bombPos == index){
        console.log("clicked title",x.length)
        if(clickedTiles.length == 1){
          setwinningAmount(0)
          setgameOver(true)
        }
        setgameOver(true)
        
       // window.location.reload()
    }
    if(gameOver==false){
      
      const multiplier = 1 + x.length * 0.5; //
      console.log("multiplier",multiplier)
      setwinningAmount(amount * multiplier)
      }
  }
  const startGame = ()=>{
    var x = parseInt(prompt("enter amount to bet min [10-1000]"))
    console.log(x)
    setamount(x)
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>FindBomb</h1>
      <button onClick={()=>{startGame()}}>BET</button>
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
      {
        gameOver && winningAmount
      }
    </div>
  );
};
