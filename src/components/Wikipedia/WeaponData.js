const weapon = [];

for (let i = 0; i <= 43; i++) {
  let title = "";
  let description = "";

  switch (i) {
    case 0:
      title = "Warhammer";
      break;
    case 1:
      title = "Cutlass";
      break;
    case 2:
      title = "LongSword";
      break;
    case 3:
      title = "Scimitar";
      break;
    case 4:
      title = "MorningStar";
      break;
    case 5:
      title = "Trident";
      break;
    case 6:
      title = "DragonScepter";
      break;
    case 7:
      title = "Broadsword";
      break;
    case 8:
      title = "Scepter";
      break;
    case 9:
      title = "DestinysBite";
      break;
    case 10:
      title = "CrescentSword";
      break;
    case 11:
      title = "Dagger";
      break;
    case 12:
      title = "Gladius";
      break;
    case 13:
      title = "FeyIronAxe";
      break;
    case 14:
      title = "MirrorAxe";
      break;
    case 15:
      title = "Vibroblade";
      break;
    case 16:
      title = "ShortSword";
      break;
    case 17:
      title = "Cleaver";
      break;
    case 18:
      title = "Sawblade";
      break;
    case 19:
      title = "SkullAxe";
      break;
    case 20:
      title = "Godslayer";
      break;
    case 21:
      title = "GreatAxe";
      break;
    case 22:
      title = "TwinBladeAxe";
      break;
    case 23:
      title = "Uberblade";
      break;
    case 24:
      title = "Hatchet";
      break;
    case 25:
      title = "CurvedAxe";
      break;
    case 26:
      title = "GreatSword";
      break;
    case 27:
      title = "Mace";
      break;
    case 28:
      title = "Pick";
      break;
    case 29:
      title = "AxeSword";
      break;
    case 30:
      title = "Hellrazor";
      break;
    case 31:
      title = "Forkblade";
      break;
    case 32:
      title = "Doomblade";
      break;
    case 33:
      title = "Spear";
      break;
    case 34:
      title = "BeardedAxe";
      break;
    case 35:
      title = "Limbcutter";
      break;
    case 36:
      title = "BattleAxe";
      break;
    case 37:
      title = "FourBladeAxe";
      break;
    case 38:
      title = "MinotaurAxe";
      break;
    case 39:
      title = "Hammer";
      break;
    case 40:
      title = "WarAxe";
      break;
    case 41:
      title = "Club";
      //   description = 'me tire un pedo';
      break;
    case 42:
      title = "Soulflayer";
      break;
    case 43:
      title = "Bow";
      break;
    default:
      title = `Arma Desconocida ${i}`;
  }

  weapon.push({
    id: i,
    title: title,
    description: description,
    image: `/web-sherwood/assets/Wikipedia/Items/armas/${title}.png`,
    type: 'weapon' // <--- AÑADE ESTA LÍNEA
  });
}

console.log(weapon);
export default weapon;
