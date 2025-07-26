import './UserCard.css' 

function UserCard({name,email,age,id}) {
     return (
    <div className="user-card">
      <h2 className="user-name">{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>ID:</strong> {id}</p>
    </div>
  );
}
export default UserCard;