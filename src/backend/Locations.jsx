const locations = [
  {
    name: "USA",
    children: [
      {
        name: "Alabama",
        children: [
          { name: "Birmingham" },
          { name: "Montgomery" },
          { name: "Mobile" },
          { name: "Huntsville" },
          { name: "Tuscaloosa" },
        ],
      },
      {
        name: "Alaska",
        children: [
          { name: "Anchorage" },
          { name: "Fairbanks" },
          { name: "Juneau" },
          { name: "Sitka" },
          { name: "Ketchikan" },
        ],
      },
      {
        name: "Arizona",
        children: [
          { name: "Phoenix" },
          { name: "Tucson" },
          { name: "Mesa" },
          { name: "Chandler" },
          { name: "Glendale" },
        ],
      },
      {
        name: "Arkansas",
        children: [
          { name: "Little Rock" },
          { name: "Fort Smith" },
          { name: "Fayetteville" },
          { name: "Springdale" },
          { name: "Jonesboro" },
        ],
      },
      {
        name: "California",
        children: [
          { name: "Los Angeles" },
          { name: "San Francisco" },
          { name: "San Diego" },
          { name: "San Jose" },
          { name: "Fresno" },
        ],
      },
      {
        name: "Colorado",
        children: [
          { name: "Denver" },
          { name: "Colorado Springs" },
          { name: "Aurora" },
          { name: "Fort Collins" },
          { name: "Lakewood" },
        ],
      },
      {
        name: "Connecticut",
        children: [
          { name: "Bridgeport" },
          { name: "New Haven" },
          { name: "Hartford" },
          { name: "Stamford" },
          { name: "Waterbury" },
        ],
      },
      {
        name: "Delaware",
        children: [
          { name: "Wilmington" },
          { name: "Dover" },
          { name: "Newark" },
          { name: "Middletown" },
          { name: "Smyrna" },
        ],
      },
      {
        name: "Florida",
        children: [
          { name: "Miami" },
          { name: "Tampa" },
          { name: "Orlando" },
          { name: "Jacksonville" },
          { name: "St. Petersburg" },
        ],
      },
      {
        name: "Georgia",
        children: [
          { name: "Atlanta" },
          { name: "Augusta" },
          { name: "Columbus" },
          { name: "Savannah" },
          { name: "Athens" },
        ],
      },
      {
        name: "Hawaii",
        children: [
          { name: "Honolulu" },
          { name: "Hilo" },
          { name: "Kailua" },
          { name: "Kapolei" },
          { name: "Kaneohe" },
        ],
      },
      {
        name: "Idaho",
        children: [
          { name: "Boise" },
          { name: "Nampa" },
          { name: "Meridian" },
          { name: "Idaho Falls" },
          { name: "Pocatello" },
        ],
      },
      {
        name: "Illinois",
        children: [
          { name: "Chicago" },
          { name: "Aurora" },
          { name: "Rockford" },
          { name: "Joliet" },
          { name: "Naperville" },
        ],
      },
      {
        name: "Indiana",
        children: [
          { name: "Indianapolis" },
          { name: "Fort Wayne" },
          { name: "Evansville" },
          { name: "South Bend" },
          { name: "Carmel" },
        ],
      },
      {
        name: "Iowa",
        children: [
          { name: "Des Moines" },
          { name: "Cedar Rapids" },
          { name: "Davenport" },
          { name: "Sioux City" },
          { name: "Iowa City" },
        ],
      },
      {
        name: "Kansas",
        children: [
          { name: "Wichita" },
          { name: "Overland Park" },
          { name: "Kansas City" },
          { name: "Topeka" },
          { name: "Olathe" },
        ],
      },
      {
        name: "Kentucky",
        children: [
          { name: "Louisville" },
          { name: "Lexington" },
          { name: "Bowling Green" },
          { name: "Owensboro" },
          { name: "Covington" },
        ],
      },
      {
        name: "Louisiana",
        children: [
          { name: "New Orleans" },
          { name: "Baton Rouge" },
          { name: "Shreveport" },
          { name: "Lafayette" },
          { name: "Lake Charles" },
        ],
      },
      {
        name: "Maine",
        children: [
          { name: "Portland" },
          { name: "Lewiston" },
          { name: "Bangor" },
          { name: "South Portland" },
          { name: "Auburn" },
        ],
      },
      {
        name: "Maryland",
        children: [
          { name: "Baltimore" },
          { name: "Frederick" },
          { name: "Rockville" },
          { name: "Gaithersburg" },
          { name: "Bowie" },
        ],
      },
      {
        name: "Massachusetts",
        children: [
          { name: "Boston" },
          { name: "Worcester" },
          { name: "Springfield" },
          { name: "Lowell" },
          { name: "Cambridge" },
        ],
      },
      {
        name: "Michigan",
        children: [
          { name: "Detroit" },
          { name: "Grand Rapids" },
          { name: "Warren" },
          { name: "Sterling Heights" },
          { name: "Ann Arbor" },
        ],
      },
      {
        name: "Minnesota",
        children: [
          { name: "Minneapolis" },
          { name: "St. Paul" },
          { name: "Rochester" },
          { name: "Duluth" },
          { name: "Bloomington" },
        ],
      },
      {
        name: "Mississippi",
        children: [
          { name: "Jackson" },
          { name: "Gulfport" },
          { name: "Southaven" },
          { name: "Hattiesburg" },
          { name: "Biloxi" },
        ],
      },
      {
        name: "Missouri",
        children: [
          { name: "Kansas City" },
          { name: "St. Louis" },
          { name: "Springfield" },
          { name: "Independence" },
          { name: "Columbia" },
        ],
      },
      {
        name: "Montana",
        children: [
          { name: "Billings" },
          { name: "Missoula" },
          { name: "Great Falls" },
          { name: "Bozeman" },
          { name: "Butte" },
        ],
      },
      {
        name: "Nebraska",
        children: [
          { name: "Omaha" },
          { name: "Lincoln" },
          { name: "Bellevue" },
          { name: "Grand Island" },
          { name: "Kearney" },
        ],
      },
      {
        name: "Nevada",
        children: [
          { name: "Las Vegas" },
          { name: "Reno" },
          { name: "Henderson" },
          { name: "North Las Vegas" },
          { name: "Sparks" },
        ],
      },
      {
        name: "New Hampshire",
        children: [
          { name: "Manchester" },
          { name: "Nashua" },
          { name: "Concord" },
          { name: "Derry" },
          { name: "Dover" },
        ],
      },
      {
        name: "New Jersey",
        children: [
          { name: "Newark" },
          { name: "Jersey City" },
          { name: "Paterson" },
          { name: "Elizabeth" },
          { name: "Trenton" },
        ],
      },
      {
        name: "New Mexico",
        children: [
          { name: "Albuquerque" },
          { name: "Las Cruces" },
          { name: "Rio Rancho" },
          { name: "Santa Fe" },
          { name: "Roswell" },
        ],
      },
      {
        name: "New York",
        children: [
          { name: "New York City" },
          { name: "Buffalo" },
          { name: "Rochester" },
          { name: "Yonkers" },
          { name: "Syracuse" },
        ],
      },
      {
        name: "North Carolina",
        children: [
          { name: "Charlotte" },
          { name: "Raleigh" },
          { name: "Greensboro" },
          { name: "Durham" },
          { name: "Winston-Salem" },
        ],
      },
      {
        name: "North Dakota",
        children: [
          { name: "Fargo" },
          { name: "Bismarck" },
          { name: "Grand Forks" },
          { name: "Minot" },
          { name: "West Fargo" },
        ],
      },
      {
        name: "Ohio",
        children: [
          { name: "Columbus" },
          { name: "Cleveland" },
          { name: "Cincinnati" },
          { name: "Toledo" },
          { name: "Akron" },
        ],
      },
      {
        name: "Oklahoma",
        children: [
          { name: "Oklahoma City" },
          { name: "Tulsa" },
          { name: "Norman" },
          { name: "Broken Arrow" },
          { name: "Lawton" },
        ],
      },
      {
        name: "Oregon",
        children: [
          { name: "Portland" },
          { name: "Salem" },
          { name: "Eugene" },
          { name: "Gresham" },
          { name: "Hillsboro" },
        ],
      },
      {
        name: "Pennsylvania",
        children: [
          { name: "Philadelphia" },
          { name: "Pittsburgh" },
          { name: "Allentown" },
          { name: "Erie" },
          { name: "Reading" },
        ],
      },
      {
        name: "Rhode Island",
        children: [
          { name: "Providence" },
          { name: "Warwick" },
          { name: "Cranston" },
          { name: "Pawtucket" },
          { name: "East Providence" },
        ],
      },
      {
        name: "South Carolina",
        children: [
          { name: "Columbia" },
          { name: "Charleston" },
          { name: "North Charleston" },
          { name: "Mount Pleasant" },
          { name: "Rock Hill" },
        ],
      },
      {
        name: "South Dakota",
        children: [
          { name: "Sioux Falls" },
          { name: "Rapid City" },
          { name: "Aberdeen" },
          { name: "Brookings" },
          { name: "Watertown" },
        ],
      },
      {
        name: "Tennessee",
        children: [
          { name: "Nashville" },
          { name: "Memphis" },
          { name: "Knoxville" },
          { name: "Chattanooga" },
          { name: "Clarksville" },
        ],
      },
      {
        name: "Texas",
        children: [
          { name: "Houston" },
          { name: "San Antonio" },
          { name: "Dallas" },
          { name: "Austin" },
          { name: "Fort Worth" },
        ],
      },
      {
        name: "Utah",
        children: [
          { name: "Salt Lake City" },
          { name: "West Valley City" },
          { name: "Provo" },
          { name: "West Jordan" },
          { name: "Orem" },
        ],
      },
      {
        name: "Vermont",
        children: [
          { name: "Burlington" },
          { name: "South Burlington" },
          { name: "Rutland" },
          { name: "Essex Junction" },
          { name: "Barre" },
        ],
      },
      {
        name: "Virginia",
        children: [
          { name: "Virginia Beach" },
          { name: "Norfolk" },
          { name: "Chesapeake" },
          { name: "Richmond" },
          { name: "Newport News" },
        ],
      },
      {
        name: "Washington",
        children: [
          { name: "Seattle" },
          { name: "Spokane" },
          { name: "Tacoma" },
          { name: "Vancouver" },
          { name: "Bellevue" },
        ],
      },
      {
        name: "West Virginia",
        children: [
          { name: "Charleston" },
          { name: "Huntington" },
          { name: "Morgantown" },
          { name: "Parkersburg" },
          { name: "Wheeling" },
        ],
      },
      {
        name: "Wisconsin",
        children: [
          { name: "Milwaukee" },
          { name: "Madison" },
          { name: "Green Bay" },
          { name: "Kenosha" },
          { name: "Racine" },
        ],
      },
      {
        name: "Wyoming",
        children: [
          { name: "Cheyenne" },
          { name: "Casper" },
          { name: "Laramie" },
          { name: "Gillette" },
          { name: "Rock Springs" },
        ],
      },
    ],
  },
];

export default locations;
