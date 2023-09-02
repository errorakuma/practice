import Card from "../components/videocard/video";
import styles from "../components/videocard/video.module.css";

const Home = () => {
  const videos = [

    {
      "id": 1,
      "channelName": "VanossGaming",
      "channelLogoUrl": "https://robohash.org/hicveldicta.png?set=set1",
      "likes": 1234,
      "views": 15161,
      "thumbnailUrl": "https://api.slingacademy.com/public/sample-photos/1.jpeg",
      "title": "Microsoft Word"
    },
    {
      "id": 2,
      "channelName": "Markiplier",
      "likes": 5678,
      "channelLogoUrl": "https://robohash.org/hicveldicta.png?set=set2",
      "thumbnailUrl": "https://api.slingacademy.com/public/sample-photos/2.jpeg",
      "views": 17171,
      "title": "Adobe Photoshop"
    },
    {
      "id": 3,
      "channelName": "Jacksepticeye",
      "likes": 9101,
      "channelLogoUrl": "https://robohash.org/hicveldicta.png?set=set3",
      "views": 19191,
      "title": "Google Chrome",
      "thumbnailUrl": "https://api.slingacademy.com/public/sample-photos/3.jpeg"
    },
    {
      id: 4,
      channelName: "DanTDM",
      likes: 1213,
      channelLogoUrl: "https://robohash.org/hicveldicta.png?set=set4",
      thumbnailUrl: "https://api.slingacademy.com/public/sample-photos/4.jpeg",
      views: 21212,
      title: "Microsoft Excel"
    },
    {
      id: 5,
      channelName: "PopularMMOs",
      thumbnailUrl: "https://api.slingacademy.com/public/sample-photos/5.jpeg",
      channelLogoUrl: "https://robohash.org/hicveldicta.png?set=set5",
      likes: 1415,
      views: 15161,
      title: "Notepad++"
    },
    {
      id: 6,
      channelName: "W2S",
      likes: 1617,
      channelLogoUrl: "https://robohash.org/hicveldicta.png?set=set6",
      views: 17171,
      title: "VLC Media Player",
      thumbnailUrl: "https://api.slingacademy.com/public/sample-photos/6.jpeg"
    },
    {
      id: 7,
      channelName: "Ali-A",
      likes: 1819,
      thumbnailUrl: "https://api.slingacademy.com/public/sample-photos/7.jpeg",
      channelLogoUrl: "https://robohash.org/hicveldicta.png?set=set7",
      views: 19191,
      title: "WinRAR"
    },
    {
      id: 8,
      channelName: "H2ODelirious",
      likes: 2021,
      channelLogoUrl: "https://robohash.org/hicveldicta.png?set=set5",
      views: 15161,
      thumbnailUrl: "https://api.slingacademy.com/public/sample-photos/8.jpeg",
      title: "7-Zip"
    },
    {
      id: 9,
      channelName: "TheSyndicateProject",
      likes: 2223,
      views: 15161,
      title: "Skype",
      channelLogoUrl: "https://robohash.org/hicveldicta.png?set=set6",
      thumbnailUrl: "https://api.slingacademy.com/public/sample-photos/9.jpeg"
    },
    {
      id: 10,
      channelName: "CaptainSparklez",
      channelLogoUrl: "https://robohash.org/hicveldicta.png?set=set3",
      likes: 2425,
      thumbnailUrl: "https://api.slingacademy.com/public/sample-photos/10.jpeg",
      views: 21212,
      title: "Mozilla Firefox"
    },
    {
      id: 11,
      channelName: "freeCodeCamp.org",
      channelLogoUrl: "https://robohash.org/hicveldicta.png?set=set4",
      likes: 2627,
      views: 21212,
      thumbnailUrl: "https://api.slingacademy.com/public/sample-photos/11.jpeg",
      title: "Grand Theft Auto V"
    },
    {
      id: 12,
      channelName: "Fireship",
      channelLogoUrl: "https://robohash.org/hicveldicta.png?set=set5",
      thumbnailUrl: "https://api.slingacademy.com/public/sample-photos/12.jpeg",
      likes: 2829,
      views: 15161,
      title: "Overwatch"
    },
    {
      id: 13,
      channelName: "The Net Ninja",
      channelLogoUrl: "https://robohash.org/hicveldicta.png?set=set4",
      thumbnailUrl: "https://api.slingacademy.com/public/sample-photos/13.jpeg",
      likes: 3031,
      views: 15161,
      title: "The Elder Scrolls V: Skyrim"
    },
    {
      id: 14,
      channelName: "Andy Sterkowitz",
      likes: 3233,
      channelLogoUrl: "https://robohash.org/hicveldicta.png?set=set3",
      views: 15161,
      thumbnailUrl: "https://api.slingacademy.com/public/sample-photos/14.jpeg",
      title: "Super Mario Odyssey"
    },
    {
      id: 15,
      channelName: "Alex Hyett",
      channelLogoUrl: "https://robohash.org/hicveldicta.png?set=set5",
      likes: 3435,
      views: 15161,
      thumbnailUrl: "https://api.slingacademy.com/public/sample-photos/15.jpeg",
      title: "The Legend of Zelda: Breath of the Wild"
    },
    {
      id: 16,
      channelName: "ArjanCodes",
      channelLogoUrl: "https://robohash.org/hicveldicta.png?set=set6",
      likes: 3637,
      views: 15161,
      thumbnailUrl: "https://api.slingacademy.com/public/sample-photos/16.jpeg",
      title: "Red Dead Redemption 2"
    },
    {
      id: 17,
      channelName: "Nick Chapsas",
      likes: 3839,
      thumbnailUrl: "https://api.slingacademy.com/public/sample-photos/17.jpeg",
      channelLogoUrl: "https://robohash.org/hicveldicta.png?set=set5",
      views: 13141,
      title: "World of Warcraft"
    },
    {
      id: 18,
      channelName: "Code with Ania Kubów",
      likes: 4041,
      channelLogoUrl: "https://robohash.org/hicveldicta.png?set=set3",
      thumbnailUrl: "https://api.slingacademy.com/public/sample-photos/18.jpeg",
      views: 67890,
      title: "League of Legends"
    },
    {
      id: 19,
      channelName: "Engineering with Utsav",
      likes: 4243,
      views: 10112,
      title: "Fortnite",
      thumbnailUrl: "https://api.slingacademy.com/public/sample-photos/19.jpeg",
      channelLogoUrl: "https://robohash.org/hicveldicta.png?set=set2"
    },
    {
      id: 20,
      channelName: "Internet Made Coder",
      likes: 4445,
      views: 12345,
      title: "Minecraft",
      thumbnailUrl: "https://api.slingacademy.com/public/sample-photos/20.jpeg",
      channelLogoUrl: "https://robohash.org/hicveldicta.png?set=set3"
    }

  ];

  return (
    <div className={styles.Gallery}>
      {videos.map((video) => (<Card videoData={video} />))}

    </div>
  );
};

export default Home;
