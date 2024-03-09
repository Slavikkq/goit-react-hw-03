export default function SearchBox({ handleSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts"
        onChange={handleSearch}
      />
    </div>
  );
}
