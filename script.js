function Find(){
  var username = "";
  var hashtag = "";
  username = document.getElementById('username').value;
  hashtag = document.getElementById('hashtag').value;
  if(username && hashtag != "")
  {
    var link = "https://blitz.gg/valorant/profile/";
    link = link.concat('', username + "-" + hashtag);
     window.open(link, '_blank').focus();
  }else
  {
    console.log("Enter a username");
  }
}


