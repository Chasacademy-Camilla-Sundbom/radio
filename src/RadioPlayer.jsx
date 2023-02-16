import { useState, useEffect } from "react";

function RadioPlayer() {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    fetch("https://api.sr.se/api/v2/channels?format=json&size=100")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setChannels(data.channels);
      });
  }, []);
  return (
    <div className="flex flex-col space-y-10">
      {channels.map((channel) => (
        <div
          className="flex flex-row items-center"
          key={channel.id}
          style={{ backgroundColor: "#" + channel.color }}
        >
          <img className="w-40" src={channel.image} alt={channel.name} />

          <div className="flex-col ml-4">
            <h2 className="text-white text-xl pb-5">{channel.name}</h2>
            <audio src={channel.liveaudio.url} controls />
          </div>
        </div>
      ))}
    </div>
  );
}
export default RadioPlayer;
