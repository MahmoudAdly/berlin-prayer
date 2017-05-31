var prayerTimes = {
  "2017": {
    "5": {
      "30": { "Fajr": "2:57", "Shuruq": "4:49", "Zuhr": "13:09", "Asr": "17:30", "Magreb": "21:23", "Ishaa": "22:52" },
      "31": { "Fajr": "2:56", "Shuruq": "4:48", "Zuhr": "13:10", "Asr": "17:30", "Magreb": "21:24", "Ishaa": "22:54" }
    },
    "6": {
      "1": { "Fajr": "2:56", "Shuruq": "4:47", "Zuhr": "13:10", "Asr": "17:31", "Magreb": "21:25", "Ishaa": "22:55" },
      "2": { "Fajr": "2:55", "Shuruq": "4:47", "Zuhr": "13:10", "Asr": "17:31", "Magreb": "21:26", "Ishaa": "22:56" },
      "3": { "Fajr": "2:55", "Shuruq": "4:46", "Zuhr": "13:10", "Asr": "17:32", "Magreb": "21:27", "Ishaa": "22:57" },
      "4": { "Fajr": "2:55", "Shuruq": "4:45", "Zuhr": "13:10", "Asr": "17:32", "Magreb": "21:28", "Ishaa": "22:58" },
      "5": { "Fajr": "2:55", "Shuruq": "4:44", "Zuhr": "13:10", "Asr": "17:32", "Magreb": "21:29", "Ishaa": "22:59" },
      "6": { "Fajr": "2:54", "Shuruq": "4:44", "Zuhr": "13:11", "Asr": "17:33", "Magreb": "21:30", "Ishaa": "23:00" },
      "7": { "Fajr": "2:54", "Shuruq": "4:43", "Zuhr": "13:11", "Asr": "17:33", "Magreb": "21:31", "Ishaa": "23:01" },
      "8": { "Fajr": "2:54", "Shuruq": "4:43", "Zuhr": "13:11", "Asr": "17:34", "Magreb": "21:32", "Ishaa": "23:02" },
      "9": { "Fajr": "2:54", "Shuruq": "4:42", "Zuhr": "13:11", "Asr": "17:34", "Magreb": "21:33", "Ishaa": "23:03" },
      "10": { "Fajr": "2:54", "Shuruq": "4:42", "Zuhr": "13:11", "Asr": "17:35", "Magreb": "21:34", "Ishaa": "23:03" },
      "11": { "Fajr": "2:54", "Shuruq": "4:42", "Zuhr": "13:12", "Asr": "17:35", "Magreb": "21:34", "Ishaa": "23:04" },
      "12": { "Fajr": "2:54", "Shuruq": "4:41", "Zuhr": "13:12", "Asr": "17:35", "Magreb": "21:35", "Ishaa": "23:04" },
      "13": { "Fajr": "2:54", "Shuruq": "4:41", "Zuhr": "13:12", "Asr": "17:36", "Magreb": "21:36", "Ishaa": "23:05" },
      "14": { "Fajr": "2:54", "Shuruq": "4:41", "Zuhr": "13:12", "Asr": "17:36", "Magreb": "21:36", "Ishaa": "23:06" },
      "15": { "Fajr": "2:54", "Shuruq": "4:41", "Zuhr": "13:12", "Asr": "17:36", "Magreb": "21:37", "Ishaa": "23:07" },
      "16": { "Fajr": "2:54", "Shuruq": "4:41", "Zuhr": "13:12", "Asr": "17:37", "Magreb": "21:37", "Ishaa": "23:07" },
      "17": { "Fajr": "2:54", "Shuruq": "4:41", "Zuhr": "13:12", "Asr": "17:37", "Magreb": "21:38", "Ishaa": "23:07" },
      "18": { "Fajr": "2:54", "Shuruq": "4:41", "Zuhr": "13:12", "Asr": "17:37", "Magreb": "21:38", "Ishaa": "23:08" },
      "19": { "Fajr": "2:54", "Shuruq": "4:41", "Zuhr": "13:12", "Asr": "17:38", "Magreb": "21:38", "Ishaa": "23:09" },
      "20": { "Fajr": "2:54", "Shuruq": "4:41", "Zuhr": "13:14", "Asr": "17:38", "Magreb": "21:39", "Ishaa": "23:09" },
      "21": { "Fajr": "2:55", "Shuruq": "4:41", "Zuhr": "13:14", "Asr": "17:38", "Magreb": "21:39", "Ishaa": "23:09" },
      "22": { "Fajr": "2:55", "Shuruq": "4:41", "Zuhr": "13:14", "Asr": "17:38", "Magreb": "21:39", "Ishaa": "23:09" },
      "23": { "Fajr": "2:55", "Shuruq": "4:42", "Zuhr": "13:14", "Asr": "17:38", "Magreb": "21:39", "Ishaa": "23:09" },
      "24": { "Fajr": "2:55", "Shuruq": "4:42", "Zuhr": "13:14", "Asr": "17:39", "Magreb": "21:39", "Ishaa": "23:09" }
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
