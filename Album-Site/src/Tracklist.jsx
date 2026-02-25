export default function Tracklist({ tracklist }){
    if (!tracklist) {
        return null;
    }
    return (
        <div className='tracklist'>{tracklist}</div>
    );
}