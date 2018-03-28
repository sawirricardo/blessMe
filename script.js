
    
    function startTime() {
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        var ampm = "";
        m = checkTime(m);

        if (h>12) {
            h = h -12;
            ampm = " PM";
        } else if (h == 12){
            h = 12;
            ampm = " AM"
        } else if (h < 12) {
            ampm = " AM"
        } else {
            ampm = " PM"
        };
        if (h == 0) {
            h = 12
        }

        document.getElementById('display').innerHTML = h+":"+m+ampm;
        var t = setTimeout(function() {
            startTime()
        },500);
    }

    function checkTime(i) {
        if (i<10) {
            i = "0" + i
        };
        return i;
    }

function newVerse() {
    var randomNumber = Math.floor(Math.random() * (verse.length));
    document.getElementById('verseDisplay').innerHTML = verse[randomNumber];
    var tweetVerse = verse[randomNumber].split(" ").join("%20");
    tweetVerse = tweetVerse.split("<strong>").join("");
    tweetVerse = tweetVerse.split("</strong>").join("");
    tweetVerse = tweetVerse.split("<br>").join("-");
    tweetVerse = tweetVerse.split(";").join(",");
    tweetVerse = "https://twitter.com/intent/tweet?text=" + tweetVerse.split('"').join("");
    $('#twitter-share-anchor').attr("href", tweetVerse);
}

    // For Verse Displaying
    var verse = [
        "\"On God my salvation and my glory rest; He is my rock of [unyielding] strength, <strong>my refuge is in God</strong>.\"<br><br>Psalm 62:7",
        "\"If you remain in Me and My words remain in you [that is, if we are vitally united and My message lives in your heart], <strong>ask whatever you wish and it will be done for you</strong>.\"<br><br>John 15:8",
        "\"<strong>You have not chosen Me, but I have chosen you and I have appointed and placed and purposefully planted you, so that you would go and bear fruit and keep on bearing, and that your fruit will remain and be lasting, so that whatever you ask of the Father in My name [as My representative] He may give to you.</strong><br>This [is what] I command you: that you love and unselfishly seek the best for one another.\"<br><br>John 15:16",
        "\"If you [really] love Me, <strong>you will keep and obey My commandments</strong>.\"<br><br>John 14:15",
        "\"<strong>Do not love the world [of sin that opposes God and His precepts], nor the things that are in the world. If anyone loves the world, the love of the Father is not in him.</strong><br>For all that is in the world—the lust and sensual craving of the flesh and the lust and longing of the eyes and the boastful pride of life [pretentious confidence in one’s resources or in the stability of earthly things]—these do not come from the Father, but are from the world.<br><br>1 John 2:15\"",
        "\"Therefore, confess your sins to one another [your false steps, your offenses], and pray for one another, that you may be healed and restored. <strong>The heartfelt and persistent prayer of a righteous man (believer) can accomplish much [when put into action and made effective by God—it is dynamic and can have tremendous power]</strong>.\"<br><br>James 5:16",
        "\"Come close to God [with a contrite heart] <strong>and He will come close to you</strong>.\"<br><br>James 4:8a",
        "\"But prove yourselves doers of the word [actively and continually obeying God’s precepts], and not merely listeners [who hear the word but fail to internalize its meaning], deluding yourselves [by unsound reasoning contrary to the truth].\"<br><br>James 1:22",
        "\"The Lord is my Helper [in time of need], I will not be afraid. What will man do to me ?\"<br><br>Hebrews 13:6",
        "\"Behold, I am coming like a thief. <strong>Blessed is he who stays awake and who keeps his clothes [that is, stays spiritually ready for the Lord’s return], so that he will not be naked—spiritually unprepared—and men will not see his shame</strong>.\"<br><br>Revelation 16:15",
        "\"Behold, I am the servant of the Lord; <strong>may it be done to me according to your word</strong>.\"<br><br>Luke 1:38"
    ]

    

    // Date
    function startDate () {
        var d = new Date ();
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        document.getElementById("date").innerHTML = days[d.getDay()] + " | " + d.getDate() + "-" + [d.getMonth() + 1] + "-" + d.getFullYear();
    }


// function newVerse() {
//     var randomNumber = Math.floor(Math.random() * (verse.length));
//     document.getElementById('verseDisplay').innerHTML = verse[randomNumber];
//     var tweetVerse = verse[randomNumber].split('').join('%20');
//     tweetVerse = tweetVerse[randomNumber].split('<br>').join('');
//     tweetVerse = "https://twitter.com/intent/tweet?text=" + tweetVerse.split('"').join('')
//     $('.twitter-share-button').attr('href', tweetVerse);
// }