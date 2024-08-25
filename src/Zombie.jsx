import { useState } from "react";
import { zombieFighters } from "./data.js";

export default function Zombie() {
    const [money, setMoney] = useState(100);
    const [team, setTeam] = useState([]);
    const [totalStrength, setTotalStrength] = useState(0)
    const [totalAgility, setTotalAgility] = useState(0)

function handleAddClick(fighter) {
    if (money >= fighter.price) {
        setTeam([...team, fighter])
        setMoney(money - fighter.price)
        setTotalStrength(totalStrength + fighter.strength)
        setTotalAgility(totalAgility + fighter.agility)
    } else {
        console.log("Not enough money") // not sure if I need this, but just in case I'll leave it.
    }
  }
  /*
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  function handleBackClick() {
    if (index >= 1) {
      setIndex(index - 1)
    }
  }

*/

return (
    <>
    <div>
    <h1>Zombie Fighters</h1>
    {money < 10 ? (<h2>Not enough money</h2>) : (<h2>Money: ${money}</h2>)}
    {totalStrength === 0 ? (<h2>No strength</h2>) : (<h2>Strength: {totalStrength}</h2>)}
    {totalAgility === 0 ? (<h2>No agility</h2>) : (<h2>Agility: {totalAgility}</h2>)}
    <ul>
        {zombieFighters.map((fighter, index) => (
            <li key={`${fighter.name}-${index}`}>
                <img src={fighter.img} alt={fighter.name}/>
                <h3>{fighter.name}</h3>
                <p>Price: ${fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button onClick={() => handleAddClick(fighter)}>
                    Add
                </button>
            </li>
        ))}
    </ul>
      <h2>Your Team:</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
      <ul>
        {team.map((fighter, index) => (
          <li key={`${fighter.name}-${index}`}>
                <img src={fighter.img} alt={fighter.name}/>
                <h3>{fighter.name}</h3>
                <p>Price: ${fighter.price}</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
          </li>
          ))}
      </ul>
    )}
    </div>
    </>
    )}