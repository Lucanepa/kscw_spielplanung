<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>KSC Wiedikon Calendar</title>
  <link href="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/main.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/main.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"></script>
  <style>
    body {
      font-family: sans-serif;
      background: #f9f9f9;
      margin: 0;
      padding: 0;
    }
    #header {
      background: #0073aa;
      color: white;
      padding: 10px 20px;
      font-weight: bold;
    }
    #calendar {
      max-width: 900px;
      margin: 20px auto;
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    .spielsamstag { background-color: gold !important; }
    .open-event {
      border: 2px solid;
      background-color: transparent !important;
      color: black !important;
    }
    .confirmed-event {
      background-color: steelblue !important;
      color: white !important;
    }
  </style>
</head>
<body>
  <div
