export default function Artist({ name }){
    if (!name) {
        return null;
    }
    return (
        <div className='artist'>{name}</div>
    );
}