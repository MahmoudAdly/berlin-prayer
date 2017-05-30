var prayerTimes = {
  "2017": {
    "5": {
      "30": {
        "Fajr": "2:57", "Shuruq": "4:49", "Zuhr": "13:09", "Asr": "17:30", "Magreb": "21:23", "Ishaa": "22:52"
      },
      "31": {
        "Fajr": "2:56", "Shuruq": "4:48", "Zuhr": "13:10", "Asr": "17:30", "Magreb": "21:24", "Ishaa": "22:54"
      }
    },
    "6": {
      "1": {
        "Fajr": "2:57", "Shuruq": "4:47", "Zuhr": "13:10", "Asr": "17:31", "Magreb": "21:25", "Ishaa": "22:55"
      }
    }
  }
};

window.onload = function() {
  var date = new Date();
  var dateOptions = {
    weekday: "long", year: "numeric", month: "short",
    day: "numeric"
  };

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  var times;

  try {
    times = prayerTimes[year][month][day];
  } catch (e) {
  } finally {
    $("#current-date").text("Berlin, " + date.toLocaleString("de-DE", dateOptions));
  }

  if(times != undefined) {
    $("#fajr-time").text(times["Fajr"]);
    $("#shuruq-time").text(times["Shuruq"]);
    $("#zuhr-time").text(times["Zuhr"]);
    $("#asr-time").text(times["Asr"]);
    $("#magreb-time").text(times["Magreb"]);
    $("#ishaa-time").text(times["Ishaa"]);
  }
};
