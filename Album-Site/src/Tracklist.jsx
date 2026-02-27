export default function Tracklist({ name }){
    if (!name) {
        return null;
    }
    return (
        <div className='tracklist'>
            {name.map((track, index) => ( 
                <div key={index} className='track'>
                    {track.position} {track.title}
                </div>
            ))}
        </div>
    );
}