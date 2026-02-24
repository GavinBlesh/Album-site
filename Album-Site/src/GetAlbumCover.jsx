export default function GetAlbumCover({ coverUrl }) {
  return (
    <div className="album-cover-container">
      {coverUrl ? (
        <img className="album-cover" src={coverUrl} alt="Album Cover" />
      ) : (
        <p>No cover available</p>
      )}
    </div>
  );
}