function scuberGreetingForFeet(rideHeight){
   if (rideHeight <= 400){
      return "This one is on me!"}
    else if (rideHeight <2500) {
      return "I will gladly take your thirty bucks."}
    else if (rideHeight >= 2501) {
      return "No can do."}
  }


function ternaryCheckCity(cityName){
  return cityName === "NYC" ? ("Ok, sounds good."):("No go.");
}

function switchOnCharmFromTip(tipType){
  switch (tipType) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    case 'thanks for everything':
      return 'Bye.'
  }
}