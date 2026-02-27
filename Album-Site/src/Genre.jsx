export default function Tracklist({ name }){
    if (!name) {
        return null;
    }
    return (
        <div className='genre'>{name}</div>
    );
}