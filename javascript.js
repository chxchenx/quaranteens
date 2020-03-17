var activities = [
]

function newActivity() {
  var randomNumber = Math.floor(Math.random()) * activities.length));
  document.getElementById('activityDisplay').innerHTML = activities[randomNumber];
}
