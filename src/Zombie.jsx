import { useState } from "react";
import { zombieFighters } from "./data.js";

export default function Zombie() {
    const [money, setMoney] = useState(100);
    const [team, setTeam] = useState([]);

function handleAddClick(fighter) {
    if (money >= fighter.price) {
        setTeam([...team, fighter])
        setMoney(money - fighter.price)
    } else {
        console.log("Not enough money")
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
    <h2>Money: ${money}</h2>
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
      <ul>
        {team.map((fighter) => (
          <li key={fighter._id}>
            {fighter.name}
          </li>
        ))}
      </ul>
    </div>
    </>
)}